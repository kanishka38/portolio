import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kanishka Sonkar - Portfolio",
  description: "Software Engineer | Full-Stack Developer | Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
