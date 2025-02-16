import type { Metadata } from "next";
import "./globals.css";
import {Providers} from "../app/providers";
import MouseEffect from "./components/MouseEffect";
import Navbar from "@/app/components/Navbar";

const Grid = () => (
  <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
        <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255, 0, 0, 0.2)" strokeWidth="1"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />
  </svg>
);

export const metadata: Metadata = {
  title: "Hack Club SV",
  description: "Hack Club Suceava is a community of young makers.",
  icons: ["/icon-rounded.png"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased`}>
        <Providers>
          <Navbar />
          <MouseEffect />
          {children}
          <Grid />
        </Providers>
      </body>
    </html>
  );
}