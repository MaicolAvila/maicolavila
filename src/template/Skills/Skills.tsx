import Carousel from "@/components/carousel/Carousel";
import { El_Messiri } from "next/font/google";
import Image from "next/image";
import React from "react";

const elMessiri = El_Messiri({ weight: "700", subsets: ["latin"] });

export default function SkillsSection() {
  const technologies = [
    { name: "React", image: "/images/react_logo.webp" },
    { name: "NextJS", image: "/images/next_logo.webp" },
    { name: "NestJS", image: "/images/nest_logo.webp" },
    { name: ".NET", image: "/images/NET_logo.webp" },
    { name: "Retool", image: "/images/retool_logo.webp" },
    { name: "Flutter", image: "/images/flutter_logo.webp" },
    { name: "Angular", image: "/images/angular_logo.webp" },
  ];
  return (
    <section id="skills" className="flex flex-col items-start w-full my-8">
      <h2 className={`${elMessiri.className} text-4xl font-bold text-blue-100 w-full text-center`}>
        Skills
      </h2>
      <h3 className="text-2xl font-bold text-blue-100 my-4">
        Technology&apos;s
      </h3>
      <Carousel items={technologies} />
      <h3 className="text-2xl font-bold text-blue-100 my-4">Specialization</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <Image
            width={150}
            height={150}
            src="/images/fintech_logo.webp"
            alt="Fintech"
            className="w-24 h-24 mx-auto mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">Fintech</h3>
          <p className="text-gray-700">
            With experience in fintech projects, I have contributed to the
            development of innovative solutions for the financial sector.
          </p>
        </div>
        <div className="text-center">
          <Image
            width={150}
            height={150}
            src="/images/maps_logo.webp"
            alt="Maps"
            className="w-24 h-24 mx-auto mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">Maps</h3>
          <p className="text-gray-700">
            I have worked on projects involving the use of maps, providing
            geospatial solutions for various applications.
          </p>
        </div>
        <div className="text-center">
          <Image
            width={150}
            height={150}
            src="/images/blockchain_logo.webp"
            alt="Blockchain"
            className="w-24 h-24 mx-auto mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">Blockchain</h3>
          <p className="text-gray-700">
            With knowledge in blockchain, I have participated in projects
            exploring the potential of this technology to transform industries.
          </p>
        </div>
      </div>
    </section>
  );
}
