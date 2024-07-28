import Projects from "@/components/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'John - My stuff',
    description: "John | My stuff",
  }

export default function Project() {
  return (
    <div className="flex flex-col min-h-screen">
      <Projects />
    </div>
  );
}