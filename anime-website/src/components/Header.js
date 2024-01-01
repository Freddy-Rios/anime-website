import Link from "next/link";
import React from "react";
import { ThemeToggler } from "./ThemeToggler";

function Header() {
  return (
    <header>
      <Link href="/">My Navbar</Link>

      {/* left area where the search and genre options will be  */}
      <div className="flex space-x-2">
        <h1>placeholder</h1>
        {/* genre dropdown */}
        {/* search input */}
        {/* optional theme toggler */}
        <ThemeToggler />
      </div>
    </header>
  );
}

export default Header;
