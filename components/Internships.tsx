"use client";

import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

interface Internship {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  techStack: string[];
}

const internships: Internship[] = [
  {
    title: "Android Application Developer - Internship",
    company: "AIIMS Jodhpur",
    location: "Jodhpur, Rajasthan, India",
    period: "August 2022 - December 2022",
    description:
      "Worked on a rural development project with a focus on empowering village women. Developed a language-specific mobile application using Flutter and Firebase.",
    achievements: [
      "Developed a language-specific application for village women using Flutter for front-end and Firebase for back-end",
      "Achieved a 90% user adoption rate through effective design and user-centric approach",
      "Conducted user surveys leading to a 40% improvement in satisfaction and 60% increase in user engagement",
      "Worked collaboratively with the AIIMS Jodhpur team on rural development initiatives",
    ],
    techStack: ["Flutter", "Firebase", "Android Development", "Mobile App Development"],
  },
  {
    title: "Undergraduate Research Internship (ML and Bioinformatics)",
    company: "CSIR-IGIB",
    location: "Delhi, India (Remote)",
    period: "May 2022 - July 2022",
    description:
      "Conducted research in Machine Learning and Bioinformatics, working on computational biology projects and data analysis.",
    achievements: [
      "Worked on machine learning models for bioinformatics applications",
      "Performed data analysis and research in computational biology",
      "Contributed to research and development projects at CSIR-IGIB",
      "Gained experience in handling biological datasets and applying ML algorithms",
    ],
    techStack: [
      "Python",
      "Machine Learning",
      "Bioinformatics",
      "Data Analysis",
      "Research and Development",
    ],
  },
];

export default function Internships() {
  return (
    <section
      id="internships"
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
            Internships
          </h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
        </motion.div>

        {internships.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center py-12"
          >
            <FaBriefcase className="text-6xl text-gray-400 dark:text-gray-600 mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-2">
              No internships added yet.
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-sm">
              Add your internships by editing{" "}
              <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                components/Internships.tsx
              </code>
            </p>
          </motion.div>
        ) : (
          <div className="space-y-12">
            {internships.map((internship, index) => (
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
                      {internship.title}
                    </h3>
                    <p className="text-xl text-purple-600 dark:text-purple-400 font-semibold mb-2">
                      {internship.company}
                    </p>
                  </div>
                  <div className="text-right md:text-left md:mt-0 mt-4">
                    <p className="text-gray-600 dark:text-gray-400 flex items-center md:justify-end justify-start mb-1">
                      <FaCalendarAlt className="mr-2" size={14} />
                      {internship.period}
                    </p>
                    <p className="text-gray-500 dark:text-gray-500 flex items-center md:justify-end justify-start">
                      <FaMapMarkerAlt className="mr-2" size={14} />
                      {internship.location}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {internship.description}
                </p>

                {internship.achievements && internship.achievements.length > 0 && (
                  <ul className="space-y-3 mb-6">
                    {internship.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="text-gray-600 dark:text-gray-400 flex items-start"
                      >
                        <span className="text-purple-600 mr-3 mt-1">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {internship.techStack && internship.techStack.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    {internship.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}