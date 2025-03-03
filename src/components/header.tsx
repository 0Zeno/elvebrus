import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { FiMenu } from "react-icons/fi";

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
    name: "Billetter",
    href: "/billetter",
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
      <nav className=" font-medium flex space-x-2 w-full justify-between">
        <Link href={"/"}>
          <Image
            src={logo}
            alt={"Logo"}
            width={64}
            height={64}
            className="brightness-0 invert"
          ></Image>
        </Link>

        <div className="space-x-2 pt-4 hidden sm:flex">
          {routes.map((route) => {
            return (
              <Button variant="headerLink" size="lg" key={route.name}>
                <Link className="" href={route.href}>
                  {route.name}
                </Link>
              </Button>
            );
          })}
        </div>
        <div className="flex sm:w-0 sm:hidden pr-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="outline-none">
              <button>
                <FiMenu className="h-8 w-8" />
              </button>
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
