"use client";
import Link from "next/link";
import Logo from "./Logo";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../Hooks/useAuth"; 

const Header = () => {
  const [click, setClick] = useState(false);
  const { isAuthenticated, logout } = useAuth(); 
  const router = useRouter();

  const toggle = () => setClick(!click);

  const handleLogout = () => {
    logout();
    router.push("/");
    router.refresh();
  };

  return (
    <header className="w-full p-4 theme-dark px-5 sm:px-10 flex items-center justify-between">
      <Logo />

      <button className="inline-block sm:hidden z-50" onClick={toggle} aria-label="Hamburger Menu">
        <div className="w-6 cursor-pointer transition-all ease duration-300">
          <div className="relative">
            <span className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{ transform: click ? "rotate(-45deg) translateY(0)" : "rotate(0deg) translateY(6px)" }}>
              &nbsp;
            </span>
            <span className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{ opacity: click ? 0 : 1 }}>
              &nbsp;
            </span>
            <span className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{ transform: click ? "rotate(45deg) translateY(0)" : "rotate(0deg) translateY(-6px)" }}>
              &nbsp;
            </span>
          </div>
        </div>
      </button>

      <nav className="w-max py-3 px-6 sm:px-8 border border-solid border-dark rounded-full font-medium capitalize items-center flex sm:hidden
        fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50 transition-all ease duration-300"
        style={{ top: click ? "1rem" : "-5rem" }}>
        <Link href="/" className="mr-2">Home</Link>
        <Link href="/about" className="mx-2">About</Link>
        <Link href="/contact" className="mx-2">Contact</Link>
        {isAuthenticated && <Link href="/product" className="mx-2">Add Product</Link>}
        {!isAuthenticated ? (
          <Link href="/login" className="mx-2">Login</Link>
        ) : (
          <button onClick={handleLogout} className="mx-2 text-red-500">Logout</button>
        )}
      </nav>

      <nav className="w-max font-medium capitalize items-center hidden sm:flex top-6 right-1 text-light bg-light backdrop-blur-sm z-50">
        <Link href="/" className="mr-2">Home</Link>
        <Link href="/about" className="mx-2">About</Link>
        <Link href="/contact" className="mx-2">Contact</Link>
        {isAuthenticated && <Link href="/product" className="mx-2">Add Product</Link>}
        {!isAuthenticated ? (
          <Link href="/login" className="mx-2">Login</Link>
        ) : (
          <button onClick={handleLogout} className="mx-2 text-red-500">Logout</button>
        )}
      </nav>
    </header>
  );
};

export default Header;
