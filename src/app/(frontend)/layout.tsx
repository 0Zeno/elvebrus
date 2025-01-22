import { Header } from "@/components/header";
import "../globals.css";
import { Footer } from "@/components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nb">
      <body>
        <div className="min-h-screen">
          {/* <div className="absolute inset-0 left-1/2 h-full min-h-screen -translate-x-1/2">
            <BackgroundSvg width={400} className={"relative top-0 left-[45rem]"} />
            <BackgroundSvg width={400} className={"relative -top-[13rem] right-[35rem]"} />
            <BackgroundSvg width={400} className={"relative -top-[55rem] right-[5rem]"} />
            <BackgroundSvg width={400} className={"relative -top-[13rem] right-[35rem]"} />
          </div> */}
          <Header />
          <div className="flex z-10 justify-center ">
            <div className="flex flex-col w-3/4">{children}</div>
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
