// Snowflake.js
import React from 'react';
import { motion } from 'framer-motion';

const Snowflake = ({ size, duration, initialX, initialY, scatterX, scatterY }) => {
  return (
    <motion.div
      initial={{ x: initialX, y: initialY, opacity: 1 }}
      animate={{ y: '100vh', opacity: 0.8 }}
      transition={{ duration: duration, repeat: Infinity, repeatType: 'loop', ease: 'linear' }}
      whileHover={{ scale: 1.5, x: scatterX, y: scatterY, opacity: 0.5 }}
      style={{
        width: size,
        height: size,
        backgroundColor: '#FB8569',
        borderRadius: '50%',
        position: 'absolute',
        top: 0,
        left: 0,
      }}
    />
  );
};

export default Snowflake;
