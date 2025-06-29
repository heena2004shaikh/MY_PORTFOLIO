import { motion } from "framer-motion";
import { Github, Eye } from "lucide-react";

const projects = [
  {
    title: "Fresh Cart",
    image: "/Freshcart.png",
    github: "https://github.com/heena2004shaikh/Fresh-Crat",
    live: "https://heena2004shaikh.github.io/Fresh-Crat/",
  },
  {
    title: "Seven Mentor Clone",
    image: "/sevenmentor.png",
    github: "https://github.com/heena2004shaikh/SevenMentor",
    live: "https://heena2004shaikh.github.io/SevenMentor/",
  },
  {
    title: "Hammer Website",
    image: "/zoombiz.png",
    github: "https://github.com/heena2004shaikh/ZoomBizz",
    live: "https://heena2004shaikh.github.io/ZoomBizz/",
  },
  {
    title: "Weather Dashboard",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/your-profile/weather-dashboard",
    live: "https://weather-live.com",
  },
  {
    title: "Burhanpur Website",
    image: "/burhanpur.png",
    github: "https://github.com/heena2004shaikh/Fresh-Crat",
    live: "https://burhanpur-city-web-mu.vercel.app/",
  },
  {
    title: "Creative Dotcom",
    image: "/dom.png",
    github: "https://github.com/heena2004shaikh/CreativeDotcom",
    live: "https://heena2004shaikh.github.io/CreativeDotcom/",
  },
];

const Project = () => {
  return (
    <div
      id="projects"
      className="bg-[#66b2b2] dark:bg-slate-950 py-20 px-6 border border-[#66b2b2]0 md:px-20"
    >
      <motion.div
        className="max-w-7xl mx-auto space-y-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-extrabold text-slate-800 dark:text-white text-center">
          <span className="text-white">My</span> Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative group rounded-xl overflow-hidden shadow-xl"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* ✅ Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 backdrop-blur-md z-10 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-y-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg font-medium shadow-md hover:bg-purple-100 transition"
                >
                  <Github size={20} />
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#006666] text-white px-4 py-2 rounded-lg font-medium shadow-md hover:bg-purple-100 transition"
                >
                  <Eye size={20} />
                  See More
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Project;
