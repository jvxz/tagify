import "@/styles/globals.css";

import { Archivo } from "next/font/google";
import { type Metadata } from "next";
import Providers from "./components/Providers";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${archivo.variable}`}>
      <Providers>
        <body>{children}</body>
      </Providers>
    </html>
  );
}
