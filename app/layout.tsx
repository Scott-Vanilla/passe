import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Passé - A journey to the past.",
  description: "Passé - A journey to the past.",
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
