import type { Metadata } from "next";
import "./globals.css";
import { content } from "./fonts/fonts";
import CustomCursor from "./components/custom/CustomCursor";

export const metadata: Metadata = {
  title: "Neel Vaghasiya | Portfolio",
  description: "Welcome to Neel Vaghasiya's personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={content.className}>
        <CustomCursor/>
        {children}
      </body>
    </html>
  );
}
