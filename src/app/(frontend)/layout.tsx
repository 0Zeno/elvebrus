import { Header } from "@/components/header";
import "../globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nb">
      <body>
        <Header />
        <body>{children}</body>
      </body>
    </html>
  );
}
