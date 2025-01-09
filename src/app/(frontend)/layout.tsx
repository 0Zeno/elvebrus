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
        <body>
          <div className="h-screen">
            <Header />
            <div>{children}</div>
          </div>
          <Footer />
        </body>
      </body>
    </html>
  );
}
