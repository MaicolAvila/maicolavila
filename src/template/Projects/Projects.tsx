import { El_Messiri } from "next/font/google";
import Image from "next/image";
import React from "react";
import styles from "./Projects.module.css";

const elMessiri = El_Messiri({ weight: "700", subsets: ["latin"] });

const projects = [
  {
    name: "MiSim",
    image: "/images/misim.webp",
    description:
      "Facilitated user-friendly and cost-effective account recharge for various SIM cards, with a focus on GPS use. Versatile for other applications.",
  },
  {
    name: "Vector Fx Portal",
    image: "/images/vectorfx.webp",
    description:
      "A portal for Vector Capital to manage clients, brokers, and information, facilitating buying and selling orders for foreign exchange. Streamlining business operations and client transactions.",
  },
  {
    name: "OTC",
    image: "/images/otc.webp",
    description:
      "A comprehensive currency trading software for managing clients, orders, and more, with user roles including brokers, admins, and clients.",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center bg-gray-200 p-8"
    >
      <h2 className={elMessiri.className + " text-4xl font-bold mb-8 text-blue-100"}>
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`${styles.cardProject} max-w-md mx-auto rounded-xl overflow-hidden shadow-green hover:shadow-green-hv hover:scale-105 transition duration-300 ease-in-out`}
          >
            <Image
              className="w-full h-48 object-cover object-center"
              width={500}
              height={150}
              src={project.image}
              alt={project.name}
              loading="lazy"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
