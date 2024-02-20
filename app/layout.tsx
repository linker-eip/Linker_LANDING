import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { AOSInit } from "@/components/aos";

const cairo = Cairo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Linker",
  description: "Linker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AOSInit />
      <body className={cairo.className}>
        {children}
      </body>
    </html>
  );
}
