import React from 'react';
import Layout from "./Layout"
import Link from 'next/link';

const Footer = () => {
    return (
      <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
        <Layout className="py-6 flex items-center justify-between">
          <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
          <div className="flex items-center">
            This is
            <span className="text-2xl text-primary px-1">&#9825;</span>
            <Link href="/" className="underline underline-offset-4">
              Khalid Hasan
            </Link>
          </div>
          <Link
            href="/"
            target="_blank"
            className="underline underline-offset-4"
          >
            Say Hello
          </Link>
        </Layout>
      </footer>
    );
};

export default Footer;