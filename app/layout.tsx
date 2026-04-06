import type { Metadata } from "next";
import "../styles/globals.css";
import React from 'react';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: "H. JEEVAN | JXVZ01 - Portfolio",
  description: "Personal portfolio of H. Jeevan (Jxvz01), an engineering student focused on building systems, exploring culture, and solving real-world problems with creative technical execution.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
