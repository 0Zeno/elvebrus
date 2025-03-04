import { Header } from "@/components/header";
import "../globals.css";
import { Footer } from "@/components/footer";
import { SanityLive } from "@/sanity/lib/live";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Elvebrusfestivalen",
  description: "Musikkfestival i Agnavika på Stanghelle 18.-19. Juli 2025.",
  keywords:
    "Elvebrusfestivalen, musikkfestival, festival Norge, konserter, live musikk, festival 2025, Stanghelle, Agnavika, Elvebrus, elvebrus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nb">
      <body>
        <div className="min-h-screen">
          <Header />
          <div className="flex justify-center ">
            <div className="flex flex-col w-3/4">{children}</div>
            <SanityLive />
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
