'use client';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Lora } from 'next/font/google';

const serif = Lora({
  style: 'normal',
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-lora',
});

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [loading, setLoading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className={`${serif.className} absolute h-screen w-screen z-1000 top-0 bg-black before:content-['Loading...!'] 
            before:text-white before:absolute before:text-2xl before:bottom-20 before:right-10`}
          initial={{ top: 0 }}
          exit={{
            top: '-100%',
            transition: { duration: 1, ease: 'easeIn' },
          }}
        />
      )}
    </AnimatePresence>
  );
};

export default Loader;
