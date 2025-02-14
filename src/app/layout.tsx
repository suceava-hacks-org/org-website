import type { Metadata } from "next";
import "./globals.css";
import {Providers} from "../app/providers";

export const metadata: Metadata = {
  title: "Hack Club CNPRSV",
  description: "Hack Club CNPRSV is a community of young makers.",
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
          {children}
        </Providers>
      </body>
    </html>
  );
}