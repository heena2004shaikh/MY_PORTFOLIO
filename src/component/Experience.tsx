import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "BIZPROSPEX",
    role: "Senior Data Research Analyst",
    duration: "Feb 2023 - Oct 2024",
    description:
      "Expertly architecting and directing project lifecycles—aligning timelines, resources, and deliverables for maximum impact. Collaborated with the team to develop and manage a comprehensive company spreadsheet, similar to Google Sheets, ensuring data accuracy and streamlined organization.Spearheaded multiple data research initiatives, effectively managing and guiding the team to deliver high-quality insights and results within strict deadlines.",
  },
  {
    company: "Akrypt Technology",
    role: "React Developer",
    duration: "June 2022 - Present",
    description:
      "I am currently working as a React Developer, where I am responsible for building and maintaining responsive, user-friendly web applications using modern frontend technologies. My work involves converting Figma and UI designs into interactive React components, implementing dynamic routing with React Router, and integrating REST APIs using Axios. I regularly use Tailwind CSS for styling and manage application state through Context API and Redux, depending on the complexity.I focus on optimizing performance, fixing bugs, and writing clean, reusable code that follows best practices. This role has helped me strengthen my problem-solving skills and gain hands-on experience in building real-world projects in a professional environment.",
  },
  {
    company: "Freelance Projects",
    role: "Web Developer",
    duration: "2023 - 2024",
    description:
      "I am working as a Freelance Web Developer, where I design and develop responsive and visually appealing websites tailored to client requirements. I work independently with clients to understand their business needs and deliver customized web solutions using HTML, CSS, JavaScript, React, and Tailwind CSS. My projects range from personal portfolios and business landing pages to fully functional dynamic websites. I handle the complete development process—from wireframing and UI design to deployment and maintenance.I stay up to date with modern web trends and continuously improve my skills to offer the best solutions to clients.",
  },
];

const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-20 px-6 md:px-20 bg-white dark:bg-slate-950 text-slate-900 dark:text-white"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-[#006666] dark:text-purple-400">Experience</span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative border-l-2 border-[#004c4c] pl-6 space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Dot */}
              <div className="absolute -left-3 top-2 bg-[#004c4c] w-6 h-6 rounded-full flex items-center justify-center text-white shadow-md">
                <Briefcase size={14} />
              </div>

              {/* Card */}
              <div className="bg-[#b2d8d8] dark:bg-slate-900 p-6 rounded-xl shadow-md border border-slate-200 dark:border-slate-800">
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <p className="text-[#006666] dark:text-white-400 font-medium">{exp.company}</p>
                <p className="text-sm text-white dark:white">{exp.duration}</p>
                <p className="mt-2 text-slate-700 dark:text-slate-300">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
