import type { Metadata } from "next";
import "./globals.css";
import { GillSans, GillSansBold } from './fonts';

export const metadata: Metadata = {
  title: "Warehouse",
  description: "Website for architectural design office \"Warehouse\"",
  keywords: 'architecture, architect, design, art',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="jp">
      <body className={GillSans.className}>{children}</body>
    </html>
  );
}
