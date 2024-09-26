import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Min Zone",
  description:
    "The Min Zone - Dive into a world of fun with our addictive minigames! Challenge friends, track your progress, and discover hidden gems. 🎮",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-[#f4f4f4]`}>{children}</body>
    </html>
  );
}
