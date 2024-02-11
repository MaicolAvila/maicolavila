import { routesApp } from "@/shared/domain/routes";
import Link from "next/link";
import React from "react";

export default function Navigation() {
  const routes = routesApp;
  return (
    <div className="border-solid border-2 border-l-blue-100 px-4">
      <ul className="gap-4 flex flex-col">
        {routes.map((route) => {
          return (
            <li key={route.path}>
              <Link href={route.path} className="text-xl text-blue-100">
                - {route.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
