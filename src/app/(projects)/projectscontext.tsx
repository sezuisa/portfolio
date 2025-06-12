"use client";

import { createContext, useContext } from "react";

export const ProjectsContext = createContext<string | null>(null);

export const usePageHeading = () => useContext(ProjectsContext);
