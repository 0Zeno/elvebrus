import Link from "next/link";
import { FooterInfo } from "./footer-info";
import { Socials } from "./socials";

export function Footer() {
  return (
    <>
      <footer className="bg-primary flex space-y-2 md:space-y-0 md:space-x-0 md:flex-row flex-col md:justify-between p-4 px-8 bottom-0 mt-16">
        <div className=" text-secondary-foreground">
          <FooterInfo />
        </div>
        <div className=" text-secondary-foreground">
          <Socials />
        </div>
        <div className=" text-secondary-foreground">
          <h2 className="font-semibold text-2xl">Siden er laget av</h2>
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
