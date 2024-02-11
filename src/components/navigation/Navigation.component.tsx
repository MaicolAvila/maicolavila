"use client";

import { routesApp } from "@/shared/domain/routes";
import Link from "next/link";
import React, { useEffect } from "react";

export default function Navigation() {
  const routes = routesApp;

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
          if (link) link.classList.add("text-2xl");
        } else {
          const id = entry.target.getAttribute("id");
          const link = document.querySelector(`[href="#${id}"]`);
          if (link) link.classList.remove("text-2xl");
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });
  };

  return (
    <div className="border-solid border-2 border-l-blue-100 px-4">
      <ul className="gap-4 flex flex-col">
        {routes.map((route) => {
          return (
            <li key={route.path}>
              <Link
                href={route.path}
                className="text-xl text-blue-100 transition duration-300 ease-in-out"
              >
                - {route.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
