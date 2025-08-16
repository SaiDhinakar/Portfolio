"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Play, Code, Database } from 'lucide-react';
import { FaGamepad } from "react-icons/fa";
import { SiRobotframework } from "react-icons/si";
import { LuBrainCircuit } from "react-icons/lu";
import { useTheme } from '../context/ThemeContext';

// --- GlowCard Component ---
const glowColorMap = {
  blue: { base: 220, spread: 200 },
  purple: { base: 280, spread: 300 },
  green: { base: 120, spread: 200 },
  red: { base: 0, spread: 200 },
  orange: { base: 30, spread: 200 },
  cyan: { base: 180, spread: 150 }, // Added cyan
};

const GlowCard = ({
  children,
  className = "",
  glowColor = "cyan",
  width,
  height,
}) => {
  const cardRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    const syncPointer = (e) => {
      const { clientX: x, clientY: y } = e;
      if (cardRef.current) {
        cardRef.current.style.setProperty("--x", x.toFixed(2));
        cardRef.current.style.setProperty("--xp", (x / window.innerWidth).toFixed(2));
        cardRef.current.style.setProperty("--y", y.toFixed(2));
        cardRef.current.style.setProperty("--yp", (y / window.innerHeight).toFixed(2));
      }
    };
    document.addEventListener("pointermove", syncPointer);
    return () => document.removeEventListener("pointermove", syncPointer);
  }, []);

  const { base, spread } = glowColorMap[glowColor];

  const getInlineStyles = () => {
    const baseStyles = {
      "--base": base,
      "--spread": spread,
      "--radius": "16",
      "--border": "1.5",
      "--backdrop": "hsl(240 10% 3.9% / 0.15)",
      "--backup-border": "hsl(240 3.7% 15.9% / 0.2)",
      "--size": "300",
      "--border-size": "calc(var(--border, 2) * 1px)",
      "--spotlight-size": "calc(var(--size, 150) * 1px)",
      "--hue": "calc(var(--base) + (var(--xp, 0) * var(--spread, 0)))",
      backgroundImage: `radial-gradient(var(--spotlight-size) var(--spotlight-size) at calc(var(--x, 0) * 1px) calc(var(--y, 0) * 1px), hsl(var(--hue, 180) 90% 70% / 0.2), transparent)`,
      backgroundColor: "var(--backdrop, transparent)",
      backgroundSize: "calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)))",
      backgroundPosition: "50% 50%",
      backgroundAttachment: "fixed",
      border: "var(--border-size) solid var(--backup-border)",
      position: "relative",
      touchAction: "none",
    };
    if (width !== undefined) baseStyles.width = typeof width === "number" ? `${width}px` : width;
    if (height !== undefined) baseStyles.height = typeof height === "number" ? `${height}px` : height;
    return baseStyles;
  };

  const beforeAfterStyles = `
    [data-glow]::before, [data-glow]::after {
      pointer-events: none; content: ""; position: absolute;
      inset: calc(var(--border-size) * -1); border: var(--border-size) solid transparent;
      border-radius: calc(var(--radius) * 1px); background-attachment: fixed;
      background-size: calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)));
      background-repeat: no-repeat; background-position: 50% 50%;
      mask: linear-gradient(transparent, transparent), linear-gradient(white, white);
      mask-clip: padding-box, border-box; mask-composite: intersect;
    }
    [data-glow]::before {
      background-image: radial-gradient(
        calc(var(--spotlight-size) * 0.75) calc(var(--spotlight-size) * 0.75) at
        calc(var(--x, 0) * 1px) calc(var(--y, 0) * 1px),
        hsl(var(--hue, 180) 100% 60% / 1), transparent 100%
      );
      filter: brightness(1.8);
    }
    [data-glow]::after {
      background-image: radial-gradient(
        calc(var(--spotlight-size) * 0.4) calc(var(--spotlight-size) * 0.4) at
        calc(var(--x, 0) * 1px) calc(var(--y, 0) * 1px),
        hsl(190 100% 80% / 0.9), transparent 100%
      );
    }
    [data-glow] > [data-glow] {
      position: absolute; inset: 0; will-change: filter;
      border-radius: calc(var(--radius) * 1px);
      filter: blur(20px); background: none; border: none;
    }`;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: beforeAfterStyles }} />
      <div
        ref={cardRef}
        data-glow
        style={getInlineStyles()}
        className={`rounded-2xl overflow-hidden transition-all duration-300 h-80 ${className}`}
      >
        <div ref={innerRef} data-glow></div>
        <div className="relative z-10 h-full flex flex-col">
          {children}
        </div>
      </div>
    </>
  );
};
// --- End GlowCard Component ---

const Projects = () => {
  const { theme } = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'Face-Mask Alert System',
      category: 'computer-vision',
      description: 'Real-time face mask detection system leveraging TensorFlow, OpenCV, and CNNs to ensure public health compliance.',
      technologies: ['TensorFlow', 'Keras', 'OpenCV', 'Flask'],
      github: 'https://github.com/SaiDhinakar/face-mask-alert-system',
      glowColor: 'cyan',
    },
    {
      title: 'Tamil Braille Translator',
      category: 'ai-ml',
      description: 'Tamil-Braille-Translator is a cutting-edge mobile app that leverages computer vision and OCR technology to seamlessly convert Tamil Braille from images into standard Tamil script.',
      technologies: ['React Native', 'Tensorflow', 'OpenCV', 'FastAPI'],
      github: 'https://github.com/SaiDhinakar/Tamil-Braille-Translator',
      glowColor: 'cyan',
    },
    {
      title: 'Students Mental Health Analysis',
      category: 'ai-ml',
      description: 'This project focuses on analyzing student mental health data using data science techniques. To identify patterns and factors affecting student mental well-being.',
      technologies: ['Python', 'Data Science', 'Matplotlib', 'Numpy'],
      github: 'https://github.com/SaiDhinakar/Tamil-Braille-Translator',
      glowColor: 'cyan',
    },
    {
      title: 'Inventory Management System',
      category: 'web-development',
      description: 'Full-stack inventory management web application featuring real-time data tracking and automated stock updates.',
      technologies: ['Django', 'Bootstrap', 'SQLite'],
      github: 'https://github.com/SaiDhinakar/InventoryManagement',
      demo: "https://inventory-management-idvb.onrender.com/",
      glowColor: 'cyan',
    },
    {
      title: 'Personal Portfolio',
      category: 'web-development',
      description: 'My personal portfolio build using React and Tailwind.',
      technologies: ['React', 'Tailwind'],
      github: 'https://github.com/SaiDhinakar/Portfolio',
      demo: "",
      glowColor: 'cyan',
    },
    {
      title: 'Templatrix',
      category: 'fun-time',
      description: 'A powerful Python package for quickly generating structured web application templates for FastAPI and Flask frameworks.',
      technologies: ['FastAPI', 'Flask'],
      github: 'https://github.com/SaiDhinakar/templatrix',
      demo: "https://pypi.org/project/templatrix/",
      glowColor: 'cyan',
    },
    {
      title: 'VisuNav',
      category: 'computer-vision',
      description: 'VisuNav – A real-time eye-tracking system that enables hands-free cursor control using only eye movements. It maps gaze direction to screen coordinates, allowing seamless navigation.',
      technologies: ['Mediapipe', 'OpenCV', 'PyAutoGUI'],
      github: 'http://github.com/SaiDhinakar/VisuNav',
      glowColor: 'cyan',
    },
    {
      title: 'HTTP server using C',
      category: 'fun-time',
      description: 'A lightweight HTTP server implementation written in C that serves static HTML files from a public directory.',
      technologies: ['C','HTML'],
      github: 'https://github.com/SaiDhinakar/http-server-c',
      glowColor: 'cyan',
    },
  ];

  const categories = [
  { key: 'all', label: 'All Projects', icon: Code },
  { key: 'computer-vision', label: 'Computer Vision', icon: LuBrainCircuit },
  { key: 'ai-ml', label: 'AI & ML', icon: SiRobotframework },
  { key: 'web-development', label: 'Web Development', icon: Database },
  { key: 'fun-time', label: 'Side Projects', icon: FaGamepad } // or any playful icon
];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className={`py-20 ${theme.surface}`}>
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${theme.text}`}>
            Featured Projects
          </h2>
          <div className={`w-20 h-1 bg-gradient-to-r ${theme.primary} mx-auto mb-8`}></div>
          <p className={`text-lg ${theme.textSecondary} max-w-3xl mx-auto leading-relaxed mb-8`}>
            A showcase of my AI/ML and web development projects. Each card has a unique interactive glow effect.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category.key)}
                className={`px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2 ${
                  filter === category.key
                    ? `bg-gradient-to-r ${theme.primary} text-white shadow-lg`
                    : `${theme.background} ${theme.text} hover:${theme.button}`
                }`}
              >
                <category.icon size={16} />
                {category.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="w-full"
              >
                <GlowCard
                  glowColor={project.glowColor || 'cyan'}
                >
                  {/* Project Content */}
                  <div className="p-6 flex flex-col h-full">
                    <h3 className={`text-xl font-bold mb-3 text-gray-100 group-hover:${theme.accent} transition-colors`}>
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-4 leading-relaxed text-sm flex-grow">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-medium bg-white/10 border border-white/20 rounded text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className={`px-2 py-1 text-xs font-medium text-cyan-300`}>
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-auto pt-4 border-t border-white/10">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-white/10 border border-white/20 rounded-lg text-gray-200 hover:bg-white/20 transition-colors text-sm font-medium"
                        >
                          <Github size={16} />
                          Code
                        </a>
                      )}
                      
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:opacity-90 transition-opacity text-sm font-medium`}
                        >
                          <Play size={16} />
                          Demo
                        </a>
                      )}
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/saidhinakar"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-8 py-4 ${theme.button} ${theme.text} rounded-full font-semibold hover:shadow-lg transition-all`}
          >
            <Github size={20} />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
