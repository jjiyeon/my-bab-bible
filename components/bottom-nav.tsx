"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { name: "홈", path: "/" },
  { name: "성경", path: "/bible" },
  { name: "저장", path: "/saved" },
  { name: "같이읽기", path: "/together" },
  { name: "마이", path: "/me" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 safe-area-bottom">
      <div className="flex justify-around items-center h-16">
        {tabs.map((tab) => {
          const isActive = pathname === tab.path;
          return (
            <Link
              key={tab.path}
              href={tab.path}
              className={`flex flex-col items-center justify-center flex-1 h-full text-sm ${
                isActive
                  ? "text-blue-600 font-semibold"
                  : "text-gray-600"
              }`}
            >
              {tab.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
