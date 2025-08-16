import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Experience = () => {
  const { theme } = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const experiences = [
    {
      title: "AI & ML Intern",
      company: "Elevate Labs",
      location: "Remote, India",
      period: "May 2024 - Jun 2024",
      type: "Internship",
      description:
        "Gained hands-on experience in machine learning and deep learning.",
      achievements: [
        "Learned data preprocessing techniques and built various ML models with proper documentation.",,
        "Gained hands-on experience in designing and training CNNs for image classification",
        "Developed face mask detection system using computer vision",
      ],
      technologies: ["Python", "TensorFlow", "Keras", "Pandas", "Scikit-learn"],
      link: "https://drive.google.com/file/d/1sdMdBizm4TNSSoGqpbOmNTLdvG0ZJJRf/view?usp=sharing",
    },
    {
      title: "Student Developer",
      company: "Sri Shakthi Institute of Engineering and Technology",
      location: "Coimbatore, India",
      period: "Jan 2024 - Present",
      type: "Academic",
      description: 
        "Developed a student attendance system with my AI/ML product team.",

      achievements: [
        "Built an AI-powered student attendance web application using Django.",
        "Implemented facial recognition to automatically mark student attendance.",
        "Developed a companion web app to collect facial data for training the recognition model."
      ],

      technologies: ["Python", "TensorFlow", "OpenCV", "Django"],
    },
  ];

  return (
    <section id="experience" className={`py-14 ${theme.background}`}>
      {" "}
      <div className="container mx-auto px-4">
        {" "}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${theme.text}`}>
            {" "}
            Experience
          </h2>
          <div
            className={`w-16 h-1 bg-gradient-to-r ${theme.primary} mx-auto mb-6`}
          ></div>{" "}
          <p
            className={`text-lg ${theme.textSecondary} max-w-2xl mx-auto leading-relaxed`}
          >
            {" "}
            Hands-on experience in AI/ML development and web technologies
            through internships, academic projects, and freelance work at
            various organizations and research institutions.
          </p>
        </motion.div>
        <div className="relative">
          {/* Timeline Line */}
          <div
            className={`absolute left-8 md:left-1/2 transform md:-translate-x-px w-0.5 ${theme.border} bg-opacity-30`}
            style={{ height: "100%" }}
          ></div>

          <div className="space-y-10">
            {" "}
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute left-8 md:left-1/2 transform -translate-x-1/2 w-3.5 h-3.5 bg-gradient-to-r ${theme.primary} rounded-full border-4 ${theme.background} z-10`}
                ></div>{" "}
                {/* Content Card */}
                <div
                  className={`ml-12 md:ml-0 ${
                    index % 2 === 0 ? "md:mr-6 md:text-left" : "md:ml-6"
                  } md:w-1/2`}
                >
                  {" "}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`${theme.card} rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    {/* Header */}
                    <div className="mb-4">
                      {" "}
                      <div className="flex items-center gap-2 mb-1">
                        {" "}
                        <span
                          className={`px-2.5 py-0.5 text-xs font-semibold rounded-full ${
                            exp.type === "Internship"
                              ? `${
                                  theme.primary
                                    .replace("from-", "bg-")
                                    .replace("to-", "")
                                    .split(" ")[0]
                                } text-white`
                              : `${theme.accent.replace(
                                  "text-",
                                  "bg-"
                                )} text-white`
                          }`}
                        >
                          {exp.type}
                        </span>
                        {exp.link && <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${theme.accent} hover:${
                            theme.primary
                              .replace("from-", "text-")
                              .split(" ")[0]
                          } transition-colors`}
                        >
                          <ExternalLink size={16} />
                        </a>}
                      </div>
                      <h3 className={`text-xl font-bold ${theme.text} mb-1`}>
                        {exp.title}
                      </h3>
                      <h4
                        className={`text-lg font-semibold ${theme.accent} mb-2`}
                      >
                        {" "}
                        {exp.company}
                      </h4>
                      <div
                        className={`flex items-center gap-3 text-sm ${theme.textSecondary} mb-3`}
                      >
                        {" "}
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p
                      className={`${theme.textSecondary} mb-4 leading-relaxed`}
                    >
                      {" "}
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      {" "}
                      <h5 className={`font-semibold ${theme.text} mb-2`}>
                        {" "}
                        Key Achievements:
                      </h5>
                      <ul className="space-y-1.5">
                        {" "}
                        {exp.achievements.map(
                          (achievement, achievementIndex) => (
                            <motion.li
                              key={achievementIndex}
                              initial={{ opacity: 0, x: -10 }}
                              animate={inView ? { opacity: 1, x: 0 } : {}}
                              transition={{
                                duration: 0.5,
                                delay: index * 0.2 + achievementIndex * 0.1,
                              }}
                              className={`flex items-start gap-2 ${theme.textSecondary} text-sm`}
                            >
                              <span className={`${theme.accent} mt-0.5`}>
                                •
                              </span>{" "}
                              <span>{achievement}</span>
                            </motion.li>
                          )
                        )}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h5 className={`font-semibold ${theme.text} mb-2`}>
                        {" "}
                        Technologies Used:
                      </h5>
                      <div className="flex flex-wrap gap-1.5">
                        {" "}
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{
                              duration: 0.3,
                              delay: index * 0.2 + techIndex * 0.05,
                            }}
                            className={`px-2.5 py-0.5 text-xs font-medium ${theme.background} ${theme.border} border rounded-full ${theme.textSecondary}`}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
