import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import { cn } from "./lib/utils";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MX Vertisance Riding Academy",
  description:
    "MX Vertisance Riding Academy is a renowned motocross training academy located in Bangladesh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="motocross">
      <body className={cn(spaceGrotesk.className, "antialiased")}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
