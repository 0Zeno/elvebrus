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
          <Header />
          <div>{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
