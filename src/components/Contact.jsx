import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageSquare } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Contact = () => {
  const { theme } = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'saidhinakars899@gmail.com',
      link: 'mailto:saidhinakars899@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 90036 54796',
      link: 'tel:+919003654796',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Tiruppur, India',
      link: 'https://maps.google.com/?q=Tiruppur,India',
    },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/SaiDhinakar', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/saidhinakar-s', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/saidhinakar', label: 'Twitter' },
  ];

  return (
  <section id="contact" className={`py-24 ${theme.background}`}>
    <div className="container mx-auto px-6 lg:px-12">
      {/* Section Header */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl mx-auto mb-20"
      >
        <h2 className={`text-4xl md:text-5xl font-extrabold mb-5 ${theme.text}`}>
          Get In Touch
        </h2>
        <div className={`w-24 h-1 mx-auto mb-6 rounded-full bg-gradient-to-r ${theme.primary}`} />
        <p className={`text-lg ${theme.textSecondary} leading-relaxed`}>
          Always open to collaborations, AI/ML discussions, or just a friendly chat about tech and the future.
        </p>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto space-y-12"
      >
        {/* Contact Info */}
        <div className="grid sm:grid-cols-2 gap-6">
          {contactInfo.map((info, index) => (
            <motion.a
              key={info.title}
              href={info.link}
              target={info.title === 'Location' ? '_blank' : '_self'}
              rel={info.title === 'Location' ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`flex items-start space-x-4 ${theme.card} rounded-xl p-6 hover:shadow-xl transition-all`}
            >
              <div className={`p-3 bg-gradient-to-r ${theme.primary} rounded-lg`}>
                <info.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className={`font-semibold ${theme.text} mb-1`}>{info.title}</h4>
                <p className={`${theme.textSecondary}`}>{info.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Social Links */}
        <div>
          <h4 className={`text-lg font-semibold mb-4 ${theme.text}`}>
            Follow Me
          </h4>
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className={`p-4 ${theme.surface} rounded-full ${theme.border} border hover:${theme.button} transition-colors`}
                aria-label={social.label}
              >
                <social.icon className={`w-6 h-6 ${theme.accent}`} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Quick Response Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className={`${theme.card} rounded-lg p-6`}
        >
          <div className="flex items-center space-x-3 mb-3">
            <MessageSquare className={`w-5 h-5 ${theme.accent}`} />
            <h4 className={`font-semibold ${theme.text}`}>Quick Response</h4>
          </div>
          <p className={`${theme.textSecondary} text-sm leading-relaxed`}>
            I usually respond within 24 hours. For urgent matters, ping me on LinkedIn or Twitter.
          </p>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

};

export default Contact;
