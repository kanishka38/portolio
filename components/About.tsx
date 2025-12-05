"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaMapMarkerAlt } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
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
            About Me
          </h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm a passionate Software Engineer with expertise in building scalable web
              applications. Currently working as a Software Engineer II at Category, where I
              design and implement complex systems using modern technologies.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              My experience spans across full-stack development, from creating intuitive
              frontends with React and Next.js to building robust backends with Node.js and
              Python. I'm always eager to learn new technologies and take on challenging projects.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-purple-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
              <FaGraduationCap className="mr-3 text-purple-600" />
              Education
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Indian Institute Of Technology, Jodhpur
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Bachelor of Technology
                </p>
                <p className="text-gray-500 dark:text-gray-500">
                  CGPA: 7.34/10
                </p>
                <p className="text-gray-500 dark:text-gray-500 flex items-center mt-2">
                  <FaMapMarkerAlt className="mr-2" size={14} />
                  Jodhpur, IN
                </p>
                <p className="text-gray-500 dark:text-gray-500">
                  July 2019 - May 2023
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
