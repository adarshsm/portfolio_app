import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      addToTrail(e.clientX, e.clientY);
    };

    const addToTrail = (x: number, y: number) => {
      setTrail(prev => [...prev, { x, y, id: Date.now() }].slice(-15));
    };

    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <>
      {trail.map((point, index) => (
        <motion.div
          key={point.id}
          className="fixed w-3 h-3 rounded-full pointer-events-none z-50"
          initial={{ opacity: 0.8, scale: 1 }}
          animate={{
            opacity: 0,
            scale: 0,
            x: point.x - 6,
            y: point.y - 6,
          }}
          transition={{ duration: 1 }}
          style={{
            background: `rgba(59, 130, 246, ${0.8 - index * 0.1})`,
          }}
        />
      ))}
      <motion.div
        className="fixed w-6 h-6 rounded-full border-2 border-blue-500 pointer-events-none z-50"
        animate={{
          x: position.x - 12,
          y: position.y - 12,
          scale: 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
    </>
  );
};

export default CustomCursor;