import type { Metadata } from "next";
import localFont from "next/font/local";
import { NextUIProviders } from "@/providers/NextUIProviders";
import "./globals.css";

const clashDisplay = localFont({
  src: [
    {
      path: "./fonts/ClashDisplay-Variable.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "MSSN - Landing Page",
  description: "MSSN - Landing Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clashDisplay.className}>
        <NextUIProviders>{children}</NextUIProviders>
      </body>
    </html>
  );
}
