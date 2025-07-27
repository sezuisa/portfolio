// app/projects/ContentNavWrapper.tsx
"use client";

import React from "react";
import ContentNav from "@/components/contentnav";
import { usePathname } from "next/navigation";

const navLists: Record<
  string,
  { title: string; href: string; hierarchy: number }[]
> = {
  "/carers": [
    { title: "Back to top", href: "#top", hierarchy: 0 },
    { title: "Overview", href: "#overview", hierarchy: 0 },
    { title: "Introduction", href: "#introduction", hierarchy: 0 },
    { title: "The Challenge", href: "#challenge", hierarchy: 1 },
    { title: "The Approach", href: "#approach", hierarchy: 1 },
    { title: "Discover", href: "#discover", hierarchy: 0 },
    { title: "Secondary Research", href: "#secondary-research", hierarchy: 1 },
    { title: "Primary Research", href: "#primary-research", hierarchy: 1 },
    { title: "Define", href: "#define", hierarchy: 0 },
    { title: "Making Sense of my Data", href: "#sensemaking", hierarchy: 1 },
    {
      title: "Round One: Framing the Landscape",
      href: "#landscape",
      hierarchy: 1,
    },
    {
      title: "Round Two: Deepening the Understanding",
      href: "#understanding",
      hierarchy: 1,
    },
    { title: "What I found", href: "#findings", hierarchy: 1 },
    { title: "User Needs emerge", href: "#user-needs", hierarchy: 1 },
    { title: "Defining the UX Vision", href: "#ux-vision", hierarchy: 1 },
    { title: "Reflections", href: "#reflections", hierarchy: 0 },
    { title: "What's next?", href: "#what'snext?", hierarchy: 0 },
    { title: "Contact", href: "#theend", hierarchy: 0 },
  ],
  "/expenses": [
    { title: "Back to top", href: "#top", hierarchy: 0 },
    { title: "Overview", href: "#overview", hierarchy: 0 },
    { title: "Introduction", href: "#introduction", hierarchy: 0 },
    { title: "The Challenge", href: "#challenge", hierarchy: 1 },
    { title: "The Approach", href: "#approach", hierarchy: 1 },
    { title: "Discover", href: "#discover", hierarchy: 0 },
    { title: "Secondary Research", href: "#secondary-research", hierarchy: 1 },
    { title: "Primary Research", href: "#primary-research", hierarchy: 1 },
    { title: "Define", href: "#define", hierarchy: 0 },
    { title: "Insight Synthesis", href: "#synthesis", hierarchy: 1 },
    { title: "Defining our Target Users", href: "#target-users", hierarchy: 1 },
    { title: "Develop", href: "#develop", hierarchy: 0 },
    { title: "Ideation", href: "#ideation", hierarchy: 1 },
    { title: "Prototyping", href: "#prototyping", hierarchy: 1 },
    { title: "Deliver", href: "#deliver", hierarchy: 0 },
    { title: "The Final Idea", href: "#final-idea", hierarchy: 1 },
    { title: "Outcomes", href: "#outcomes", hierarchy: 0 },
    { title: "Reflections", href: "#reflections", hierarchy: 0 },
    { title: "My Leadership & Teamwork", href: "#leadership", hierarchy: 1 },
    {
      title: "My UX Design Contributions",
      href: "#contributions",
      hierarchy: 1,
    },
    { title: "What I learned", href: "#learnings", hierarchy: 1 },
    { title: "Contact", href: "#theend", hierarchy: 0 },
  ],
  "/lausha": [
    { title: "Back to top", href: "#top", hierarchy: 0 },
    { title: "Overview", href: "#overview", hierarchy: 0 },
    { title: "Introduction", href: "#introduction", hierarchy: 0 },
    { title: "The Challenge", href: "#challenge", hierarchy: 1 },
    { title: "The Approach", href: "#approach", hierarchy: 1 },
    { title: "Discover", href: "#discover", hierarchy: 0 },
    { title: "Primary Research", href: "#primary-research", hierarchy: 1 },
    { title: "Define", href: "#define", hierarchy: 0 },
    { title: "Insight Synthesis", href: "#synthesis", hierarchy: 1 },
    { title: "Finding an Opportunity", href: "#hmw", hierarchy: 1 },
    { title: "Develop", href: "#develop", hierarchy: 0 },
    { title: "Ideation", href: "#ideation", hierarchy: 1 },
    { title: "The Idea", href: "#final-idea", hierarchy: 1 },
    { title: "Low-Fi Wireframing", href: "#wireframing", hierarchy: 1 },
    { title: "Deliver", href: "#deliver", hierarchy: 0 },
    { title: "A simple Design System", href: "#design-system", hierarchy: 1 },
    { title: "Implementing User Feedback", href: "#feedback-1", hierarchy: 1 },
    { title: "Mid-Fi Prototyping", href: "#prototyping", hierarchy: 1 },
    { title: "The Final Design", href: "#final-design", hierarchy: 1 },
    { title: "Reflections", href: "#reflections", hierarchy: 0 },
    { title: "What I learned", href: "#learnings", hierarchy: 1 },
    { title: "A word on ethics", href: "#ethics", hierarchy: 1 },
    { title: "What's next?", href: "#what'snext?", hierarchy: 0 },
    { title: "Contact", href: "#theend", hierarchy: 0 },
  ],
  "/smarti": [
    { title: "Back to top", href: "#top", hierarchy: 0 },
    { title: "Overview", href: "#overview", hierarchy: 0 },
    { title: "Develop", href: "#develop", hierarchy: 0 },
    { title: "Low-Fi Wireframing", href: "#wireframing", hierarchy: 1 },
    { title: "Deliver", href: "#deliver", hierarchy: 0 },
    { title: "The Final Design", href: "#final-design", hierarchy: 1 },
    { title: "Contact", href: "#theend", hierarchy: 0 },
  ],
};

export default function ContentNavWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const navList = navLists[pathname] || [];

  return (
    <>
      <ContentNav navList={navList} />
      {children}
    </>
  );
}
