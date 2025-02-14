import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Senior DevOps Engineer',
    company: 'Tech Innovations Inc.',
    period: '2021 - Present',
    description: 'Leading a team of DevOps engineers in implementing and maintaining cloud infrastructure across multiple projects.',
    achievements: [
      'Reduced infrastructure costs by 35% through optimization',
      'Implemented GitOps practices across the organization',
      'Led migration to Kubernetes for 20+ microservices',
    ],
  },
  {
    title: 'Cloud Infrastructure Engineer',
    company: 'Global Solutions Ltd.',
    period: '2019 - 2021',
    description: 'Designed and maintained cloud infrastructure for enterprise clients using AWS and Azure.',
    achievements: [
      'Architected multi-region disaster recovery solution',
      'Implemented Infrastructure as Code using Terraform',
      'Reduced deployment time by 70%',
    ],
  },
  {
    title: 'Systems Engineer',
    company: 'DataTech Systems',
    period: '2017 - 2019',
    description: 'Managed on-premise and cloud infrastructure, focusing on automation and monitoring.',
    achievements: [
      'Automated routine maintenance tasks',
      'Implemented comprehensive monitoring solution',
      'Improved system uptime to 99.9%',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
          <div className="max-w-3xl mx-auto">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 pb-12 last:pb-0"
              >
                {index !== experiences.length - 1 && (
                  <div className="absolute left-[11px] top-0 h-full w-px bg-blue-200"></div>
                )}
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                  <Briefcase size={14} className="text-white" />
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex flex-wrap justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-gray-800">{experience.title}</h3>
                    <span className="text-blue-600 font-medium">{experience.period}</span>
                  </div>
                  <h4 className="text-lg text-gray-600 mb-4">{experience.company}</h4>
                  <p className="text-gray-600 mb-4">{experience.description}</p>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start text-gray-600">
                        <span className="mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;