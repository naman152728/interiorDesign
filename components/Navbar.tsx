"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const getLinkClass = (path: string) => {
    const isActive = pathname === path || (path !== "/" && pathname?.startsWith(path));
    if (isActive) {
      return "font-button text-button text-primary border-b border-primary pb-1 transition-all duration-300 ease-in-out";
    }
    return "font-button text-button text-on-surface-variant pb-1 hover:text-primary transition-colors duration-300";
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-6 max-w-container-max mx-auto">
        <Link href="/" className="font-display-lg text-headline-sm tracking-tight text-primary uppercase">
          Our Space Studio
        </Link>
        <div className="hidden md:flex gap-gutter items-center">
          <Link href="/" className={getLinkClass("/")}>
            Home
          </Link>
          <Link href="/portfolio" className={getLinkClass("/portfolio")}>
            Portfolio
          </Link>
          <Link href="/services" className={getLinkClass("/services")}>
            Services
          </Link>
          <Link href="/about" className={getLinkClass("/about")}>
            About & Contact
          </Link>
        </div>
        <Link href="/about#contact" className="bg-primary text-on-primary px-6 py-2 font-button text-button uppercase tracking-widest hover:bg-secondary transition-colors duration-300 inline-block">
          Inquire
        </Link>
      </div>
    </nav>
  );
}
