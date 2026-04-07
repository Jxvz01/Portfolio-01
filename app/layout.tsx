import type { Metadata } from "next";
import "../styles/globals.css";
import React from 'react';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: "H. JEEVAN | JXVZ01 - Engineering, Design & Systems",
  description: "Personal portfolio of H. Jeevan (Jxvz01), an engineering student focused on building systems, exploring culture, and solving real-world problems with creative technical execution.",
  keywords: ["Jeevan H", "JXVZ01", "Systems Design", "Product Engineering", "Full Stack Developer", "Robotics", "AI Projects"]
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
