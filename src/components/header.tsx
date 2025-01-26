import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Link from "next/link";
import Image from "next/image";
import logo from "@/app/assets/logo.png";
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
    href: "/informasjon",
  },
  {
    name: "Om oss",
    href: "/om-oss",
  },
];

export function Header() {
  return (
    <header className="flex px-4 w-full mb-12 top-0 sticky bg-background z-10">
      <nav className="pt-2 pb-2 font-medium flex space-x-2 w-full justify-between">
        <Image
          src={logo}
          alt={"Logo"}
          width={64}
          height={64}
          className="brightness-0 invert"
        ></Image>

        <div className="space-x-2 pt-4 hidden sm:flex">
          {routes.map((route) => {
            return (
              <Button variant="headerLink" size="lg" key={route.name}>
                <Link href={route.href}>{route.name}</Link>
              </Button>
            );
          })}
        </div>
        <div className="flex sm:w-0 sm:hidden pt-4 pr-10">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant={"ghost"}>
                <span className="text-4xl">&#x2261;</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40">
              {routes.map((route) => {
                return (
                  <Button variant="headerLink" size="lg" key={route.name}>
                    <Link href={route.href}>{route.name}</Link>
                  </Button>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
}
