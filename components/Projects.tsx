"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaCode, FaServer, FaDatabase, FaMobile, FaGlobe } from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  icon: "FaCode" | "FaServer" | "FaDatabase" | "FaMobile" | "FaGlobe";
  link?: string;
  github?: string;
}

const iconMap = {
  FaCode: FaCode,
  FaServer: FaServer,
  FaDatabase: FaDatabase,
  FaMobile: FaMobile,
  FaGlobe: FaGlobe,
};

const projects: Project[] = [
  {
    title: "Image URL Processor",
    description:
      "A Next.js application that implements a job queue system to process image URLs asynchronously. The system validates image URLs by checking their accessibility and updates their status accordingly.",
    features: [
      "Validates image URLs by checking their accessibility",
      "Real-time web interface to monitor task status",
      "Uses Redis for job queueing via BullMQ",
      "MongoDB for data persistence",
      "Asynchronous job processing",
    ],
    technologies: [
      "Next.js",
      "React",
      "MongoDB",
      "Redis",
      "BullMQ",
      "Axios",
      "ioredis",
      "Mongoose",
    ],
    icon: "FaServer",
    github: "https://github.com/kanishka231/image-task-manager",
  },
  {
    title: "Doctor-Patient Appointment Application",
    description:
      "A comprehensive web application that streamlines the process of appointment scheduling and management between doctors and patients with role-based access control.",
    features: [
      "Role-based access control (Doctors, Patients, Admins)",
      "Secure authentication with NextAuth",
      "Create, update, and delete appointments",
      "Help and support system with FAQs",
      "Support ticket submission",
      "Password hashing and secure session management",
    ],
    technologies: ["Next.js", "MongoDB", "NextAuth", "Ant Design"],
    icon: "FaGlobe",
    link: "https://doctor-patient-appointment-management.vercel.app/",
  },
  {
    title: "Calendar Application",
    description:
      "A calendar application built using Next.js, offering functionality similar to Google Calendar. Users can create events, view a week-based calendar, and switch between weeks.",
    features: [
      "Week-based calendar view with time and day axes",
      "Week switching functionality",
      "Event creation by clicking or dragging on calendar grid",
      "Sidebar with week view overview",
      "JWT-based authentication without NextAuth",
      "Login and registration screens",
    ],
    technologies: ["Next.js", "Node.js", "MongoDB", "JWT"],
    icon: "FaGlobe",
    github: "https://github.com/kanishka231/calender_application",
    link: "https://dizely-calendar.vercel.app/",
  },
  {
    title: "Farmer Product Recommendations App",
    description:
      "A Flutter-based mobile application designed to assist farmers in finding the best agricultural products tailored to their needs with search, filtering, and purchase request features.",
    features: [
      "Advanced search and category-based filtering",
      "Comprehensive product details with images",
      "Purchase request submission system",
      "Responsive design optimized for all devices",
      "Smooth animated page transitions",
      "Cloud Firestore integration",
    ],
    technologies: ["Flutter", "Cloud Firestore", "Dart"],
    icon: "FaMobile",
    github: "https://github.com/kanishka231/Farmer",
  },
  {
    title: "Shortest Pathfinding Visualization Using DFS",
    description:
      "A visualization tool for the A* pathfinding algorithm with an interactive grid, backend implemented in Go, and frontend built using React.",
    features: [
      "Interactive 20x20 grid for selecting start and end points",
      "Shortest path calculation using A* algorithm",
      "Go backend processing pathfinding logic",
      "React frontend with intuitive UI",
      "Cross-Origin Resource Sharing enabled",
    ],
    technologies: ["Go", "JavaScript", "React", "CSS", "HTML", "gorilla/mux"],
    icon: "FaCode",
    github: "https://github.com/kanishka231/DFS_visulalizer",
  },
  {
    title: "Store Monitoring System",
    description:
      "A system to monitor restaurant activity based on their operational status. Processes data from CSV files and stores it in MySQL database with FastAPI backend for report generation.",
    features: [
      "Data ingestion from CSV files into MySQL database",
      "Report generation based on store data",
      "Exports reports to CSV files",
      "Background tasks using FastAPI's async capabilities",
      "Polling mechanism to check report generation status",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "MySQL",
      "Uvicorn",
      "Async Programming",
      "CSV Parsing",
    ],
    icon: "FaServer",
    github: "https://github.com/kanishka231/store_monitoring_system",
  },
  {
    title: "Wellfound Job Scraper",
    description:
      "A complete solution for scraping and displaying job listings from Wellfound with React frontend and Flask-based backend.",
    features: [
      "Free text search for any job role",
      "Category search with predefined categories and roles",
      "Real-time scraping of job listings",
      "Interactive UI displaying job details and application links",
      "Pagination support for multiple pages",
      "REST API endpoint for querying job roles",
      "CORS handling for cross-origin requests",
    ],
    technologies: ["React", "Flask", "Python", "Node.js", "Vue.js"],
    icon: "FaGlobe",
    github: "https://github.com/kanishka231/angellist",
  },
  {
    title: "Notification API",
    description:
      "A Notification API built with FastAPI to send notifications via different channels such as Email, SMS, and WhatsApp using external services.",
    features: [
      "Sends email notifications using Mailgun",
      "Extensible architecture for adding SMS and WhatsApp",
      "Asynchronous, non-blocking email sending",
      "Multi-threaded API request processing",
      "Batch notification support for improved efficiency",
      "Handles high-volume requests",
    ],
    technologies: ["Python", "FastAPI", "Uvicorn"],
    icon: "FaServer",
    github: "https://github.com/kanishka231/notification_api",
  },
  {
    title: "Spam Identification and Contact Search REST API",
    description:
      "A REST API for a mobile application that helps users identify spam numbers and search for individuals by name or phone number, built with Django and PostgreSQL.",
    features: [
      "User registration with unique phone number constraint",
      "Global database combining all users and contacts",
      "Spam identification with likelihood calculation",
      "Search by name with prioritized results",
      "Search by phone number with detailed results",
      "JWT authentication for secure sessions",
      "Role-based access controls for data privacy",
      "Email visibility based on contact relationships",
    ],
    technologies: ["Django", "Django REST Framework", "PostgreSQL", "Python", "JWT"],
    icon: "FaServer",
    github: "https://github.com/kanishka231/spam_detector",
  },
  {
    title: "TCP Client-Server Application",
    description:
      "A TCP client-server application that simulates a high transaction system using a Redis-like storage mechanism with configurable TPS settings.",
    features: [
      "TCP client communicating over multiple connections",
      "Redis-like in-memory key-value storage",
      "Configurable transactions per second (TPS)",
      "JSON configuration file support",
      "Concurrent request handling using Goroutines",
      "Transaction ID generation and tracking",
    ],
    technologies: ["Go", "TCP/IP"],
    icon: "FaServer",
    github: "https://github.com/kanishka231/tcp-server",
  },
  {
    title: "Mobile-Friendly Invoice Generator",
    description:
      "A versatile tool designed to streamline the invoicing process with a seamless experience on both desktop and mobile devices.",
    features: [
      "Mobile-optimized responsive design",
      "Elegant customization with styles, fonts, and color palettes",
      "Effortless data entry with intuitive interface",
      "PDF generation at the click of a button",
      "Real-time preview of invoices",
      "Interactive date pickers",
      "Itemized entries with quantities and prices",
      "Automated calculations for totals and taxes",
    ],
    technologies: ["React.js", "Node.js"],
    icon: "FaGlobe",
    link: "https://invoice-generator-5c6e.onrender.com/",
  },
  {
    title: "REACTIFY",
    description:
      "A dynamic ReactJS web application with user authentication, photo uploading, messaging, notifications, and a mini calculator.",
    features: [
      "User authentication system",
      "Photo uploading with Firebase Cloud storage",
      "Messaging using Cloud Firestore",
      "Real-time notifications",
      "Mini calculator functionality",
      "High user adoption and engagement rates",
    ],
    technologies: ["React.js", "Cloud Firestore", "Firebase"],
    icon: "FaGlobe",
  },
  {
    title: "Mai Application",
    description:
      "A rural development project with focus on empowering village women. Developed a language-specific application for village women using Flutter and Firebase.",
    features: [
      "Language-specific application for village women",
      "Flutter-based mobile application",
      "Firebase backend integration",
      "90% user adoption rate",
      "User surveys for continuous improvement",
      "60% increase in user engagement",
    ],
    technologies: ["Flutter", "Firebase"],
    icon: "FaMobile",
    github: "https://github.com/kanishka231/mai_new_version",
  },
];

export default function Projects() {
  const [expandedProjects, setExpandedProjects] = useState<{
    [key: number]: { features: boolean; technologies: boolean };
  }>({});

  const toggleFeatureExpand = (index: number) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [index]: {
        ...prev[index],
        features: !prev[index]?.features,
      },
    }));
  };

  const toggleTechnologyExpand = (index: number) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [index]: {
        ...prev[index],
        technologies: !prev[index]?.technologies,
      },
    }));
  };

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-purple-50/20 dark:bg-gray-800"
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
            Projects
          </h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
        </motion.div>

        {projects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center py-12"
          >
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Projects coming soon! Check back later.
            </p>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const IconComponent = iconMap[project.icon];
              const isFeaturesExpanded = expandedProjects[index]?.features || false;
              const isTechnologiesExpanded = expandedProjects[index]?.technologies || false;
              const featuresToShow = isFeaturesExpanded
                ? project.features
                : project.features.slice(0, 3);
              const technologiesToShow = isTechnologiesExpanded
                ? project.technologies
                : project.technologies.slice(0, 4);

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="text-4xl text-purple-600 dark:text-purple-400 mb-4">
                    {IconComponent && <IconComponent />}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                    {project.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {featuresToShow.map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-gray-600 dark:text-gray-400 flex items-start"
                      >
                        <span className="text-purple-600 mr-2 mt-1">•</span>
                        <span className="text-xs">{feature}</span>
                      </li>
                    ))}
                    {project.features.length > 3 && (
                      <li>
                        <button
                          onClick={() => toggleFeatureExpand(index)}
                          className="text-xs text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium cursor-pointer hover:underline transition-colors"
                        >
                          {isFeaturesExpanded
                            ? "Show less"
                            : `+${project.features.length - 3} more features`}
                        </button>
                      </li>
                    )}
                  </ul>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {technologiesToShow.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <button
                        onClick={() => toggleTechnologyExpand(index)}
                        className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-full text-xs font-medium cursor-pointer transition-colors"
                      >
                        {isTechnologiesExpanded
                          ? "Show less"
                          : `+${project.technologies.length - 4} more`}
                      </button>
                    )}
                  </div>
                  {(project.link || project.github) && (
                    <div className="flex gap-4 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-600 dark:text-purple-400 hover:underline text-xs font-medium"
                        >
                          View Code →
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-600 dark:text-purple-400 hover:underline text-xs font-medium"
                        >
                          Live Demo →
                        </a>
                      )}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}