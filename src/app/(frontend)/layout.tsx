import { Header } from "@/components/header";
import "../globals.css";
import { Footer } from "@/components/footer";
import { SanityLive } from "@/sanity/lib/live";

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
            <div className="flex flex-col w-3/4 max-w-[2560px]">{children}</div>
            <SanityLive />
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
