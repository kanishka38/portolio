"use client";

import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const experiences = [
  {
    title: "Software Engineer II",
    company: "Catalogus",
    location: "Gurgaon, Haryana",
    period: "February 2025 - Present",
    achievements: [
      "Engineered a custom ETL pipeline for Shopify product import, enabling users to define brands, map system product types, and ingest product data by extracting from Shopify's '.json' endpoints or scraping via Cheerio selectors.",
      "Spearheaded the development of a complete Automated Billing Management System using Node.js, MongoDB, and Next.js, including complex aggregation queries, REST APIs, and full-stack integration.",
      "Integrated AI job execution logging with Amazon Redshift to track token usage across different jobs, enabling precise usage-based billing.",
      "Designed and implemented a robust Excel-based product import feature, enabling clients to seamlessly upload product data with auto-mapping attributes.",
      "Integrated an AI-powered white background image generation module using AWS Bedrock for marketplace requirements.",
    ],
    techStack: ["Next.js", "Node.js", "MongoDB", "AWS Bedrock", "Amazon Redshift"],
  },
  {
    title: "Software Development Engineer",
    company: "Amigo Softcom LLP",
    location: "Gurgaon, Haryana",
    period: "August 2023 - February 2025",
    achievements: [
      "Developed and deployed user profile functionalities and customer portals using Next.js, Node.js, MySQL, and MongoDB for invoice generator application.",
      "Optimized database performance with Redis caching, indexing, and proficient database management, handling large datasets and external APIs using Python scripts.",
      "Created a comprehensive platform for resume building and job applications, integrating Elasticsearch for candidate search, and enhancing SEO performance using Golang.",
      "Successfully deployed projects to production with Digital Ocean, demonstrating expertise in server management, CI/CD integrations, and seamless deployment processes.",
      "Delivered a responsive and optimized statistical website similar to Moneycontrol, effectively managing front-end and backend operations.",
      "Applied SOLID principles, design patterns, and Domain-Driven Design to improve code maintainability and scalability.",
    ],
    techStack: ["Next.js", "Node.js", "MySQL", "MongoDB", "Redis", "Elasticsearch", "Golang", "Python", "DigitalOcean"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-purple-50/30 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Experience
          </h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                    <FaBriefcase className="mr-2 text-purple-600" />
                    {exp.title}
                  </h3>
                  <p className="text-xl text-purple-600 dark:text-purple-400 font-semibold mb-2">
                    {exp.company}
                  </p>
                </div>
                <div className="text-right md:text-left md:mt-0 mt-4">
                  <p className="text-gray-600 dark:text-gray-400 flex items-center md:justify-end justify-start mb-1">
                    <FaCalendarAlt className="mr-2" size={14} />
                    {exp.period}
                  </p>
                  <p className="text-gray-500 dark:text-gray-500 flex items-center md:justify-end justify-start">
                    <FaMapMarkerAlt className="mr-2" size={14} />
                    {exp.location}
                  </p>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {exp.achievements.map((achievement, idx) => (
                  <li
                    key={idx}
                    className="text-gray-600 dark:text-gray-400 flex items-start"
                  >
                    <span className="text-purple-600 mr-3 mt-1">▸</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                {exp.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
