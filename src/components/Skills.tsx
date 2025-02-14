import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Server, Code, Database, Lock, Terminal } from 'lucide-react';

const skillCategories = [
  {
    title: 'Cloud Platforms',
    icon: Cloud,
    skills: [
      { name: 'AWS', level: 90 },
      { name: 'Azure', level: 85 },
      { name: 'Google Cloud', level: 75 },
    ],
  },
  {
    title: 'DevOps Tools',
    icon: Server,
    skills: [
      { name: 'Docker', level: 95 },
      { name: 'Kubernetes', level: 90 },
      { name: 'Jenkins', level: 85 },
    ],
  },
  {
    title: 'Infrastructure as Code',
    icon: Code,
    skills: [
      { name: 'Terraform', level: 90 },
      { name: 'CloudFormation', level: 85 },
      { name: 'Ansible', level: 80 },
    ],
  },
  {
    title: 'Databases',
    icon: Database,
    skills: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'Redis', level: 75 },
    ],
  },
  {
    title: 'Security',
    icon: Lock,
    skills: [
      { name: 'IAM', level: 90 },
      { name: 'Security Groups', level: 85 },
      { name: 'VPC', level: 85 },
    ],
  },
  {
    title: 'Programming',
    icon: Terminal,
    skills: [
      { name: 'Python', level: 90 },
      { name: 'Bash', level: 85 },
      { name: 'Go', level: 75 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-md"
                >
                  <div className="flex items-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600 mr-2" />
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                          <span className="text-sm text-gray-500">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;