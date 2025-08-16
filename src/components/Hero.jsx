import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { ChevronDown, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Hero = () => {
  const { theme } = useTheme();

  const socialLinks = [
    { icon: Github, href: "https://github.com/SaiDhinakar", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/saidhinakar-s",
      label: "LinkedIn",
    },
    // { icon: Twitter, href: 'https://twitter.com/saidhinakar', label: 'Twitter' },
    { icon: Mail, href: "mailto:saidhinakars899@gmail.com", label: "Email" },
  ];

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className={`min-h-screen pt-10 flex items-center justify-center ${theme.gradient} relative overflow-hidden`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 ${theme.accent.replace(
              "text-",
              "bg-"
            )} rounded-full opacity-20`}
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            className="mb-8"
          >
            {/* For Future use */}
            {/* <div
              className={`w-40 h-40 mx-auto rounded-full ${theme.surface} p-1 shadow-2xl`}
            >
              <div
                className={`w-full h-full rounded-full bg-gradient-to-br ${theme.primary} flex items-center justify-center text-6xl font-bold ${theme.text}`}
              >
                <img
                  src="/profile.jpg"
                  alt="Profile"
                  className="h-40 w-40 rounded-full"
                />
              </div>
            </div> */}
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className={`text-5xl md:text-7xl font-bold mb-6 ${theme.text}`}
          >
            Sai Dhinakar S
          </motion.h1>

          {/* Typewriter Effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className={`text-xl md:text-2xl mb-8 ${theme.textSecondary} h-16 flex items-center justify-center`}
          >
            <Typewriter
              options={{
                strings: [
                  "AI & ML Engineer",
                  "Python Developer",
                  "Computer Vision",
                  "Full Stack Developer",
                  "Data Science Enthusiast",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                typeSpeed: 80,
              }}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className={`text-lg md:text-xl ${theme.textSecondary} max-w-3xl mx-auto mb-12 leading-relaxed`}
          >
            Aspiring AI & Machine Learning Engineer with hands-on experience in
            Python, TensorFlow, and computer vision. Skilled in building APIs
            using FastAPI and Flask, and developing web applications with Django
            and React.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex justify-center space-x-6 mb-12"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className={`p-4 ${theme.surface} rounded-full ${theme.border} border backdrop-blur-sm hover:${theme.button} transition-colors group`}
                aria-label={social.label}
              >
                <social.icon
                  className={`w-6 h-6 ${theme.accent} group-hover:${theme.text}`}
                />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToAbout}
              className={`px-8 py-4 bg-gradient-to-r ${theme.primary} ${theme.text} rounded-full font-semibold shadow-lg hover:shadow-xl transition-all`}
            >
              Explore My Work
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.button
            onClick={scrollToAbout}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className={`${theme.accent} hover:${
              theme.primary.replace("from-", "text-").split(" ")[0]
            } transition-colors`}
          >
            <ChevronDown size={32} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
