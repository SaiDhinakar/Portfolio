import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Brain, Code, Database, Lightbulb } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const About = () => {
  const { theme } = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const highlights = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description:
        "Experienced in building ML models with Scikit Learn, TensorFlow, Keras, and computer vision applications",
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      description:
        "Proficient in Python, Django, Flask, FastAPI, React, and modern web technologies",
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description:
        "Strong analytical skills with a focus on creating innovative AI-powered solutions",
    },
  ];

  return (
    <section id="about" className={`py-30 ${theme.background}`}>
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${theme.text}`}>
            About Me
          </h2>
          <div
            className={`w-20 h-1 bg-gradient-to-r ${theme.primary} mx-auto mb-8`}
          ></div>
          {/* <p className={`text-lg ${theme.textSecondary} max-w-3xl mx-auto leading-relaxed`}>
            I'm an aspiring AI & Machine Learning Engineer with hands-on experience in Python, TensorFlow, and computer vision. 
            Skilled in building APIs using FastAPI and Flask, and developing web applications with Django and React.
          </p> */}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className={`text-2xl font-bold mb-6 ${theme.text}`}>
              My Journey
            </h3>
            <div className="space-y-6">
              <p className={`${theme.textSecondary} leading-relaxed`}>
                Hey, I’m Sai Dhinakar. I’m curious by nature and love figuring out how
                things work, especially when it comes to tech. For me, it’s less
                about the buzzwords and more about creating something that feels
                useful and exciting.
              </p>
              <p className={`${theme.textSecondary} leading-relaxed`}>
                I enjoy experimenting with code, playing around with different
                tools, and seeing ideas come to life. Sometimes it works,
                sometimes it doesn’t but that’s all part of the fun.
              </p>
              <p className={`${theme.textSecondary} leading-relaxed`}>
                Outside of projects, you’ll catch me brainstorming new concepts,
                joining on community stuff, or just daydreaming about what’s
                next. I like keeping things real and always learning along the
                way.
              </p>
            </div>

            {/* Education */}
            <div className="mt-8">
              <h4 className={`text-xl font-semibold mb-4 ${theme.text}`}>
                Education
              </h4>
              <div className={`${theme.card} rounded-lg p-6`}>
                <div className="flex items-start space-x-4">
                  <div
                    className={`w-3 h-3 ${theme.accent.replace(
                      "text-",
                      "bg-"
                    )} rounded-full mt-2`}
                  ></div>
                  <div>
                    <h5 className={`font-semibold ${theme.text}`}>
                      B.Tech in Artificial Intelligence and Machine Learning
                    </h5>
                    <p className={`${theme.accent} font-medium`}>
                      Sri Shakthi Institute of Engineering and Technology
                    </p>
                    <p className={`${theme.textSecondary} text-sm`}>
                      2023 - Present
                    </p>
                    <p className={`${theme.textSecondary} text-sm mt-2`}>
                      CGPA: 8.17/10.0 | Focus: AI/ML, Computer Vision, Data Science, API Development, Full Stack Development
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-13"
          >
            <h3 className={`text-2xl font-bold mb-6 ${theme.text}`}>
              What Drives Me
            </h3>
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className={`${theme.card} rounded-lg p-6 hover:shadow-lg transition-shadow`}
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`p-3 bg-gradient-to-r ${theme.primary} rounded-lg`}
                  >
                    <highlight.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className={`text-lg font-semibold mb-2 ${theme.text}`}>
                      {highlight.title}
                    </h4>
                    <p
                      className={`${theme.textSecondary} text-sm leading-relaxed`}
                    >
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "3+", label: "Years Experience" },
            { number: "15+", label: "Technologies" },
            { number: "5+", label: "Research Papers" },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 1 + index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${theme.primary} bg-clip-text text-transparent mb-2`}
              >
                {stat.number}
              </motion.div>
              <p className={`${theme.textSecondary} text-sm font-medium`}>
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
};

export default About;
