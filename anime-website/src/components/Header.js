import Link from "next/link";
import React from "react";
import { ThemeToggler } from "./ThemeToggler";

function Header() {
  return (
    // Header found on all pages of website
    <header
      className="fixed w-full z-20 top-0 flex items-center 
                justify-between p-5 bg-gradient-to-t 
                from-gray-200/0 via-gray-900/25 to-gray-900"
    >
      <Link href="/" className="mr-10">
        <h1>MY Navbar</h1>
      </Link>

      {/* left area where the search and genre options will be  */}
      <div className="flex space-x-2">
        <h1>placeholder</h1>
        {/* genre dropdown */}
        {/* search input */}
        {/* dark and light mode toggler */}
        <ThemeToggler />
      </div>
    </header>
  );
}

export default Header;
