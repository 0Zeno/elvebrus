import Link from "next/link";

const links = [
  {
    name: "Om oss",
    href: "/om-oss",
  },
  {
    name: "Partnere",
    href: "/partnere",
  },
];

export function FooterInfo() {
  return (
    <div className="flex flex-col">
      <h2 className="font-semibold">Informasjon</h2>

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
