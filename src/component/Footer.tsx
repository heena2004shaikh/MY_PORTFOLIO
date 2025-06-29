import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <motion.footer
      className="bg-[#006666]  dark:bg-slate-900 py-8 px-6 text-center mt-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto space-y-4">
        {/* Name */}
        <h3 className="text-2xl font-bold text-white dark:text-white">
          Heena Shaikh
        </h3>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/heena2004shaikh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white dark:text-slate-300 hover:text-[#b2d8d8] dark:hover:text-purple-400 transition-colors"
          >
            <Github size={22} />
          </a>
          <a
            href="https://linkedin.com/in/heena-shaikh-556731353/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white dark:text-slate-300 hover:text-[#b2d8d8] dark:hover:text-purple-400 transition-colors"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="mailto:heena2004shaikh@gmail.com"
            className="text-white dark:text-slate-300 hover:text-[#b2d8d8] dark:hover:text-purple-400 transition-colors"
          >
            <Mail size={22} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-white dark:text-white-400">
          © {new Date().getFullYear()} Heena Shaikh. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
