import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience & Projects",
  description: "Work experience, personal projects, and education by Roger Gonzalez Sedano.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
