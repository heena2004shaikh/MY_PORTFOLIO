import { FileText, Briefcase } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

const Herosection = () => {
  return (
    <div id="home" className="bg-[#b2d8d8] dark:bg-slate-950 pt-24 pb-10">
      <div className="max-w-7xl mx-auto rounded-2xl px-4 py-4 lg:px-10 bg-white-700/30 backdrop-blur-md shadow-xl transition-all duration-300">
        <div className="bg-[#008080] dark:bg-gray-900 rounded-3xl py-16 px-6 md:px-16 lg:px-24 my-10 shadow-md">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-[#b2d8d8] dark:text-white-300 font-extrabold">
                  Welcome to my portfolio
                </p>
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 dark:text-white leading-tight">
                  I Am{" "}
                  <span className="text-white dark:text">
                    Heena Shaikh
                  </span>
                </h1>

                {/* Typewriter Effect */}
                <p className="text-xl text-white dark:text-white-400 font-extrabold">
                  <Typewriter
                    words={[
                      "Full Stack Developer",
                      "React Developer",
                      "MERN Stack Engineer",
                      "Frontend Enthusiast",
                    ]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1500}
                  />
                </p>
              </div>

              <p className="text-white font-medium	 dark:text-white-400 text-lg leading-relaxed max-w-md">
               A Full stack engineer, crafting scalable, responsive web applications with growing proficiency as a Ai developer.
                
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-6">
                <a
                  href="/public/heena resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#b2d8d8] text-black px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-slate-400 hover:scale-105 transition-all duration-300"
                >
                  <FileText size={18} />
                  Resume
                </a>

               <a
  href="https://linkedin.com/in/heena-shaikh-556731353/"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="flex items-center gap-2 bg-[#b2d8d8] text-black px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-slate-400 hover:scale-105 transition-all duration-300">
    <Briefcase size={18} />
    LinkedIn
  </button>
</a>
              </div>
            </div>

            {/* Right Content - Developer Image */}
            <div className="relative">
              <div className="relative mt-6 md:mt-0">
                {/* Decorative Frames */}
                <div className="absolute inset-0 bg-[#b2d8d8] rounded-3xl transform rotate-3 shadow-xl"></div>
                <div className="absolute inset-0 bg-[#b2d8d8] rounded-3xl transform -rotate-2 shadow-xl"></div>

                {/* Main Image */}
                <div className="relative bg-[#2a7575] dark:bg-slate-800 rounded-4xl p-5 shadow-2xl">
                  <img
                    src="/white image.jpg"
                    alt="React Developer - Heena Shaikh"
                    className="w-full h-90 object-cover rounded-4xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
