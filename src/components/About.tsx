import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Coffee } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                With over 8 years of experience in Cloud Architecture and DevOps, I've helped organizations of all sizes modernize their infrastructure and streamline their development processes. My passion lies in building scalable, resilient systems that enable teams to deliver value faster and more reliably.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I specialize in designing and implementing cloud-native solutions, with expertise in AWS and Azure. My approach combines technical excellence with a deep understanding of business needs, ensuring that infrastructure decisions align with organizational goals.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center">
                  <Award className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="font-semibold">8+ Years</p>
                  <p className="text-sm text-gray-500">Experience</p>
                </div>
                <div className="text-center">
                  <BookOpen className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="font-semibold">12+</p>
                  <p className="text-sm text-gray-500">Certifications</p>
                </div>
                <div className="text-center">
                  <Coffee className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="font-semibold">50+</p>
                  <p className="text-sm text-gray-500">Projects</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl blur opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Professional headshot"
                className="relative rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;