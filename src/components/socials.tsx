import Link from "next/link";

const links = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/elvebrusfestivalen/",
  },
  {
    name: "Tiktok",
    href: "https://www.tiktok.com/@elvebrus",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/elvebrusfestivalen/",
  },
  {
    name: "Youtube",
    href: "https://www.youtube.com/channel/UCStCNJMBXuag-FC_YWfhiGQ",
  },
];

export function Socials() {
  return (
    <div className="flex flex-col">
      <h2 className="font-semibold text-2xl">Følg oss:</h2>
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
