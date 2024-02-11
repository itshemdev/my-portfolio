'use client';

import Padding from './padding';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <>
      {/* <div className="w-full h-16"></div> */}
      <motion.header
        className="bg-transparent z-50 fixed h-16 w-full top-0"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
          },
        }}
      >
        <div className="bg-black text-white text-center w-full py-1">
          Site is under maintenance
        </div>

        <div className="flex items-center justify-between top-0 px-2">
          <a href="" className="text-xl">
            Hem
          </a>
          <nav className="flex gap-2">
            {['Work', 'About', 'Contact'].map((item) => (
              <a key={item} className="opacity-80">
                {item}
              </a>
            ))}
          </nav>
        </div>
      </motion.header>
    </>
  );
};

export default Header;
