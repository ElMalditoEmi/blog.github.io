import React from 'react';
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <div className="footer p-4 w-full fixed bottom-0">
      <Image src="/assets/github_logo/github-mark.svg" alt="ElMalditoEmi's logo" width={30} height={30} />
      <p className='pt-2'>&copy; {new Date().getFullYear()} ElMalditoEmi. All rights reserved.</p>
    </div>
  );
};

export default Footer;