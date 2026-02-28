import { motion } from 'framer-motion';
import { useState } from 'react';

// Easy to edit project list
const projectsData = [
    {
        id: '01',
        title: 'Customer Churn Prediction',
        subtitle: 'ML Pipeline',
        link: 'https://github.com/SaiDhinakar/telco-churn-ml-pipeline',
        description: [
            'Built an automated ML pipeline for telecom churn prediction using Airflow for workflow orchestration and MLflow for experiment tracking.',
            'Serve the model through a FastAPI service and containerized the full workflow using Docker.'
        ],
        techStack: ['Python', 'Scikit-learn', 'MLflow', 'Airflow', 'FastAPI', 'Docker'],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: '02',
        title: 'TechDraw',
        subtitle: 'AI-Assisted Diagram Generator',
        link: 'https://github.com/SaiDhinakar/TechDraw',
        description: [
            'Built a lightweight AI-driven tool for generating system diagrams and workflow visualizations.',
            'Developed interactive node-based editing using React Flow with AI-assisted diagram generation.'
        ],
        techStack: ['React', 'React Flow', 'AI APIs'],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: '03',
        title: 'FarmAssist',
        subtitle: 'AI Agricultural Assistant',
        link: 'https://github.com/SaiDhinakar/farm-assist',
        description: [
            'Created a multi-modal AI system with LLM advisory, RAG-based retrieval, and computer vision for pest/disease identification.',
            'Integrated CLIP, ViT-GPT2, and Gemini with FastAPI backend and ChromaDB vector search.'
        ],
        techStack: ['Python', 'FastAPI', 'CLIP', 'ViT-GPT2', 'Gemini', 'ChromaDB'],
        image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: '04',
        title: 'AI Form Assistant',
        subtitle: 'Indian Citizen Services',
        link: '#',
        description: [
            'An intelligent form-filling solution designed to help citizens at Seva Kendras auto-fill government service forms using their uploaded documents.',
            'Reduces manual effort and minimizes errors in official applications.'
        ],
        techStack: ['React', 'Tailwind CSS', 'FastAPI', 'Docker', 'PaddleOCR', 'SQLite3'],
        image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800'
    }
];

const Projects = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section
            id="projects"
            style={{
                position: 'relative',
                width: '100%',
                padding: '100px 2rem 140px',
                background: '#fafafa',
                fontFamily: "'Inter', sans-serif"
            }}
        >
            {/* CSS for responsive accordion layout and smooth transitions */}
            <style>
                {`
                    .projects-wrapper {
                        display: flex;
                        gap: 24px;
                        height: 600px;
                        width: 100%;
                        flex-direction: row;
                    }
                    .project-card {
                        position: relative;
                        background: #ffffff;
                        border-radius: 24px;
                        overflow: hidden;
                        cursor: pointer;
                        border: 1px solid #f1f5f9;
                        transition: flex 0.7s cubic-bezier(0.2, 0.8, 0.2, 1), 
                                    box-shadow 0.4s ease, border-color 0.4s ease;
                    }
                    .project-card.active {
                        flex: 6;
                        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);
                        border-color: #cbd5e1;
                        cursor: default;
                    }
                    .project-card.inactive {
                        flex: 1;
                        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
                    }
                    .project-card.inactive:hover {
                        background: #f8fafc;
                        border-color: #cbd5e1;
                    }

                    .active-content {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 900px; /* Fixed to prevent reflow during transition */
                        height: 100%;
                        display: flex;
                        padding: 40px;
                    }
                    .active-content-inner-left {
                        flex: 1;
                        display: flex;
                        flex-direction: column;
                        padding-right: 40px;
                    }
                    .active-content-inner-right {
                        width: 350px;
                        flex-shrink: 0;
                        border-radius: 16px;
                        overflow: hidden;
                    }

                    .inactive-content {
                        position: absolute;
                        top: 0; left: 0; width: 100%; height: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        padding: 30px 0;
                    }
                    .inactive-title {
                        margin-top: auto;
                        writing-mode: vertical-rl;
                        transform: rotate(180deg);
                        font-size: 1.25rem;
                        font-weight: 700;
                        color: #475569;
                        letter-spacing: 0.1em;
                        white-space: nowrap;
                    }

                    @media (max-width: 1024px) {
                        .active-content { width: 700px; padding: 30px; }
                        .active-content-inner-right { width: 250px; }
                    }

                    @media (max-width: 768px) {
                        .projects-wrapper {
                            flex-direction: column;
                            height: 1100px;
                        }
                        .project-card.active { flex: 4; }
                        .project-card.inactive { flex: 1; }
                        
                        .active-content { width: 100%; height: 100%; flex-direction: column; padding: 24px; }
                        .active-content-inner-left { padding-right: 0; flex: none; height: auto; }
                        .active-content-inner-right { width: 100%; height: 200px; margin-top: 20px; }
                        
                        .inactive-content { flex-direction: row; padding: 0 24px; }
                        .inactive-title { margin-top: 0; margin-left: 20px; writing-mode: horizontal-tb; transform: none; }
                    }
                `}
            </style>

            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: '60px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}
                >
                    <div>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3rem)', fontWeight: '800', color: '#1e293b', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                            Innovation <span style={{ color: '#8b7cc8' }}>Showcase</span>
                        </h2>
                        <p style={{ color: '#64748b', fontSize: '1rem', marginTop: '12px', maxWidth: '500px' }}>
                            Interactive gallery of my core AI architectures, ML pipelines, and full-stack solutions.
                        </p>
                    </div>
                    {/* Minimalist instruction */}
                    <div style={{ padding: '8px 16px', background: '#f1f5f9', borderRadius: '20px', color: '#64748b', fontSize: '0.85rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '1.2rem', lineHeight: 0 }}>✦</span> Select to expand
                    </div>
                </motion.div>

                <div className="projects-wrapper">
                    {projectsData.map((project, index) => {
                        const isActive = activeIndex === index;

                        return (
                            <div
                                key={project.id}
                                className={`project-card ${isActive ? 'active' : 'inactive'}`}
                                onClick={() => setActiveIndex(index)}
                            >
                                {/* INACTIVE STATE OVERLAY */}
                                <div
                                    className="inactive-content"
                                    style={{
                                        opacity: isActive ? 0 : 1,
                                        transition: 'opacity 0.3s ease',
                                        pointerEvents: isActive ? 'none' : 'auto'
                                    }}
                                >
                                    <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#94a3b8', fontFamily: 'monospace' }}>{project.id}</div>
                                    <div className="inactive-title">{project.title}</div>
                                </div>

                                {/* ACTIVE STATE CONTENT */}
                                <div
                                    className="active-content"
                                    style={{
                                        opacity: isActive ? 1 : 0,
                                        pointerEvents: isActive ? 'auto' : 'none',
                                        transition: 'opacity 0.4s ease',
                                        transitionDelay: isActive ? '0.2s' : '0s'
                                    }}
                                >
                                    <div className="active-content-inner-left">
                                        <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#cbd5e1', fontFamily: 'monospace', marginBottom: '8px' }}>
                                            {project.id} //
                                        </div>

                                        <h3 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: '#1e293b', lineHeight: 1.1, marginBottom: '8px' }}>
                                            {project.title}
                                        </h3>

                                        <h4 style={{ fontSize: '1.1rem', color: '#8b7cc8', fontWeight: 600, marginBottom: '24px' }}>
                                            {project.subtitle}
                                        </h4>

                                        <ul style={{ paddingLeft: '20px', margin: 0, color: '#475569', fontSize: '1rem', lineHeight: 1.6, flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                            {project.description.map((desc, i) => (
                                                <li key={i}>{desc}</li>
                                            ))}
                                        </ul>

                                        <div style={{ marginTop: '30px' }}>
                                            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
                                                {project.techStack.map(tech => (
                                                    <span key={tech} style={{
                                                        padding: '4px 12px',
                                                        background: '#f8fafc',
                                                        border: '1px solid #e2e8f0',
                                                        color: '#475569',
                                                        borderRadius: '8px',
                                                        fontSize: '0.8rem',
                                                        fontWeight: 600
                                                    }}>
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>

                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    gap: '8px',
                                                    padding: '12px 24px',
                                                    background: '#0f172a',
                                                    color: '#fff',
                                                    borderRadius: '12px',
                                                    textDecoration: 'none',
                                                    fontWeight: '700',
                                                    fontSize: '0.95rem',
                                                    transition: 'background 0.2s ease',
                                                    width: 'fit-content'
                                                }}
                                                onMouseEnter={(e) => e.currentTarget.style.background = '#8b7cc8'}
                                                onMouseLeave={(e) => e.currentTarget.style.background = '#0f172a'}
                                            >
                                                Explore Project <span style={{ fontSize: '1.2rem', lineHeight: 1 }}>↗</span>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="active-content-inner-right">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                border: '1px solid #f1f5f9',
                                                borderRadius: '16px'
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Projects;
