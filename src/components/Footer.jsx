import React from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Github,
  Linkedin,
  Twitter,
  Mail,
  ArrowUp,
  Divide,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { theme } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/johndoe", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/johndoe",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:john.doe@email.com", label: "Email" },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className={`${theme.background} border-t ${theme.border}`}>
      <div className="container mx-auto px-6 py-6">
        <h2
          className={`text-2xl font-bold bg-gradient-to-r text-white ${theme.primary} bg-clip-text text-transparent mb-4`}
        >
          Social Links
        </h2>
        <div className="flex space-x-3">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`p-3 ${theme.surface} rounded-full ${theme.border} border hover:${theme.button} transition-colors group`}
              aria-label={social.label}
            >
              <social.icon
                className={`w-5 h-5 ${theme.accent} group-hover:${theme.text}`}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
