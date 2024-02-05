import { routesApp } from "@/shared/domain/routes";
import Link from "next/link";
import React from "react";

export default function Navigation() {
  const routes = routesApp;
  return (
    <div className="py-4 px-8 bg-green-1000">
      <ul className="gap-4 flex row">
        {routes.map((route) => {
          return (
            <li key={route.path}>
              <Link href={route.path} className="text-xl">
                {route.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
