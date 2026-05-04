import { useState, useEffect } from 'react'
import cvFile from '../assets/CV-Arya.pdf'
import fotoProfile from '../assets/images/profile.png'


const techStack = [
    {
        name: 'React JS',
        color: '#61DAFB',
        bg: '#e8f9fd',
        svg: (
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                <circle cx="20" cy="20" r="3.5" fill="#61DAFB" />
                <ellipse cx="20" cy="20" rx="17" ry="6.5" stroke="#61DAFB" strokeWidth="1.8" fill="none" />
                <ellipse cx="20" cy="20" rx="17" ry="6.5" stroke="#61DAFB" strokeWidth="1.8" fill="none" transform="rotate(60 20 20)" />
                <ellipse cx="20" cy="20" rx="17" ry="6.5" stroke="#61DAFB" strokeWidth="1.8" fill="none" transform="rotate(120 20 20)" />
            </svg>
        ),
    },
    {
        name: 'Next.js',
        color: '#000000',
        bg: '#f0f0f0',
        svg: (
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                <circle cx="20" cy="20" r="18" fill="black" />
                <path d="M11 28V13l16 18h-3V20L11 28z" fill="white" />
                <path d="M22 13h3v10" stroke="white" strokeWidth="2.2" fill="none" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        name: 'Supabase',
        color: '#3ECF8E',
        bg: '#e8faf3',
        svg: (
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                <path d="M21.5 7L9 23.5h11V33l11.5-16.5H20.5L21.5 7z" fill="#3ECF8E" />
            </svg>
        ),
    },
    {
        name: 'Laravel',
        color: '#FF2D20',
        bg: '#fff0ef',
        svg: (
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                <path d="M34 10.5c.1.2.1.4 0 .5l-5 8.6v.1l-5 8.7c-.1.2-.4.3-.6.2l-5-2.9-5 2.9c-.1 0-.2.1-.3.1-.1 0-.2 0-.3-.1l-.4-.7 4.7-2.7v-.1l5-8.7c.1-.2.4-.3.6-.2l5 2.9 4.7-8.1-9.4-5.4-9.4 5.4v10.8l9.4 5.4 4.4-2.5.4.7-4.5 2.6c-.2.1-.5.1-.6 0l-10-5.7c-.2-.1-.3-.3-.3-.6V14.5c0-.2.1-.4.3-.6l10-5.7c.2-.1.5-.1.6 0l10 5.7c.2.1.3.3.3.6v.1l-.1-.1z" fill="#FF2D20" />
            </svg>
        ),
    },
    {
        name: 'MySQL',
        color: '#00758F',
        bg: '#e6f4f7',
        svg: (
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                <ellipse cx="20" cy="12" rx="12" ry="5" fill="#00758F" />
                <path d="M8 12v6c0 2.8 5.4 5 12 5s12-2.2 12-5v-6" stroke="#00758F" strokeWidth="1.8" fill="none" />
                <path d="M8 18v6c0 2.8 5.4 5 12 5s12-2.2 12-5v-6" stroke="#00758F" strokeWidth="1.8" fill="none" />
            </svg>
        ),
    },
    {
        name: 'Python',
        color: '#3776AB',
        bg: '#ebf2fa',
        svg: (
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                <path d="M20 7c-5 0-8 2-8 5v3h8v1H9c-3 0-5 2-5 6s2 6 5 6h3v-4c0-3 3-5 8-5s8 2 8 5v8c0 3-3 5-8 5s-8-2-8-5v-3h-3c-4 0-6-3-6-7s2-7 6-7h2v-3c0-4 3-6 8-6s8 2 8 6v3h2c4 0 6 3 6 7v1h-3v-1c0-3-2-5-5-5h-3v3c0 3-3 5-8 5z" fill="#3776AB" />
                <circle cx="15.5" cy="13.5" r="1.5" fill="white" />
                <circle cx="24.5" cy="26.5" r="1.5" fill="white" />
            </svg>
        ),
    },
    {
        name: 'Jupyter',
        color: '#F37626',
        bg: '#fff3eb',
        svg: (
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                <circle cx="20" cy="20" r="13" stroke="#F37626" strokeWidth="2" fill="none" />
                <circle cx="20" cy="8" r="3" fill="#F37626" />
                <circle cx="9" cy="29" r="3" fill="#767676" />
                <circle cx="31" cy="29" r="3" fill="#9E9E9E" />
            </svg>
        ),
    },
    {
        name: 'n8n',
        color: '#EA4B71',
        bg: '#fdedf1',
        svg: (
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                <circle cx="10" cy="20" r="4" fill="#EA4B71" />
                <circle cx="30" cy="20" r="4" fill="#EA4B71" />
                <circle cx="20" cy="20" r="4" fill="#EA4B71" />
                <line x1="14" y1="20" x2="16" y2="20" stroke="#EA4B71" strokeWidth="2" />
                <line x1="24" y1="20" x2="26" y2="20" stroke="#EA4B71" strokeWidth="2" />
                <path d="M10 16 Q10 10 20 10 Q30 10 30 16" stroke="#EA4B71" strokeWidth="1.5" fill="none" />
            </svg>
        ),
    },
    {
        name: 'Dify',
        color: '#3b82f6',
        bg: '#eff6ff',
        svg: (
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                <rect x="8" y="10" width="24" height="20" rx="5" fill="#3b82f6" />
                <circle cx="15" cy="18" r="2" fill="white" />
                <circle cx="25" cy="18" r="2" fill="white" />
                <path d="M14 24 Q20 28 26 24" stroke="white" strokeWidth="1.8" fill="none" strokeLinecap="round" />
            </svg>
        ),
    },
]

function TypingText({ text, speed = 80 }) {
    const [displayed, setDisplayed] = useState('')
    const [idx, setIdx] = useState(0)
    const [showCursor, setShowCursor] = useState(true)

    useEffect(() => {
        if (idx < text.length) {
            const timeout = setTimeout(() => {
                setDisplayed(prev => prev + text[idx])
                setIdx(prev => prev + 1)
            }, speed)
            return () => clearTimeout(timeout)
        }
    }, [idx, text, speed])

    useEffect(() => {
        const interval = setInterval(() => setShowCursor(c => !c), 500)
        return () => clearInterval(interval)
    }, [])

    return (
        <span>
            {displayed}
            <span style={{
                opacity: showCursor ? 1 : 0,
                color: '#3b82f6',
                transition: 'opacity 0.1s',
            }}>|</span>
        </span>
    )
}

function Home() {
    return (
        <div className="w-full  mx-auto py-8 px-4 flex flex-col gap-20">

            {/* ── SECTION 1: Hero ── */}
            <section className="flex flex-col-reverse md:flex-row items-center gap-10">

                {/* Teks kiri */}
                <div className="flex-1 flex flex-col gap-4">
                    <p
                        className="text-sm font-semibold tracking-widest uppercase"
                        style={{ color: '#3b82f6' }}
                    >
                        FROSTSONIC
                    </p>

                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight" style={{ color: '#1e293b' }}>
                        Hallo 👋 <br />
                        <span style={{ color: '#1d4ed8' }}>
                            <TypingText text="I Am Arya Pratama" speed={90} />
                        </span>
                    </h1>

                    <p className="text-base leading-relaxed" style={{ color: '#64748b' }}>
                        Vocational student majoring in Software Engineering,
                        passionate about <strong style={{ color: '#1d4ed8' }}>Artificial Intelligence</strong> &{' '}
                        <strong style={{ color: '#3b82f6' }}>Automation</strong>.
                    </p>

                    {/* Badge */}
                    <div className="flex flex-wrap gap-2 mt-1">
                        {['AI Enthusiast', 'Automation Builder', 'LKS Participant'].map(badge => (
                            <span
                                key={badge}
                                className="text-xs font-medium px-3 py-1 rounded-full"
                                style={{
                                    backgroundColor: '#eff6ff',
                                    color: '#1d4ed8',
                                    border: '1px solid #bfdbfe',
                                }}
                            >
                                {badge}
                            </span>
                        ))}
                    </div>

                    <div className="mt-2">
                        <a
                            href={cvFile}
                            download="CV-Arya-Bima-Putra-Pratama.pdf"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200"
                            style={{
                                backgroundColor: '#1d4ed8',
                                color: '#ffffff',
                                border: '1px solid #1d4ed8',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.backgroundColor = '#1e40af'
                                e.currentTarget.style.borderColor = '#1e40af'
                                e.currentTarget.style.transform = 'translateY(-1px)'
                                e.currentTarget.style.boxShadow = '0 4px 12px rgba(29,78,216,0.3)'
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.backgroundColor = '#1d4ed8'
                                e.currentTarget.style.borderColor = '#1d4ed8'
                                e.currentTarget.style.transform = 'translateY(0)'
                                e.currentTarget.style.boxShadow = 'none'
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="7 10 12 15 17 10" />
                                <line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                            Download CV
                        </a>
                    </div>
                </div>

                {/* Foto kanan */}
                <div className="flex-shrink-0 flex items-center justify-center" style={{ perspective: '1000px' }}>
                    <div
                        className="relative"
                        style={{
                            width: '200px',
                            height: '200px',
                        }}
                    >
                        {/* Dekorasi kotak belakang (tilted) */}
                        <div
                            className="absolute inset-0 rounded-2xl"
                            style={{
                                backgroundColor: '#bfdbfe',
                                transform: 'rotate(6deg) translateY(6px)',
                                zIndex: 0,
                            }}
                        />

                        {/* Dekorasi kotak tengah */}
                        <div
                            className="absolute inset-0 rounded-2xl"
                            style={{
                                backgroundColor: '#93c5fd',
                                transform: 'rotate(3deg) translateY(3px)',
                                zIndex: 1,
                            }}
                        />

                        {/* Foto utama */}
                        <div
                            className="absolute inset-0 rounded-2xl overflow-hidden transition-all duration-300"
                            style={{
                                zIndex: 2,
                                boxShadow: '0 8px 32px rgba(59,130,246,0.2)',
                                border: '3px solid #ffffff',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.transform = 'scale(1.04) translateY(-4px)'
                                e.currentTarget.style.boxShadow = '0 20px 48px rgba(59,130,246,0.35)'
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.transform = 'scale(1) translateY(0)'
                                e.currentTarget.style.boxShadow = '0 8px 32px rgba(59,130,246,0.2)'
                            }}
                        >
                            <img
                                src={fotoProfile}
                                alt="Arya Pratama"
                                className="w-full h-full object-cover transition-transform duration-300"
                                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
                                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                                onError={e => {
                                    e.target.style.display = 'none'
                                    e.target.nextSibling.style.display = 'flex'
                                }}
                            />
                            {/* Placeholder */}
                            <div
                                className="w-full h-full items-center justify-center flex-col gap-2 bg-blue-50"
                                style={{ display: 'none' }}
                            >
                                <div
                                    className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold"
                                    style={{ backgroundColor: '#3b82f6', color: 'white' }}
                                >
                                    A
                                </div>
                            </div>
                        </div>

                        {/* Dot dekorasi pojok kanan bawah */}
                        <div
                            className="absolute rounded-full"
                            style={{
                                width: '12px',
                                height: '12px',
                                backgroundColor: '#1d4ed8',
                                bottom: '-8px',
                                right: '-8px',
                                zIndex: 3,
                            }}
                        />

                        {/* Dot dekorasi pojok kiri atas */}
                        <div
                            className="absolute rounded-full"
                            style={{
                                width: '8px',
                                height: '8px',
                                backgroundColor: '#93c5fd',
                                top: '-6px',
                                left: '-6px',
                                zIndex: 3,
                            }}
                        />
                    </div>
                </div>

            </section >

            {/* ── SECTION 2: About Me ── */}
            <section section >
                <div className="flex items-center gap-3 mb-5">
                    <h2 className="text-xl font-bold" style={{ color: '#1e293b' }}>About Me</h2>
                    <div className="flex-1 h-px" style={{ backgroundColor: '#e2eaf4' }} />
                </div>

                <div
                    className="rounded-2xl p-6 md:p-8 text-sm"
                    style={{
                        backgroundColor: '#f8faff',
                        border: '1px solid #bfdbfe',
                        color: '#475569',
                        lineHeight: '1.9',
                    }}
                >
                    <p>
                        My name is <strong style={{ color: '#1e293b' }}>Arya Bima Putra Pratama</strong>, born in Pasuruan on May 27, 2008.
                        I am currently a vocational high school student majoring in{' '}
                        <strong style={{ color: '#1d4ed8' }}>Software Engineering (RPL)</strong>.
                    </p>
                    <br />
                    <p>
                        During my time in vocational school, I have competed in the{' '}
                        <strong style={{ color: '#1d4ed8' }}>Students Competency Competition (LKS)</strong> at the provincial level
                        twice in the field of <strong style={{ color: '#3b82f6' }}>Artificial Intelligence</strong>.
                    </p>
                    <br />
                    <p>
                        I have a deep passion for <strong style={{ color: '#1d4ed8' }}>Artificial Intelligence</strong> and{' '}
                        <strong style={{ color: '#3b82f6' }}>Automation</strong>, and I enjoy building intelligent systems
                        that solve real-world problems efficiently.
                    </p>
                </div>
            </section >

            {/* ── SECTION 3: Tools & Technology ── */}
            <section section >
                <div className="flex items-center gap-3 mb-5">
                    <h2 className="text-xl font-bold" style={{ color: '#1e293b' }}>Tools & Technology</h2>
                    <div className="flex-1 h-px" style={{ backgroundColor: '#e2eaf4' }} />
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                    {techStack.map(({ name, color, bg, svg }) => (
                        <div
                            key={name}
                            className="flex flex-col items-center gap-2 py-4 px-2 rounded-2xl transition-all duration-200 cursor-default"
                            style={{
                                backgroundColor: '#ffffff',
                                border: '1px solid #e2eaf4',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.backgroundColor = bg
                                e.currentTarget.style.borderColor = color + '55'
                                e.currentTarget.style.transform = 'translateY(-3px)'
                                e.currentTarget.style.boxShadow = `0 8px 24px ${color}22`
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.backgroundColor = '#ffffff'
                                e.currentTarget.style.borderColor = '#e2eaf4'
                                e.currentTarget.style.transform = 'translateY(0)'
                                e.currentTarget.style.boxShadow = 'none'
                            }}
                        >
                            {svg}
                            <span className="text-xs font-medium text-center" style={{ color: '#64748b' }}>
                                {name}
                            </span>
                        </div>
                    ))}
                </div>
            </section >

        </div >
    )
}

export default Home