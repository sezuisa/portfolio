import type { Metadata } from "next";

export const siteUrl = "https://portfolio.sarahhaegele.me";
const siteName = "Sarah Hägele Portfolio";

// Shown when a link to the site is shared (WhatsApp, LinkedIn, Slack, ...)
const previewImage = {
  url: "/thumbnail.png",
  width: 552,
  height: 368,
  alt: "Sarah Hägele's handwritten 'sh' logo on a warm brown gradient",
};

type PageMetadataProps = {
  title: string;
  description: string;
  path: string; // e.g. "/" or "/carers"
};

// Builds the metadata for a page, including the Open Graph and Twitter tags
// that control link previews. Use this in every page/layout that sets metadata,
// so each page gets its own title and description in the preview.
export function pageMetadata({
  title,
  description,
  path,
}: PageMetadataProps): Metadata {
  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName,
      locale: "en_GB",
      url: path,
      title,
      description,
      images: [previewImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [previewImage],
    },
  };
}
