import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";
import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher";
import Navbar from "@/components/ui/navbar";
import Image from "next/image";

import { NavigationMenuDemo } from "./navigation";
import Footer from "@/components/ui/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MDQ",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div
          style={{
            zIndex: -1,
            position: "fixed",
            width: "100vw",
            height: "100vh",
            filter: "brightness(50%)",
          }}
        >
          <Image
            src="/bg.png"
            alt="Mountains with snow"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <header>
          {" "}
    
          <Navbar />
        </header>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
