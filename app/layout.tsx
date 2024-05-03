import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "./_components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pop Tv - Ao Vivo",
  description: "Pop Tv - Rio Grande do Sul",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`{inter.className} dark`}>
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
