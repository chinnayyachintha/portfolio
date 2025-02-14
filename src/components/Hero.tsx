import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Server, Code } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100 pt-16">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
              Cloud Engineer & DevOps Specialist
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Building scalable, secure, and efficient cloud solutions that drive innovation
            </p>
            <div className="flex space-x-4">
              <a 
                href="#projects"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                View My Work
              </a>
              <a 
                href="#contact"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-20"></div>
              <div className="relative bg-white p-8 rounded-lg shadow-xl">
                <div className="grid grid-cols-2 gap-8">
                  <div className="flex flex-col items-center">
                    <Cloud className="w-12 h-12 text-blue-600 mb-2" />
                    <span className="text-sm text-gray-600">Cloud Infrastructure</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Server className="w-12 h-12 text-blue-600 mb-2" />
                    <span className="text-sm text-gray-600">DevOps</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Code className="w-12 h-12 text-blue-600 mb-2" />
                    <span className="text-sm text-gray-600">Automation</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <svg className="w-12 h-12 text-blue-600 mb-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7 10L12 14L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-sm text-gray-600">CI/CD</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;