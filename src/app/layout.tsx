import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@/app/globals.css";
import { Layout } from "@/components/Layout";

export const metadata: Metadata = {
  title: {
    default: "Blue Iron Revival | Preserving the Legacy of Ford Tractors",
    template: "%s | Blue Iron Revival",
  },
  description: "Restoration stories, decoding tools, and practical knowledge for Ford and Fordson tractor enthusiasts.",
  keywords: ["Ford tractors", "Fordson", "tractor restoration", "serial number lookup", "model decoder"],
  openGraph: {
    title: "Blue Iron Revival",
    description: "Preserving the Legacy of Ford Tractors",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
