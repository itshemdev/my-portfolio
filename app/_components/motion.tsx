'use client';

import { ReactNode } from 'react';
import { AnimationProps, motion } from 'motion/react';

const Motion = ({
  children,
  initial,
  className,
  whileHover,
  animate,
}: {
  children?: ReactNode;
  className: string;
  initial?: any;
  whileHover?: any;
  animate?: any;
}) => {
  return (
    <motion.div
      style={{
        fontFamily: 'Times',
      }}
      initial={initial}
      className={className}
      whileHover={whileHover}
      animate={animate}
    >
      {children}
    </motion.div>
  );
};

export default Motion;
