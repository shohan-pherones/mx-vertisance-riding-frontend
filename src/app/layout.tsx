import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import PrelineScript from "./components/PrelineScript";
import "./globals.css";
import { cn } from "./lib/utils";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MX Vertisance Riding",
  description:
    "MX Vertisance Riding is a renowned motocross training academy located in Bangladesh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(spaceGrotesk.className, "antialiased")}>
        {children}
      </body>
      <PrelineScript />
    </html>
  );
}
