"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaFilePdf } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-purple-50/20 dark:bg-gray-800"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or
            just having a conversation. Feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6"
        >
          <motion.a
            href="https://www.linkedin.com/in/kanishka-sonkar-30520a243/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
          >
            <FaLinkedin className="text-5xl text-white mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">LinkedIn</h3>
            <p className="text-purple-100">Connect with me</p>
          </motion.a>

          <motion.a
            href="mailto:kanishkasonkar231@gmail.com"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-br from-gray-700 to-gray-800 dark:from-gray-600 dark:to-gray-700 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
          >
            <FaEnvelope className="text-5xl text-white mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Email</h3>
            <p className="text-gray-300">Send a message</p>
          </motion.a>

          <motion.a
            href="/kanishka_BE-1.pdf"
            download
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
          >
            <FaFilePdf className="text-5xl text-white mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Resume</h3>
            <p className="text-red-100">Download PDF</p>
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Kanishka Sonkar. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
