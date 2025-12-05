"use client";

import { motion } from "framer-motion";
import {
  SiJava,
  SiKotlin,
  SiPython,
  SiTypescript,
  SiJavascript,
  SiGo,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiAmazonaws,
  SiDocker,
  SiFlutter,
  SiAndroid,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", icon: SiJava, color: "text-orange-600" },
      { name: "Kotlin", icon: SiKotlin, color: "text-purple-600" },
      { name: "Python", icon: SiPython, color: "text-yellow-600" },
      { name: "TypeScript", icon: SiTypescript, color: "text-purple-600" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
      { name: "Golang", icon: SiGo, color: "text-cyan-600" },
      { name: "C/C++", icon: null, color: "text-gray-600" },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "React.js", icon: SiReact, color: "text-cyan-500" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-gray-900 dark:text-white" },
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
    ],
  },
  {
    title: "Mobile Development",
    skills: [
      { name: "Android", icon: SiAndroid, color: "text-green-600" },
      { name: "Flutter", icon: SiFlutter, color: "text-purple-500" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: SiMysql, color: "text-purple-600" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
      { name: "Redis", icon: SiRedis, color: "text-red-600" },
      { name: "Elasticsearch", icon: null, color: "text-yellow-600" },
    ],
  },
  {
    title: "Cloud & Tools",
    skills: [
      { name: "AWS", icon: SiAmazonaws, color: "text-orange-600" },
      { name: "Docker", icon: SiDocker, color: "text-purple-600" },
      { name: "DigitalOcean", icon: null, color: "text-purple-500" },
      { name: "Git", icon: null, color: "text-orange-600" },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
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
            Skills
          </h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col items-center justify-center text-center"
                  >
                    {skill.icon ? (
                      <skill.icon
                        className={`text-4xl mb-2 ${skill.color}`}
                      />
                    ) : (
                      <div
                        className={`text-2xl font-bold mb-2 ${skill.color}`}
                      >
                        {skill.name.substring(0, 2)}
                      </div>
                    )}
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
