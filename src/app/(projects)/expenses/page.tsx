import type { Metadata } from "next";
import StaticBlob from "@/components/staticblob";
import ProjectsHeader from "@/components/projectsheader";
import BackButton from "@/components/backbutton";

export const metadata: Metadata = {
  title: "Carers - Sarah Hägele Portfolio",
  description:
    "Detail page about the UX design project 'Expenses' by Sarah Hägele",
};

export default function Expenses() {
  return (
    <div>
      <ProjectsHeader heading="Expenses" />
      <main className="min-h-screen -mb-25 px-4 pt-4 pb-25 lg:px-16 bg-extra-dark-choco">
        <div className="w-full flex flex-row justify-center">
          <BackButton
            text="Back to projects"
            href="/#anchor_projects"
            className="mx-auto"
          />
        </div>

        <div className="w-full py-8 flex flex-row justify-center flex-wrap">
          <StaticBlob blobType={0} className="w-70 h-70" />
          <StaticBlob blobType={1} className="w-70 h-70" />
          <StaticBlob blobType={2} className="w-70 h-70" />
          <StaticBlob blobType={3} className="w-70 h-70" />
        </div>
      </main>
    </div>
  );
}
