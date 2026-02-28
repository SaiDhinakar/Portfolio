import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const socials = [
    { name: 'LinkedIn', handle: 'in/saidhinakar-s', link: 'https://linkedin.com/in/saidhinakar-s' },
    { name: 'GitHub', handle: '@SaiDhinakar', link: 'https://github.com/SaiDhinakar' },
    { name: 'LeetCode', handle: 'u/SaiDhinakar', link: 'https://leetcode.com/u/SaiDhinakar/' },
];

// const TICKER_ITEMS = ['AI Engineering', 'ML Pipelines', 'Open to Work', 'Full Stack Dev', 'Collaboration', 'Let\'s Build'];

const Contact = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

    return (
        <section
            id="contact"
            ref={sectionRef}
            style={{
                width: '100%',
                background: '#f8fafc',
                fontFamily: "'Inter', sans-serif",
                borderTop: '1px solid #f1f5f9',
                overflow: 'hidden'
            }}
        >
            {/* ── TICKER STRIP ── */}
            <div style={{
                padding: '14px 0',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center'
            }}>
            </div>

            {/* ── MAIN CONTENT ── */}
            <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '80px 2rem 0' }}>

                {/* Top row: label + email */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.7 }}
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        flexWrap: 'wrap',
                        gap: '20px',
                        marginBottom: '40px'
                    }}
                >
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                        Contact
                    </span>
                </motion.div>

                {/* Hero line: oversized "Let's talk" */}
                <div style={{ overflow: 'hidden' }}>
                    <motion.h2
                        initial={{ y: '100%', opacity: 0 }}
                        animate={isInView ? { y: '0%', opacity: 1 } : {}}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        style={{
                            fontSize: 'clamp(5rem, 15vw, 11rem)',
                            fontWeight: 800,
                            letterSpacing: '-0.05em',
                            lineHeight: 0.95,
                            color: '#0f172a',
                            margin: '0',
                            padding: '0'
                        }}
                    >
                        Let's
                    </motion.h2>
                </div>
                <div style={{ overflow: 'hidden' }}>
                    <motion.h2
                        initial={{ y: '100%', opacity: 0 }}
                        animate={isInView ? { y: '0%', opacity: 1 } : {}}
                        transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        style={{
                            fontSize: 'clamp(5rem, 15vw, 11rem)',
                            fontWeight: 800,
                            letterSpacing: '-0.05em',
                            lineHeight: 0.95,
                            color: 'transparent',
                            WebkitTextStroke: '2px #8b7cc8',
                            margin: '0',
                            padding: '0'
                        }}
                    >
                        connect.
                    </motion.h2>
                </div>

                {/* Divider + subtext */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                        marginTop: '48px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: '32px',
                        paddingBottom: '48px',
                        borderBottom: '1px solid #e2e8f0'
                    }}
                >
                    <p style={{ fontSize: '1rem', color: '#64748b', lineHeight: 1.7, maxWidth: '500px' }}>
                        I'm actively looking for ambitious projects, research collaborations, and engineering challenges. Drop me a message and let's get started.
                    </p>

                    <a
                        href={`https://mail.google.com/mail/?view=cm&fs=1&to=saidhinakars899@gmail.com&su=${encodeURIComponent("Hey Sai! Let's Collaborate!")}&body=${encodeURIComponent("Hi Sai,\n\nI came across your portfolio and would love to connect.\n\n[Tell me a bit about your project or idea here]\n\nLooking forward to chatting!\n\nBest regards,\n[Your Name]")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '12px',
                            padding: '18px 36px',
                            background: '#0f172a',
                            color: '#ffffff',
                            borderRadius: '100px',
                            fontSize: '1rem',
                            fontWeight: 700,
                            textDecoration: 'none',
                            transition: 'all 0.3s ease',
                            flexShrink: 0
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#8b7cc8';
                            e.currentTarget.style.transform = 'scale(1.04)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = '#0f172a';
                            e.currentTarget.style.transform = 'scale(1)';
                        }}
                    >
                        <span>Start a conversation</span>
                        <span style={{ width: '32px', height: '32px', background: 'rgba(255,255,255,0.15)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem' }}>↗</span>
                    </a>
                </motion.div>

                {/* ── SOCIAL LINKS ROW ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        marginTop: '0'
                    }}
                >
                    {socials.map((s, i) => (
                        <a
                            key={s.name}
                            href={s.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                padding: '28px 0',
                                borderRight: i < socials.length - 1 ? '1px solid #f1f5f9' : 'none',
                                paddingLeft: i > 0 ? '32px' : '0',
                                textDecoration: 'none',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '6px',
                                transition: 'all 0.3s ease',
                                borderRadius: '0'
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget.children[0] as HTMLElement).style.color = '#8b7cc8';
                                (e.currentTarget.children[1] as HTMLElement).style.color = '#0f172a';
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget.children[0] as HTMLElement).style.color = '#94a3b8';
                                (e.currentTarget.children[1] as HTMLElement).style.color = '#64748b';
                            }}
                        >
                            <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#94a3b8', transition: 'color 0.3s' }}>
                                {s.name}
                            </span>
                            <span style={{ fontSize: '1rem', fontWeight: 600, color: '#64748b', transition: 'color 0.3s' }}>
                                {s.handle} ↗
                            </span>
                        </a>
                    ))}
                </motion.div>
            </div>

            {/* ── FOOTER BAR ── */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.7, duration: 0.8 }}
                style={{
                    marginTop: '60px',
                    borderTop: '1px solid #e2e8f0',
                    padding: '24px 2rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: '#ffffff',
                    flexWrap: 'wrap',
                    gap: '16px'
                }}
            >
                <span style={{ fontSize: '1rem', fontWeight: 800, color: '#1e293b', letterSpacing: '-0.02em' }}>
                    Sai Dhinakar
                </span>
                <span style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 600, fontFamily: 'monospace' }}>
                    AI / ML Engineer
                </span>
            </motion.div>
        </section>
    );
};

export default Contact;
