import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const MotionLink = motion(Link);

const NavLogo = () => {
  return (
    <div className="flex items-center justify-center">
      <MotionLink
        className="w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold font-mono underline underline-offset-4"
        href="/"
        whileHover={{
          backgroundColor: [
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
          transition: {duration: 1, repeat: Infinity}
        }}
      >
        KH
      </MotionLink>
    </div>
  );
};

export default NavLogo;
