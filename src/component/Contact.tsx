import { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com"; // <-- new import
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null); // ✅ Fix applied here

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2d1kczj",
        "template_q04v2sd",
        form.current!,
        "Kmp1W_xa03wQPjsA2"
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
        },
        (error) => {
          alert("❌ Failed to send message: " + error.text);
        }
      );

    e.target.reset();
  };


  return (
    <div
      id="contact"
      className="relative overflow-hidden pt-32 pb-24 px-6 md:px-20 bg-gradient-to-br from-[#006666] via-white to-[#006666] dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
    >
      <div className="absolute w-70 h-70 bg-[#006666] opacity-30 rounded-full -top-20 -left-20 blur-3xl animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-[#006666] opacity-20 rounded-full -bottom-20 -right-20 blur-3xl animate-pulse"></div>

      <motion.div
        className="max-w-6xl mx-auto flex flex-col md:flex-row bg-purple/50 dark:bg-purple backdrop-blur-xl rounded-3xl shadow-xl overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* Form */}
        <div className="w-full bg-[#006666] md:w-2/3 p-10 space-y-6">
          <h2 className="text-4xl font-bold text-white mb-4">Let’s Connect</h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-lg bg-white text-slate-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              required
              className="w-full px-4 py-3 rounded-lg bg-white text-slate-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
            <input
              type="email"
              name="user_email"
              placeholder="you@example.com"
              required
              className="w-full px-4 py-3 rounded-lg bg-white text-slate-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
            <textarea
              rows={5}
              name="message"
              placeholder="Your Message..."
              required
              className="w-full px-4 py-3 rounded-lg bg-white text-slate-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-300"
            ></textarea>
            <button
              type="submit"
              className="bg-[#b2d8d8] text-black font-semibold px-6 py-3 rounded-lg hover:bg-[#004c4c] hover:scale-105 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="w-full md:w-1/3 bg-[#004c4c]-300/30 dark:bg-white/5 p-10 flex flex-col justify-center text-slate-800 dark:text-slate-200 space-y-6">
          <h3 className="text-2xl font-semibold">Get in Touch</h3>
          <div className="flex items-center gap-4">
            <Mail className="text-[#006666]" />
            <a
              href="mailto:heena2004shaikh@gmail.com"
              className="hover:underline"
            >
              heena2004shaikh@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="text-[#006666]" />
            <span>+91 8085644502</span>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="text-[#006666]" />
            <span>Pune, Maharashtra</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
