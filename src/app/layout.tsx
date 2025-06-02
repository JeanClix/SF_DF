// Suggested code may be subject to a license. Learn more: ~LicenseLog:1569518618.
// Instructions: Update layout with DM Sans font and proper metadata for SmartFit

import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Chatbot from "@/components/Chatbot";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Smart Fit - PE | SMART FIT | PERÚ",
  description: "Gimnasio Smart Fit - La red Smart Fit tiene como propósito democratizar el acceso a la práctica de actividad física de alto nivel, con planos accesibles y adhesión facilitada",
  icons: {
    icon: "https://www.smartfit.com.pe/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <ClientBody className={dmSans.variable}>
        {children}
        <Chatbot />
      </ClientBody>
    </html>
  );
}
