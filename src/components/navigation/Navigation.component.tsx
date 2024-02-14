"use client";

import MenuIcon from "@/assets/icons/menu";
import { routesApp } from "@/shared/domain/routes";
import Image from "next/image";
import React, { useEffect } from "react";

export default function Navigation() {
  const routes = routesApp;
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  useEffect(() => {
    observeSection();
  }, []);

  const observeSection = () => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          const link = document.querySelector(`[href="#${id}"]`);
          if (link) link.classList.remove("text-xl");
          if (link) link.classList.remove("text-blue-100");
          if (link) link.classList.add("text-2xl");
          if (link) link.classList.add("background-text-animation");
        } else {
          const id = entry.target.getAttribute("id");
          const link = document.querySelector(`[href="#${id}"]`);
          if (link) link.classList.add("text-xl");
          if (link) link.classList.add("text-blue-100");
          if (link) link.classList.remove("text-2xl");
          if (link) link.classList.remove("background-text-animation");
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });
  };

  const displayLinks = () => {
    const linksWidget = routes.map((route) => {
      return (
        <li key={route.path}>
          <a
            href={route.path}
            className="text-xl text-blue-100"
            onClick={() => setIsMenuOpen(false)}
          >
            - {route.name}
          </a>
        </li>
      );
    });
    return linksWidget;
  };

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="hidden md:flex min-w-64">
        <div className="fixed mt-6 flex-col flex max-w-64">
          <Image
            className="rounded-full"
            width={350}
            height={350}
            src="/images/profile.webp"
            alt="Maicol Avila"
            loading="lazy"
          />
          <div className="border-solid border-2 border-l-blue-100 border-b-0 border-r-0 border-t-0 px-4">
            <ul className="gap-4 flex flex-col">{displayLinks()}</ul>
          </div>
        </div>
      </div>
      <div className="md:hidden fixed flex justify-start items-center w-screen py-4 px-4 top-0 left-0">
        <MenuIcon
          onClick={handleMenu}
          style={{
            width: "50px",
            cursor: "pointer",
            background: "#15141F",
            boxShadow: "0 0 0 3px rgba(17, 27, 28, 0.1)",
            borderRadius: "50%",
            padding: "10px",
          }}
          color="#B9D0C8"
        />
        {isMenuOpen && (
          <div className="fixed top-0 left-0 w-screen h-screen bg-background-100 bg-opacity-90 z-50">
            <div className="flex flex-col justify-center items-center h-full relative z-20 gap-12">
              <div
                className="absolute top-0 right-0 z-10 m-4 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 12 12"
                  className="fill-icons-100"
                >
                  <path
                    className="stroke-icons-100"
                    d="M2.22 2.22a.749.749 0 0 1 1.06 0L6 4.939L8.72 2.22a.749.749 0 1 1 1.06 1.06L7.061 6L9.78 8.72a.749.749 0 1 1-1.06 1.06L6 7.061L3.28 9.78a.749.749 0 1 1-1.06-1.06L4.939 6L2.22 3.28a.749.749 0 0 1 0-1.06"
                  />
                </svg>
              </div>
              <Image
                className="rounded-full"
                width={350}
                height={350}
                src="/images/profile.webp"
                alt="Maicol Avila"
                loading="lazy"
              />
              <ul className="gap-4 flex flex-col">{displayLinks()}</ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
