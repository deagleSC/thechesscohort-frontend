import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Chess Cohort - Checkmate your limits",
  description:
    "The ultimate SaaS platform for chess enthusiasts. Connect with experienced coaches, engage in interactive lessons, and elevate your chess skills to new heights. Join our vibrant community and master the game of chess with thechesscohort.com.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
