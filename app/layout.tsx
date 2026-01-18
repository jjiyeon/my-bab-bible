import type { Metadata } from "next";
import "./globals.css";
import BottomNav from "@/components/bottom-nav";

export const metadata: Metadata = {
  title: "Bob Bible - 성경 같이 읽기",
  description: "함께 성경을 읽는 Bob Bible MVP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        {children}
        <BottomNav />
      </body>
    </html>
  );
}
