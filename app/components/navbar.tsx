import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="p-4 w-full fixed top-0 left-0 z-10 bg-transparent">
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center space-x-2">
          <Image src="/agent_alpha_name.png" alt="Agent Alpha Logo" width={150} height={30} />
        </div>
        <div className="flex space-x-4">
          <Link href="/" className="text-gray-200 text-s hover:text-gray-300">
            Home
          </Link>
          <Link href="/projects" className="text-gray-200 text-s hover:text-gray-300">
            Projects
          </Link>
          <Link href="/about" className="text-gray-200 text-s hover:text-gray-300">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
