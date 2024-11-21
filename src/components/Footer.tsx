import React from 'react';
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <div className="footer p-4 w-full fixed bottom-0 flex flex-col items-center">
      <a href="https://github.com/ElMalditoEmi" target="_blank" rel="noopener noreferrer">
        <Image src="/github-logo.svg" alt="GitHub Logo" width={24} height={24} className='sm:w-8 sm:h-8 w-6 h-6'/>
      </a>
      <p className='pt-2'>&copy; {new Date().getFullYear()} ElMalditoEmi. All rights reserved.</p>
    </div>
  );
};

export default Footer;