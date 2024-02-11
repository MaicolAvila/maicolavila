import { El_Messiri } from "next/font/google";
import React from "react";

const elMessiri = El_Messiri({ weight: "700", subsets: ["latin"] });

const GithubIcon = React.lazy(() => import("@/assets/icons/github"));
const LinkedinIcon = React.lazy(() => import("@/assets/icons/linkedin"));
const WhatsAppIcon = React.lazy(() => import("@/assets/icons/whatsapp"));

const description = `Hello! I'm a 21-year-old software developer passionate about
crafting innovative solutions. Currently working at Kunturtech, a
Chilean-based company, I've dedicated my teenage years to
programming, turning a hobby into a lifelong pursuit. With a love
for fantasy books and gaming, I bring creativity and enthusiasm to
my work. Explore my portfolio for a glimpse into my world of
high-quality software. Welcome!`;

const iconStyles = "w-12 h-12 flex flex-row justify-center items-center";
const fillColor = "#B9D0C8";

const icons = [
  {
    icon: <GithubIcon className={iconStyles} fillColor={fillColor} />,
    name: "Github",
    url: "https://github.com/MaicolAvila",
  },
  {
    icon: <LinkedinIcon className={iconStyles} fillColor={fillColor} />,
    name: "Linkedin",
    url: "https://www.linkedin.com/in/maicol-andres-avila-vela-b5a0211ab/",
  },
  {
    icon: <WhatsAppIcon className={iconStyles} fillColor={fillColor} />,
    name: "WhatsApp",
    url: "https://wa.me/+573193855688?text=Hello!%20I%20found%20your%20website%20and%20I%20want%20to%20talk%20with%20you.",
  },
];

export default function HomeSection() {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center w-full py-12 md:items-start md:px-12 h-screen"
    >
      <div className="flex flex-col gap-12">
        <div className="px-4 flex flex-row items-center justify-between">
          <h1
            className={
              elMessiri.className +
              " text-center text-6xl text-blue-100 font-bold drop-shadow"
            }
          >
            Maicol Avila
          </h1>
          <div className="flex flex-row justify-center">
            {icons.map((icon) => {
              return (
                <a
                  href={icon.url}
                  key={icon.name}
                  aria-label={icon.name}
                  className="mx-2 hover:scale-150 transition duration-500 ease-out"
                >
                  {icon.icon}
                </a>
              );
            })}
          </div>
        </div>
        <div className="">
          <p className="text-start md:text-xl xl:text-2xl">{description}</p>
        </div>
      </div>
    </section>
  );
}
