import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oliver Ye | Senior Software Engineer",
  description:
    "Portfolio of Oliver Ye, Senior Software Engineer focused on scalable backend systems, developer platforms, and product engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
