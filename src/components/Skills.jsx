import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../context/ThemeContext';
import { 
  SiPython, SiC, SiCplusplus,
  SiJavascript, SiReact, SiDjango, 
  SiFlask, SiFastapi, SiTensorflow, 
  SiHtml5, SiCss3, SiTailwindcss, 
  SiBootstrap, SiMysql, SiMongodb, 
  SiSqlite, SiGit, SiGithub, SiDocker 
} from 'react-icons/si';
import { DiRedis } from "react-icons/di";
import { FaDatabase } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { FaLinux } from 'react-icons/fa';

const Skills = () => {
  const { theme } = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', icon: <SiPython className={`text-3xl ${theme.text}`} /> },
        { name: 'C', icon: <SiC className={`text-3xl ${theme.text}`} /> },
        { name: 'C++', icon: <SiCplusplus className={`text-3xl ${theme.text}`} /> },
        { name: 'JavaScript', icon: <SiJavascript className={`text-3xl ${theme.text}`} /> },
        { name: 'SQL', icon: <FaDatabase className={`text-3xl ${theme.text}`} /> },
      ],
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'React', icon: <SiReact className={`text-3xl ${theme.text}`} /> },
        { name: 'Django', icon: <SiDjango className={`text-3xl ${theme.text}`} /> },
        { name: 'Flask', icon: <SiFlask className={`text-3xl ${theme.text}`} /> },
        { name: 'FastAPI', icon: <SiFastapi className={`text-3xl ${theme.text}`} /> },
        { name: 'TensorFlow', icon: <SiTensorflow className={`text-3xl ${theme.text}`} /> },
      ],
    },
    {
      title: 'Web Technologies',
      skills: [
        { name: 'HTML', icon: <SiHtml5 className={`text-3xl ${theme.text}`} /> },
        { name: 'CSS', icon: <SiCss3 className={`text-3xl ${theme.text}`} /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className={`text-3xl ${theme.text}`} /> },
        { name: 'Bootstrap', icon: <SiBootstrap className={`text-3xl ${theme.text}`} /> },
      ],
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MySQL', icon: <SiMysql className={`text-3xl ${theme.text}`} /> },
        { name: 'MongoDB', icon: <SiMongodb className={`text-3xl ${theme.text}`} /> },
        { name: 'SQLite', icon: <SiSqlite className={`text-3xl ${theme.text}`} /> },
        { name: 'Redis', icon: <DiRedis className={`text-3xl ${theme.text}`} /> },
      ],
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'VS Code', icon: <VscVscode className={`text-3xl ${theme.text}`} /> },
        { name: 'Linux', icon: <FaLinux className={`text-3xl ${theme.text}`} /> },
        { name: 'Git', icon: <SiGit className={`text-3xl ${theme.text}`} /> },
        { name: 'GitHub', icon: <SiGithub className={`text-3xl ${theme.text}`} /> },
        { name: 'Docker', icon: <SiDocker className={`text-3xl ${theme.text}`} /> },
      ],
    },
  ];

  return (
    <section id="skills" className={`py-20 ${theme.surface}`}>
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${theme.text}`}>
            Skills & Expertise
          </h2>
          <div className={`w-20 h-1 bg-gradient-to-r ${theme.primary} mx-auto mb-8`}></div>
          <p className={`text-lg ${theme.textSecondary} max-w-3xl mx-auto leading-relaxed`}>
            A comprehensive toolkit of technical skills developed through academic study,
            practical projects, and continuous learning in AI/ML and web development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className={`${theme.card} rounded-xl p-8`}
            >
              <h3 className={`text-2xl font-bold mb-8 ${theme.text}`}>
                {category.title}
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                    className="flex flex-col items-center text-center"
                  >
                    {skill.icon}
                    <span className={`mt-2 font-medium ${theme.text}`}>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;