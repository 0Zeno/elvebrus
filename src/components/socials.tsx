import Link from "next/link";

const links = [
  {
    name: "Instagram",
    href: "https://instagram.com",
  },
  {
    name: "Tiktok",
    href: "https://www.tiktok.com",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com",
  },
  {
    name: "Youtube",
    href: "https://www.youtube.com",
  },
];

export function Socials() {
  return (
    <div className="flex flex-col">
      <h2 className="font-semibold">Følg oss:</h2>
      {links.map((link) => {
        return (
          <Link key={link.name} href={link.href}>
            <button className="hover:underline underline-offset-1">
              {" "}
              {link.name}
            </button>
          </Link>
        );
      })}
    </div>
  );
}
