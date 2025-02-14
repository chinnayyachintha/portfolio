import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Server, Cloud, Database } from 'lucide-react';

const projects = [
  {
    title: 'Cloud Migration & Modernization',
    description: 'Led the migration of a monolithic application to a microservices architecture on AWS, improving scalability and reducing operational costs by 40%.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
    links: {
      github: 'https://github.com',
      live: 'https://example.com',
    },
    achievements: [
      'Reduced deployment time from hours to minutes',
      'Implemented auto-scaling policies',
      'Achieved 99.99% uptime',
    ],
  },
  {
    title: 'DevOps Pipeline Automation',
    description: 'Designed and implemented a fully automated CI/CD pipeline for a financial services company, reducing deployment errors by 75%.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    technologies: ['Jenkins', 'GitLab', 'Ansible', 'Python'],
    links: {
      github: 'https://github.com',
      live: 'https://example.com',
    },
    achievements: [
      'Automated testing and deployment',
      'Implemented security scanning',
      'Reduced manual intervention by 90%',
    ],
  },
  {
    title: 'Infrastructure Monitoring Solution',
    description: 'Built a comprehensive monitoring and alerting system using the ELK stack, providing real-time insights into system performance.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    technologies: ['Elasticsearch', 'Grafana', 'Prometheus', 'Azure'],
    links: {
      github: 'https://github.com',
      live: 'https://example.com',
    },
    achievements: [
      'Real-time monitoring dashboard',
      'Custom alerting system',
      'Reduced incident response time by 60%',
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
              >
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <ul className="mb-4 space-y-2">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-600">
                        <span className="mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-end space-x-4">
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;