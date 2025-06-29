import { motion } from "framer-motion";
import { Code, Database, Settings, Figma, Zap } from "lucide-react";

const skills = [
  { name: "Html", icon: <Code size={24} /> },
  { name: "CSS", icon: <Settings size={24} /> },
  { name: "JavaScript", icon: <Settings size={24} /> },
  { name: "Tailwind CSS", icon: <Database size={24} /> },
  { name: "Java", icon: <Figma size={24} /> },
  { name: "React", icon: <Zap size={24} /> },
  { name: "Redux", icon: <Code size={24} /> },
  { name: "Nextjs", icon: <Code size={24} /> },
  { name: "Python", icon: <Settings size={24} /> },
  { name: "MySql", icon: <Database size={24} /> },
  { name: "SpringBoot", icon: <Figma size={24} /> },
  { name: "Git,Github", icon: <Zap size={24} /> },
 
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 px-6 md:px-20 bg-gradient-to-br from-[#b2d8d8] via-white to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors"
    >
      <motion.div
        className="max-w-7xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white">
          My <span className="text-[#006666] dark:text-purple-400">Skills</span>
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
          A blend of frontend & backend technologies I've mastered to build performant and scalable applications.
        </p>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-14">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="group bg-[#b2d8d8] dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 p-6 rounded-2xl shadow-lg hover:shadow-[#006666]  dark:hover:shadow-purple-400/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#006666] dark:bg-white-900 text-white dark:text-white shadow-inner group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <h4 className="text-lg font-semibold text-slate-800 dark:text-white">
                  {skill.name}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
