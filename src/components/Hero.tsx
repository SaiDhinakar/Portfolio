import { useEffect, useState } from 'react';

/* ── Social Icon (hidden for this style, but kept for later sections) ── */
// Darwin style is extremely minimalistic, social icons aren't in the main hero block

const Hero = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section
            id="home"
            style={{
                position: 'relative',
                width: '100%',
                minHeight: '100vh',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                background: '#fcfcfc',
                fontFamily: "'Inter', sans-serif",
            }}
        >
            {/* Subtle Background Glows */}
            <div style={{
                position: 'absolute', top: '10%', left: '-10%', width: '600px', height: '600px',
                background: 'radial-gradient(circle, rgba(245, 230, 245, 0.5) 0%, transparent 60%)',
                filter: 'blur(80px)', pointerEvents: 'none', zIndex: 0,
            }} />
            <div style={{
                position: 'absolute', top: '20%', right: '-10%', width: '500px', height: '500px',
                background: 'radial-gradient(circle, rgba(220, 240, 255, 0.6) 0%, transparent 60%)',
                filter: 'blur(80px)', pointerEvents: 'none', zIndex: 0,
            }} />

            {/* Grid Pattern */}
            <div style={{
                position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px)',
                backgroundSize: '100px 100px',
                backgroundPosition: 'center center',
                maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 80%)',
                WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 80%)',
            }} />

            {/* ════════════════════════════════════════
          TOP: Centered headline content (Darwin style)
      ════════════════════════════════════════ */}
            <div
                style={{
                    position: 'relative',
                    zIndex: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    paddingTop: '16vh',  // Push down from navbar
                    maxWidth: '850px',
                    width: '100%',
                    marginBottom: '0',
                    paddingLeft: '1.5rem',
                    paddingRight: '1.5rem',
                    opacity: mounted ? 1 : 0,
                    transform: mounted ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'opacity 0.8s ease, transform 0.8s ease',
                }}
            >
                {/* Main Headline */}
                <h1 style={{
                    fontSize: 'clamp(2.8rem, 5.5vw, 4.2rem)',
                    fontWeight: '400',
                    lineHeight: 1.1,
                    letterSpacing: '-0.03em',
                    color: '#0f172a',
                    margin: 0,
                }}>
                    Hi, I'm Sai Dhinakar
                    <br />
                    {/* <span style={{ fontWeight: '500' }}>your new AI colleague</span> */}
                </h1>

                {/* Subtitle */}
                <p style={{
                    fontSize: 'clamp(0.95rem, 1.6vw, 1.1rem)',
                    color: '#64748b',
                    lineHeight: 1.6,
                    maxWidth: '560px',
                    marginTop: '1.2rem',
                    marginBottom: '2rem',
                    fontWeight: '400',
                }}>
                    AI & ML enthusiast and Python developer building intelligent, data-driven solutions.

                </p>

            </div>

            {/* ════════════════════════════════════════
          BOTTOM: Profile image + Floating Cards
      ════════════════════════════════════════ */}
            <div style={{
                position: 'relative',
                flex: 1,
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-end',
                marginTop: '1vh',
                zIndex: 4,
            }}>
                {/* Main profile image */}
                <div
                    style={{
                        height: '63vh',
                        maxHeight: '850px',
                        marginBottom: '1vh', // Moves the image up slightly
                        zIndex: 2,
                        pointerEvents: 'none',
                        userSelect: 'none',
                        opacity: mounted ? 1 : 0,
                        transform: mounted ? 'translateY(0)' : 'translateY(30px)',
                        transition: 'opacity 1s ease 0.2s, transform 1s ease 0.2s',
                    }}
                >
                    <img
                        src="/profile.png"
                        alt="Alex Rivera"
                        style={{
                            height: '100%',
                            width: 'auto',
                            display: 'block',
                            objectFit: 'contain',
                            objectPosition: 'bottom center',
                        }}
                    />
                </div>

                {/* ── CARD 1 (Left Middle) ── */}
                <div
                    style={{
                        position: 'absolute',
                        left: 'calc(55% - 340px)',
                        bottom: '60%',
                        background: '#ffffff',
                        borderRadius: '16px',
                        padding: '16px 20px',
                        boxShadow: '0 8px 30px rgba(0,0,0,0.06), 0 2px 10px rgba(0,0,0,0.02)',
                        minWidth: '220px',
                        zIndex: 1,
                        opacity: mounted ? 1 : 0,
                        transform: mounted ? 'translateY(0)' : 'translateY(15px)',
                        transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.5s',
                    }}
                >
                    <div style={{ fontSize: '0.95rem', fontWeight: '700', color: '#0f172a', marginBottom: '2px' }}>
                        10+ projects
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '14px' }}>
                        Built & open-sourced
                    </div>
                    {/* Progress bar */}
                    {/* <div style={{ position: 'relative', height: '6px', background: '#f1f5f9', borderRadius: '4px' }}>
                        <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '80%', background: '#8b7cc8', borderRadius: '4px' }} />
                        <div style={{
                            position: 'absolute', top: '50%', left: '80%', transform: 'translate(-50%, -50%)',
                            width: '12px', height: '12px', background: '#ffffff', border: '2px solid #8b7cc8', borderRadius: '50%',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                        }} />
                    </div> */}
                </div>

                {/* ── CARD 2 (Bottom Left) ── */}
                <div
                    style={{
                        position: 'absolute',
                        left: 'calc(50% - 290px)',
                        bottom: '22%',
                        background: '#ffffff',
                        borderRadius: '16px',
                        padding: '14px 20px',
                        boxShadow: '0 8px 30px rgba(0,0,0,0.06), 0 2px 10px rgba(0,0,0,0.02)',
                        display: 'flex',
                        flexDirection: 'column',
                        minWidth: '150px',
                        maxWidth: '200px',
                        zIndex: 6,
                        opacity: mounted ? 1 : 0,
                        transform: mounted ? 'translateY(0)' : 'translateY(15px)',
                        transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.6s',
                    }}
                >
                    <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '4px', fontWeight: '500' }}>
                        GitHub contributions
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '0.95rem', fontWeight: '700', color: '#0f172a' }}>1k+</span>
                        <div style={{ width: '4px', height: '14px', background: '#8b7cc8', borderRadius: '2px' }} />
                    </div>
                </div>

                {/* ── CARD 3 (Right Middle) ── */}
                <div
                    style={{
                        position: 'absolute',
                        right: 'calc(48% - 350px)',
                        bottom: '10%',
                        background: '#ffffff',
                        borderRadius: '16px',
                        padding: '20px',
                        boxShadow: '0 8px 30px rgba(0,0,0,0.06), 0 2px 10px rgba(0,0,0,0.02)',
                        display: 'flex',
                        gap: '12px',
                        maxWidth: '230px',
                        zIndex: 5,
                        opacity: mounted ? 1 : 0,
                        transform: mounted ? 'translateY(0)' : 'translateY(15px)',
                        transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.7s',
                    }}
                >
                    <div>
                        <span style={{ fontSize: '0.85rem', fontWeight: '600', color: '#0f172a' }}>
                            Current Focus
                        </span>

                        <p style={{ fontSize: '0.8rem', color: '#64748b', lineHeight: 1.4, margin: 0 }}>
                            Exploring advanced ML optimization techniques.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
