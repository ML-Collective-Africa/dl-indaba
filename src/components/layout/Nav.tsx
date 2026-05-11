"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/data";

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className="border-b border-rule bg-paper/92 sticky top-0 z-30 backdrop-blur flex items-center justify-around">
      <ul className="flex gap-0 list-none m-0 font-sans text-sm overflow-x-auto">
        {NAV_ITEMS.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <li key={item.href} className="flex-none">
              <Link
                href={item.href}
                className={`flex items-center gap-2 py-4 mr-7 no-underline border-b-2 transition-colors duration-150 whitespace-nowrap ${
                  isActive
                    ? "text-ink border-b-purple"
                    : "text-muted border-b-transparent hover:text-ink"
                }`}
              >
                <span>{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
      <div></div> {/* flex hack to center the nav items */}
    </nav>
  );
}
