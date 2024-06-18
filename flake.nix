{
  description = "A very basic flake";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
    treefmt-nix = {
      url = "github:numtide/treefmt-nix";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };

  outputs = { self, nixpkgs, treefmt-nix }:
    let
      system = "x86_64-linux";
      pkgs = import nixpkgs {
        inherit system;
      };
      treefmtEval = treefmt-nix.lib.evalModule pkgs ./treefmt.nix;

      dev-server = pkgs.writeShellApplication {
        name = "dev-server";
        runtimeInputs = [ pkgs.nodejs_22 ];
        text = "${pkgs.nodejs_22}/bin/npm run dev";
      };

      staticHtml = pkgs.buildNpmPackage {
        name = "portfolio";
        src = ./.;
        npmDepsHash = "sha256-eiThjIWb/SaZK9vKtHPlE7AB0s4MKArUp5TFbI36Hqw=";
        installPhase = ''
          mkdir -p $out
          mv build $out
        '';
      };
    in
    {
      formatter.${system} = treefmtEval.config.build.wrapper;
      checks.${system}.formatter = treefmtEval.config.build.check self;

      devShells.${system}.default = pkgs.mkShell {
        packages = with pkgs; [
          nodejs_22
        ];
      };


      packages.${system} = {
        default = dev-server;
        html = staticHtml;
      };
    };
}
