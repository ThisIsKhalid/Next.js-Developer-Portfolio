import Link from "next/link";
import React from "react";
import NavLogo from "./NavLogo";
import { useRouter } from "next/router";

const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[2px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-in-out duration-300
        ${router.asPath === href ? 'w-full' : 'w-0'}
        `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
    
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
        <CustomLink href="/articles" title="Articles" className="ml-4" />
      </nav>

      <nav>
        <Link href="/" target="_blank">
          G
        </Link>
        <Link href="/" target="_blank">
          F
        </Link>
        <Link href="/" target="_blank">
          L
        </Link>
        <Link href="/" target="_blank">
          I
        </Link>
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <NavLogo />
      </div>
    </header>
  );
};

export default Navbar;