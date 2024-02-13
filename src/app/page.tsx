import HomeSection from "@/template/Home/Home";
import ProjectsSection from "@/template/Projects/Projects";
import SkillsSection from "@/template/Skills/Skills";
import React from "react";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full text-white">
      <HomeSection />
      <ProjectsSection />
      <SkillsSection />
    </main>
  );
}
