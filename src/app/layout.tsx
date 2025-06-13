// Suggested code may be subject to a license. Learn more: ~LicenseLog:2806609141.
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
  title: "MEGA FORCE | PERÚ",
  icons: {
    icon: "https://th.bing.com/th/id/OIP.ZWolAlkJ8PiangZZFg0-egHaHa?rs=1&pid=ImgDetMain",
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
