import "@/styles/globals.css";
import { type Metadata } from "next";
import Providers from "./components/Providers";
import Sidebar from "./components/Sidebar";
import Dropover from "./components/Dropover";
import localFont from "next/font/local";
import { Toaster } from "@/components/ui/toaster";

const Hedvig_Letters = localFont({
  src: "../styles/fonts/HedvigLettersSans-Regular.woff2",
  variable: "--font-hedvig-letters",
});

export const metadata: Metadata = {
  title: "tagify ― intuitive id3 metadata editor",
  description: "intuitive id3 metadata editor made for music fans",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${Hedvig_Letters.variable}`}>
      <Providers>
        <body className="flex h-screen">
          <Dropover />
          <Toaster />

          {children}
          <Sidebar />
        </body>
      </Providers>
    </html>
  );
}
