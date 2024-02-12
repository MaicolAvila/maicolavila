import Carousel from "@/components/carousel/Carousel";
import React from "react";

export default function SkillsSection() {
  const technologies = [
    { name: "React", image: "/images/react_logo.webp" },
    { name: "NextJS", image: "/images/next_logo.webp" },
    { name: "NestJS", image: "/images/nest_logo.webp" },
    { name: ".NET", image: "/images/net_logo.webp" },
    { name: "Retool", image: "/images/retool_logo.webp" },
    { name: "Flutter", image: "/images/flutter_logo.webp" },
    { name: "Angular", image: "/images/angular_logo.webp" },
  ];
  return (
    <section id="skills" className="flex flex-col items-start w-full">
      <h2 className="text-4xl font-bold text-blue-100 w-full text-center my-4">Skills</h2>
      <h3 className="text-2xl font-bold text-blue-100 my-2">Technology&apos;s</h3>
      <Carousel items={technologies} />
    </section>
  );
}
