import Link from "next/link";

import * as React from "react";
import { Button } from "./ui/button";

export const routes = [
  {
    name: "Hjem",
    href: "/",
  },
  {
    name: "Biletter",
    href: "/biletter",
  },
  {
    name: "Informasjon",
    href: "/biletter",
  },
  {
    name: "Om oss",
    href: "/biletter",
  },
];

export function Header() {
  return (
    <header className="flex justify-center px-4 w-full mb-12 top-0 sticky">
      <nav className="pt-2 pb-2 font-medium flex space-x-2">
        <div className="space-x-2">
          {routes.map((route) => {
            return (
              <Button variant="headerLink" size="lg" key={route.name}>
                <Link href={route.href}>{route.name}</Link>
              </Button>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
