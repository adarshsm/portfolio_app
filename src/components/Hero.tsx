import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Brain } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden py-32">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900" />
      
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.5
            }
          }
        }}
        className="container mx-auto px-4 z-10 text-center"
      >
        <motion.div
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.8,
                ease: "easeOut"
              }
            }
          }}
          className="mb-8 relative"
        >
          <div className="absolute inset-0 blur-3xl bg-blue-500/20 rounded-full" />
          <Brain className="w-24 h-24 mx-auto text-blue-400 relative" />
        </motion.div>
        
        <motion.div
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1
            }
          }}
          className="mb-32" // Increased bottom margin for better visibility
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600">
            Machine Learning Engineer
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Crafting Intelligent Solutions Through Advanced AI Technologies
          </p>
        </motion.div>
        
        <motion.div
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1
            }
          }}
          className="flex justify-center space-x-6"
        >
          <a
            href="https://github.com"
            className="group relative p-4 hover:scale-110 transition-transform"
          >
            <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full group-hover:bg-blue-500/30 transition-colors" />
            <Github className="w-8 h-8 text-blue-300 relative" />
          </a>
          <a
            href="https://linkedin.com"
            className="group relative p-4 hover:scale-110 transition-transform"
          >
            <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full group-hover:bg-blue-500/30 transition-colors" />
            <Linkedin className="w-8 h-8 text-blue-300 relative" />
          </a>
          <a
            href="mailto:contact@example.com"
            className="group relative p-4 hover:scale-110 transition-transform"
          >
            <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full group-hover:bg-blue-500/30 transition-colors" />
            <Mail className="w-8 h-8 text-blue-300 relative" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;