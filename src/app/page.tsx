import HomeSection from "@/template/Home/Home";
import ProjectsSection from "@/template/Projects/Projects";
import SkillsSection from "@/template/Skills/Skills";
import React from "react";

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-background-100 w-full overflow-y-auto">
      <HomeSection />
      <ProjectsSection />
      <SkillsSection />
    </main>
  );
}
