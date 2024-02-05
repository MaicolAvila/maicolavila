import { El_Messiri } from "next/font/google";
import Image from "next/image";
import React from "react";

const GithubIcon = React.lazy(() => import("@/assets/icons/github"));
const LinkedinIcon = React.lazy(() => import("@/assets/icons/linkedin"));
const WhatsAppIcon = React.lazy(() => import("@/assets/icons/whatsapp"));

const elMessiri = El_Messiri({ weight: "700", subsets: ["latin"] });

const description = `Hello! I'm a 21-year-old software developer passionate about
crafting innovative solutions. Currently working at Kunturtech, a
Chilean-based company, I've dedicated my teenage years to
programming, turning a hobby into a lifelong pursuit. With a love
for fantasy books and gaming, I bring creativity and enthusiasm to
my work. Explore my portfolio for a glimpse into my world of
high-quality software. Welcome!`;

const iconStyles = "w-12 h-12 fill-current text-white";

const icons = [
  {
    icon: <GithubIcon className={iconStyles} />,
    name: "Github",
    url: "https://github.com/MaicolAvila",
  },
  {
    icon: <LinkedinIcon className={iconStyles} />,
    name: "Linkedin",
    url: "https://www.linkedin.com/in/maicol-andres-avila-vela-b5a0211ab/",
  },
  {
    icon: <WhatsAppIcon className={iconStyles} />,
    name: "WhatsApp",
    url: "https://wa.me/+573193855688?text=Hello!%20I%20found%20your%20website%20and%20I%20want%20to%20talk%20with%20you.",
  },
];

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
    description: "A portal for Vector Capital to manage clients, brokers, and information, facilitating buying and selling orders for foreign exchange. Streamlining business operations and client transactions.",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-green-1000">
      <section className="flex flex-col items-center justify-center bgImageMikeWhiteHair w-full h-fit py-12 md:items-start md:px-12">
        <div className="flex flex-col max-w-md gap-12">
          <h1
            className={
              elMessiri.className + " text-center text-6xl text-red-1000 font-bold drop-shadow"
            }
          >
            Maicol Avila
          </h1>
          <div className="px-4">
            <p className="text-center md:text-xl xl:text-2xl">{description}</p>
          </div>
          <div className="flex flex-row justify-center">
            {icons.map((icon) => {
              return (
                <a href={icon.url} key={icon.name} className="mx-2 hover:scale-150 transition duration-500 ease-out">
                  {icon.icon}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center bg-gray-200 p-8">
        <h2 className={elMessiri.className + " text-4xl font-bold mb-8"}>
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-green hover:shadow-green-hv hover:scale-105 transition duration-300 ease-in-out"
            >
              <Image
                className="w-full h-48 object-cover object-center"
                width={500}
                height={129}
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
    </main>
  );
}
