import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const About = () => {
    const containerRef = useRef(null);
    const [hoveredTech, setHoveredTech] = useState<string | null>(null);
    const isInView = useInView(containerRef, { once: true, margin: '-50px' });

    // Staggered reveal for columns
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1, y: 0,
            transition: { type: 'spring' as const, stiffness: 80, damping: 20 }
        }
    };

    return (
        <section
            id="about"
            style={{
                position: 'relative',
                width: '100%',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                padding: '140px 2rem 100px',
                background: '#ffffff', // Clean white background like reference
                fontFamily: "'Inter', sans-serif",
                overflow: 'hidden'
            }}
        >
            <div style={{
                maxWidth: '1150px',
                margin: '0 auto',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '60px',
                alignItems: 'flex-start'
            }}>

                {/* ════ LEFT COLUMN: HANGING AI BADGE ════ */}
                <div style={{
                    width: 'clamp(280px, 30vw, 320px)',
                    position: 'relative',
                    margin: '0 auto', // Center on mobile
                    flexShrink: 0,
                }}>

                    {/* Lanyard Graphic */}
                    <div className="hidden-mobile">
                        <svg width="200" height="260" viewBox="0 0 200 260" style={{
                            position: 'absolute', top: '-250px', left: '50%', transform: 'translateX(-50%)',
                            zIndex: 10, pointerEvents: 'none'
                        }}>
                            {/* Left ribbon */}
                            <path d="M 0,-50 Q 50,100 90,200" fill="none" stroke="#f1f5f9" strokeWidth="18" />
                            {/* Right ribbon */}
                            <path d="M 200,-50 Q 150,100 110,200" fill="none" stroke="#e2e8f0" strokeWidth="18" />

                            {/* Metal Clip base */}
                            <rect x="85" y="195" width="30" height="20" rx="3" fill="#cbd5e1" />
                            {/* Hook */}
                            <path d="M 95,215 L 105,215 L 103,240 L 97,240 Z" fill="#94a3b8" />
                            {/* Ring clipping into the card holder */}
                            <circle cx="100" cy="245" r="8" fill="none" stroke="#94a3b8" strokeWidth="3" />
                        </svg>
                    </div>

                    {/* Swinging Card */}
                    <motion.div
                        initial={{ rotate: -2, y: 10, opacity: 0 }}
                        animate={isInView ? { rotate: [-1.5, 1.5, -1.5], y: 0, opacity: 1 } : { rotate: -2, y: 10, opacity: 0 }}
                        transition={{
                            y: { type: 'spring', stiffness: 50, damping: 15 },
                            opacity: { duration: 0.8 },
                            rotate: { repeat: Infinity, duration: 6, ease: 'easeInOut' }
                        }}
                        style={{
                            width: '100%',
                            height: '480px', // Made card slightly taller to fit larger photo
                            background: '#ffffff',
                            borderRadius: '16px',
                            boxShadow: '0 25px 50px rgba(0,0,0,0.08), 0 4px 10px rgba(0,0,0,0.03)',
                            border: '1px solid rgba(0,0,0,0.05)',
                            padding: '24px',
                            display: 'flex',
                            flexDirection: 'column',
                            transformOrigin: 'top center',
                            position: 'relative',
                            zIndex: 11
                        }}
                    >
                        {/* Lanyard Hole */}
                        <div style={{
                            width: '50px', height: '12px', background: '#f8fafc',
                            borderRadius: '10px', margin: '0 auto 24px',
                            boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)'
                        }} />

                        {/* ID Graphic / Visualizer */}
                        <div style={{
                            width: '100%', height: '250px', // Increased height for a proper portrait
                            background: '#f1f5f9',
                            borderRadius: '12px', position: 'relative', overflow: 'hidden',
                            boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.05)'
                        }}>
                            <img
                                src="/profile.png"
                                alt="ID Profile"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                    objectPosition: 'center',
                                    display: 'block'
                                }}
                            />

                            {/* Face Detection Bounding Box */}
                            <motion.div
                                initial={{ opacity: 0, scale: 1.2 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1.2, duration: 0.5, type: 'spring' }}
                                style={{
                                    position: 'absolute',
                                    top: '12%', // Adjusted based on standard portrait face position
                                    left: 'calc(50% - 50px)', // Centered horizontally
                                    width: '95px',
                                    height: '100px',
                                    border: '1px solid rgba(34, 197, 94, 0.4)',
                                    backgroundColor: 'rgba(34, 197, 94, 0.05)',
                                    pointerEvents: 'none',
                                    zIndex: 10
                                }}
                            >
                                {/* Corners for targeting reticle effect */}
                                <div style={{ position: 'absolute', top: -5, left: -5, width: '14px', height: '14px', borderTop: '2px solid #22c55e', borderLeft: '2px solid #22c55e' }} />
                                <div style={{ position: 'absolute', top: -5, right: -5, width: '14px', height: '14px', borderTop: '2px solid #22c55e', borderRight: '2px solid #22c55e' }} />
                                <div style={{ position: 'absolute', bottom: -5, left: -5, width: '14px', height: '14px', borderBottom: '2px solid #22c55e', borderLeft: '2px solid #22c55e' }} />
                                <div style={{ position: 'absolute', bottom: -5, right: -5, width: '14px', height: '14px', borderBottom: '2px solid #22c55e', borderRight: '2px solid #22c55e' }} />

                                {/* Label */}
                                <div style={{
                                    position: 'absolute',
                                    top: '-15px',
                                    left: '70%',
                                    transform: 'translateX(-50%)',
                                    background: 'transparent',
                                    color: '#22c55e',
                                    fontSize: '0.6rem',
                                    fontWeight: '800',
                                    whiteSpace: 'nowrap',
                                    letterSpacing: '0.05em',
                                    fontFamily: 'monospace',
                                }}>
                                    MATCH: 100%
                                </div>

                                {/* Scanning line effect */}
                                {/* <motion.div
                                    animate={{ top: ['0%', '98%', '0%'] }}
                                    transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
                                    style={{
                                        position: 'absolute',
                                        left: 0,
                                        width: '100%',
                                        height: '2px',
                                        background: 'linear-gradient(90deg, transparent, rgba(34, 197, 94, 0.8), transparent)',
                                        boxShadow: '0 0 8px rgba(34, 197, 94, 0.8)'
                                    }}
                                /> */}
                            </motion.div>
                        </div>

                        {/* Identity Info */}
                        <h3 style={{ marginTop: '24px', fontSize: '1.5rem', fontWeight: '800', color: '#0f172a', letterSpacing: '-0.02em', marginBottom: '4px' }}>
                            Sai Dhinakar
                        </h3>
                        <p style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: '600', letterSpacing: '0.02em', textTransform: 'uppercase' }}>
                            AI / ML Engineer
                        </p>

                        {/* Bottom Barcode Section */}
                        <div style={{ marginTop: 'auto', borderTop: '2px dashed #f1f5f9', paddingTop: '16px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', fontFamily: 'monospace', color: '#94a3b8', fontWeight: '600' }}>
                                <span>ID: 0x93F2A</span>
                                <span>NODE: 17</span>
                            </div>
                            <div style={{ marginTop: '10px', height: '42px', display: 'flex', justifyContent: 'flex-start' }}>
                                <img src="/barcode.png" alt="ID Barcode" style={{ width: '70%', height: '100%', objectFit: 'cover' }} />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* ════ RIGHT COLUMN: TEXT & COLUMNS ════ */}
                <motion.div
                    ref={containerRef}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    style={{ flex: 1, minWidth: '300px' }}
                >
                    {/* Intro Text */}
                    <motion.h2 variants={itemVariants} style={{ fontSize: 'clamp(2.5rem, 4vw, 3rem)', fontWeight: '800', color: '#1e293b', marginBottom: '16px', letterSpacing: '-0.03em' }}>
                        About <span style={{ color: '#8b7cc8' }}>Me !</span>
                    </motion.h2>

                    <motion.p variants={itemVariants} style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.8, marginBottom: '60px', maxWidth: '850px' }}>
                        AI & Machine Learning enthusiast and Python developer focused on building intelligent, scalable solutions for real-world problems. I enjoy working with data, experimenting with models, and turning ideas into practical systems. Passionate about continuous learning, problem-solving, and creating technology that makes a meaningful impact.
                    </motion.p>

                    {/* Detail Columns */}
                    <motion.div variants={itemVariants} style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '30px'
                    }}>

                        {/* Column 1: EXPERIENCE */}
                        <div style={{ borderLeft: '2px solid #f1f5f9', paddingLeft: '20px' }}>
                            <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#334155', marginBottom: '24px', letterSpacing: '0.05em' }}>EXPERIENCE</h4>

                            <div style={{ marginBottom: '24px' }}>
                                <div style={{ fontSize: '0.9rem', fontWeight: '700', color: '#1e293b', lineHeight: 1.4 }}>LLM Post Training Intern at Ethara AI</div>
                                <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>FEB 2026 - PRESENT</div>
                            </div>

                            <div style={{ marginBottom: '24px' }}>
                                <div style={{ fontSize: '0.9rem', fontWeight: '700', color: '#1e293b', lineHeight: 1.4 }}>Intel Industrial Training</div>
                                <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>OCT 2025 - DEC 2025</div>
                            </div>

                            <div style={{ marginBottom: '24px' }}>
                                <div style={{ fontSize: '0.9rem', fontWeight: '700', color: '#1e293b', lineHeight: 1.4 }}>AI & ML Intern at Elevate Labs</div>
                                <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>MAY 2025 - JUN 2025</div>
                            </div>

                            <div style={{ marginBottom: '24px' }}>
                                <div style={{ fontSize: '0.9rem', fontWeight: '700', color: '#1e293b', lineHeight: 1.4 }}>Student Developer at College</div>
                                <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>OCT 2024 - PRESENT</div>
                            </div>
                        </div>

                        {/* Column 2: EDUCATION & LEADERSHIP */}
                        <div style={{ borderLeft: '2px solid #f1f5f9', paddingLeft: '20px' }}>
                            <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#334155', marginBottom: '24px', letterSpacing: '0.05em' }}>EDUCATION</h4>

                            <div style={{ marginBottom: '24px' }}>
                                <div style={{ fontSize: '0.9rem', fontWeight: '700', color: '#1e293b', lineHeight: 1.4 }}>B.Tech Artificial Intelligence and Machine Learning</div>
                                <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '4px' }}>Sri Shakthi Institute of Engineering and Technology</div>
                            </div>

                            <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#334155', marginBottom: '24px', letterSpacing: '0.05em' }}>ORGANIZATIONS</h4>
                            
                            <div style={{ marginBottom: '24px' }}>
                                <div style={{ fontSize: '0.9rem', fontWeight: '700', color: '#1e293b', lineHeight: 1.4 }}>Member of <a href="https://theaiavalon.in" target="_blank" style={{ textDecoration: 'none', color: '#8b7cc8' }}>AI Avalon</a> Tech Team</div>
                                <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '4px' }}>Conducting Workshops, Events and Build projects</div>
                            </div>

                            <div style={{ marginBottom: '24px' }}>
                                <div style={{ fontSize: '0.9rem', fontWeight: '700', color: '#1e293b', lineHeight: 1.4 }}>Team Lead of <a href="https://theaiavalon.in" target="_blank" style={{ textDecoration: 'none', color: '#8b7cc8' }}>FALCON</a></div>
                                <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '4px' }}>Student product development team in our college for building real world projects</div>
                            </div>

                        </div>
                        {/* Column 3: TECH STACK (Icons Only) */}
                        <div style={{ borderLeft: '2px solid #f1f5f9', paddingLeft: '20px' }}>
                            <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#334155', marginBottom: '24px', letterSpacing: '0.05em' }}>TECH STACK</h4>

                            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', maxWidth: '280px' }}>
                                {[
                                    { id: 'python', name: 'Python' },
                                    { id: 'scikitlearn', name: 'Scikit-learn' },
                                    { id: 'pytorch', name: 'PyTorch' },
                                    { id: 'opencv', name: 'OpenCV' },
                                    { id: 'numpy', name: 'NumPy' },
                                    { id: 'pandas', name: 'Pandas' },
                                    { id: 'huggingface', name: 'LLMs' },
                                    { id: 'mlflow', name: 'MLflow' },
                                    { id: 'apacheairflow', name: 'Airflow' },
                                    { id: 'fastapi', name: 'FastAPI' },
                                    { id: 'flask', name: 'Flask' },
                                    { id: 'django', name: 'Django' },
                                    { id: 'react', name: 'React' },
                                    { id: 'tailwindcss', name: 'Tailwind CSS' },
                                    { id: 'docker', name: 'Docker' },
                                    { id: 'git', name: 'Git' },
                                    { id: 'github', name: 'GitHub' },
                                    { id: 'linux', name: 'Linux' },
                                    { id: 'nginx', name: 'Nginx' },
                                    { id: 'minio', name: 'MinIO' },
                                    { id: 'mysql', name: 'MySQL' },
                                    { id: 'mongodb', name: 'MongoDB' },
                                    { id: 'redis', name: 'Redis' },
                                    { id: 'sqlite', name: 'SQLite' }
                                ].map((tech) => (
                                    <div
                                        key={tech.id}
                                        style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
                                        onMouseEnter={() => setHoveredTech(tech.id)}
                                        onMouseLeave={() => setHoveredTech(null)}
                                    >
                                        <img
                                            src={`https://cdn.simpleicons.org/${tech.id}`}
                                            alt={tech.name}
                                            style={{
                                                width: '28px',
                                                height: '28px',
                                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                                cursor: 'pointer',
                                                transform: hoveredTech === tech.id ? 'scale(1.2) translateY(-4px)' : 'scale(1) translateY(0)',
                                                filter: hoveredTech && hoveredTech !== tech.id ? 'grayscale(100%) opacity(30%)' : 'grayscale(0%) opacity(100%)'
                                            }}
                                        />

                                        {/* Professional Custom Tooltip */}
                                        <div
                                            style={{
                                                position: 'absolute',
                                                bottom: '100%',
                                                marginBottom: '12px',
                                                background: '#1e293b',
                                                color: '#ffffff',
                                                padding: '6px 12px',
                                                borderRadius: '6px',
                                                fontSize: '0.75rem',
                                                fontWeight: '600',
                                                whiteSpace: 'nowrap',
                                                pointerEvents: 'none',
                                                opacity: hoveredTech === tech.id ? 1 : 0,
                                                transform: hoveredTech === tech.id ? 'translateY(0) scale(1)' : 'translateY(8px) scale(0.95)',
                                                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                                                zIndex: 50
                                            }}
                                        >
                                            {tech.name}
                                            {/* Tooltip downward arrow */}
                                            <div style={{
                                                position: 'absolute',
                                                top: '100%',
                                                left: '50%',
                                                transform: 'translateX(-50%)',
                                                borderWidth: '5px',
                                                borderStyle: 'solid',
                                                borderColor: '#1e293b transparent transparent transparent'
                                            }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
