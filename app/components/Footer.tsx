import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="p-4 w-full fixed bottom-0 left-0 z-10 bg-transparent">
      <div className="container mx-auto flex justify-between items-center">
        {/* <div className="flex items-center space-x-2">
          <Image src="/agent_alpha_name.png" alt="Agent Alpha Logo" width={200} height={40} />
        </div> */}
        <div className="text-gray-400 text-sm">
          &copy; 2023 Agent Alpha LLC
        </div>
        <div className="flex space-x-6">
          <Link href="https://www.linkedin.com" passHref>
            <div className="text-gray-600 hover:text-gray-300" rel="noopener noreferrer">
              <FaLinkedin size={40} />
            </div>
          </Link>
          <Link href="https://github.com/jgupdogg" passHref>
            <div className="text-gray-600 hover:text-gray-300" rel="noopener noreferrer">
              <FaGithub size={40} />
            </div>
          </Link>
          <Link href="#contact" passHref>
            <div className="text-gray-600 hover:text-gray-300">
              <FaEnvelope size={40} />
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
