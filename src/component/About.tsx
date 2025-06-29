import React from "react";
import { GraduationCap, FileText } from "lucide-react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <div id="about" className="bg-white py-20 px-6 md:px-20">
      <div className=" bg-[#006666] border border-white/20 backdrop-blur-md shadow-xl transition-all duration-300 max-w-7xl mx-auto rounded-2xl px-4 py-4 lg:px-10">
        <motion.div
          className="border-[9px] border-white bg-[#66b2b2] dark:bg-gray-900 rounded-3xl py-10 px-6 md:px-16 lg:px-20 my-10 shadow-md"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left: About Me */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              
              <div className="space-y-4">
                <h2 className="text-4xl font-extrabold text-slate-800 dark:text-white leading-tight">
                  About{" "}
                  <span className="text-[#006666] dark:text-white-400">
                    Me
                  </span>
                </h2>
              </div>

              <p className="text-white dark:text-slate-300 text-lg leading-relaxed max-w-md">
                I'm{" "}
                <span className="font-semibold text-[#006666]  dark:text-white">
                  Heena Shaikh
                </span>
                 , a dedicated and skilled Full Stack Developer with experience in building responsive and dynamic web applications. Proficient in modern front-end technologies like React, HTML, CSS, JavaScript, Tailwind, jQuery, and Bootstrap, as well as back-end development using Java and Python. Completed internship in React, gaining hands-on expertise in real-world projects and coding best practices. Successfully delivered projects demonstrating strong problem-solving skills and an eye for detail. Passionate about crafting user-friendly interfaces and writing clean, efficient code. Eager to take on new challenges and continuously learn in a fast-paced environment.
              </p>
            </motion.div>

            {/* Right Section */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Education */}
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border-l-4 border-[#006666]  space-y-6 hover:scale-[1.02] transition-all"
                whileHover={{ boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)" }}
              >
                <div className="flex items-center gap-3">
                  <GraduationCap size={28} className="text-[#006666]" />
                  <h3 className="text-2xl font-semibold text-[#006666]">
                    Education
                  </h3>
                </div>
                <ul className="space-y-4">
                  <li>
                    <h4 className="font-bold text-slate-800 dark:text-white">
                      Bachelor of Computer Science (BTECH)
                    </h4>
                    <p className="text-slate-800 text-sm dark:text-slate-400">
                      RGPV University Bhopal · 2021 - 2025
                    </p>
                  </li>
                  <li>
                    <h4 className="font-bold text-slate-800 dark:text-white">
                      Higher Secondary (HSC)
                    </h4>
                    <p className="text-slate-800 text-sm dark:text-slate-400">
                      St Theresa higher Secondary school · 2018 - 2020
                    </p>
                  </li>
                </ul>
              </motion.div>

              {/* Certifications */}
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border-l-4 border-[#006666]  space-y-6 hover:scale-[1.02] transition-all"
                whileHover={{ boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)" }}
              >
                <div className="flex items-center gap-3">
                  <FileText size={24} className="text-[#006666]" />
                  <h3 className="text-2xl font-semibold text-[#006666]">
                    Certifications
                  </h3>
                </div>
                <ul className="space-y-4">
                  <li>
                    <h4 className="font-bold text-slate-800 dark:text-white">
                      Full Stack Developer 
                    </h4>
                    <p className="text-slate-600 text-sm dark:text-slate-400">
                      Seven Mentor Pune · 2025
                    </p>
                  </li>
                  <li>
                    <h4 className="font-bold text-slate-800 dark:text-white">
                      Java Certification
                    </h4>
                    <p className="text-slate-600 text-sm dark:text-slate-400">
                      Udemy Learning · 2022
                    </p>
                  </li>
                  <li>
                    <h4 className="font-bold text-slate-800 dark:text-white">
                      Python Certification
                    </h4>
                    <p className="text-slate-600 text-sm dark:text-slate-400">
                      Naresh IT· 2024
                    </p>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
