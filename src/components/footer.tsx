import Image from "next/image";
import logo from "@/app/assets/logo.png";
import Link from "next/link";
import { FooterInfo } from "./footer-info";
import { Socials } from "./socials";

export function Footer() {
  return (
    <>
      <footer className="bg-primary flex space-x-32 w-full p-4 bottom-0 ">
        <div className="w-64">
          <Image src={logo} alt={"Logo"} width={96} className="brightness-0"></Image>
        </div>
        <div className="w-64 text-secondary-foreground">
          <FooterInfo />
        </div>
        <div className="w-64 text-secondary-foreground">
          <Socials />
        </div>
        <div className="w-64 text-secondary-foreground">
          <h2 className="font-semibold">Siden er laget av</h2>
          <Link href="https://www.zenoleonardi.no/">
            <button className="hover:underline underline-offset-1">
              Zeno Leonardi
            </button>
          </Link>
        </div>
      </footer>
    </>
  );
}