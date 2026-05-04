const projects = [
  {
    title: 'Si Upin',
    description: 'AI-powered customer service chatbot for SMKN 1 Sukorejo, helping students and visitors get instant answers about school information.',
    tech: ['N8N', 'JavaScript'],
    category: 'AI & Chatbot',
    color: '#3b82f6',
    bg: '#eff6ff',
    border: '#bfdbfe',
    icon: '🤖',
    github: '',
    demo: 'https://youtu.be/Cnk_CTFC-bs?si=v-bGvOx5_NHCNMCt',
  },
  {
    title: 'Si Kemas',
    description: 'Online community complaint management system that allows citizens to submit, track, and monitor their complaints digitally.',
    tech: ['Laravel', 'MySQL', 'Tailwind'],
    category: 'Web App',
    color: '#0ea5e9',
    bg: '#f0f9ff',
    border: '#bae6fd',
    icon: '📋',
    github: 'https://github.com/3Eryy/web-kecamatan.git',
    demo: '',
  },
  {
    title: 'Jago Futsal',
    description: 'Online futsal court booking website that allows users to check availability and reserve courts easily from anywhere.',
    tech: ['React JS', 'Supabase', 'Tailwind'],
    category: 'Web App',
    color: '#22c55e',
    bg: '#f0fdf4',
    border: '#bbf7d0',
    icon: '⚽',
    github: 'https://github.com/3Eryy/JagoFutsal.git',
    demo: '',
  },
  {
    title: 'Nyemplung.In',
    description: 'Snorkeling and surfing equipment rental website with an intuitive booking flow for water sports enthusiasts.',
    tech: ['React JS', 'Supabase', 'Tailwind'],
    category: 'Web App',
    color: '#06b6d4',
    bg: '#ecfeff',
    border: '#a5f3fc',
    icon: '🤿',
    github: 'https://github.com/3Eryy/ukk-nyemplungin.git',
    demo: '',
  },
  {
    title: 'Chatbot CS Travel Umroh',
    description: 'Intelligent customer service chatbot for an Umrah travel agency, handling FAQs, package inquiries, and booking assistance.',
    tech: ['Dify.AI', 'JavaScript'],
    category: 'AI & Chatbot',
    color: '#f59e0b',
    bg: '#fffbeb',
    border: '#fde68a',
    icon: '🕌',
    github: '',
    demo: '',
  },
  {
    title: 'Automation Content Generator',
    description: 'Automated content creation pipeline using N8N that generates social media posts and articles with minimal manual effort.',
    tech: ['N8N', 'JavaScript', 'Docker'],
    category: 'Automation',
    color: '#ea4b71',
    bg: '#fff0f4',
    border: '#fecdd3',
    icon: '⚡',
    github: '',
    demo: '',
  },
  {
    title: 'Presensi SMKN 1 Sukorejo',
    description: 'Student attendance web application for SMKN 1 Sukorejo built with Laravel Filament, featuring real-time tracking and reporting.',
    tech: ['Laravel', 'Filament', 'MySQL'],
    category: 'Web App',
    color: '#8b5cf6',
    bg: '#f5f3ff',
    border: '#ddd6fe',
    icon: '📅',
    github: 'https://github.com/3Eryy/schedules.git',
    demo: '',
  },
]

const categoryColor = {
  'AI & Chatbot': { bg: '#eff6ff', text: '#1d4ed8', border: '#bfdbfe' },
  'Web App':      { bg: '#f0fdf4', text: '#15803d', border: '#bbf7d0' },
  'Automation':   { bg: '#fff0f4', text: '#be185d', border: '#fecdd3' },
}

function Proyek() {
  return (
    <div className="w-full max-w-5xl mx-auto py-8 px-4">

      {/* Header */}
      <div className="mb-10">
        <p
          className="text-sm font-semibold tracking-widest uppercase mb-2"
          style={{ color: '#3b82f6' }}
        >
          FROSTSONIC
        </p>
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-extrabold" style={{ color: '#1e293b' }}>
            Projects
          </h1>
        </div>
        <p className="mt-3 text-sm" style={{ color: '#64748b' }}>
          A collection of projects I've built — from AI chatbots to web applications and automation systems.
        </p>
      </div>

      {/* Grid Proyek */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map(({ title, description, tech, category, color, bg, border, icon, github, demo }) => {
          const cat = categoryColor[category]
          return (
            <div
              key={title}
              className="flex flex-col rounded-2xl overflow-hidden transition-all duration-200"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2eaf4',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = `0 12px 32px ${color}18`
                e.currentTarget.style.borderColor = border
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.borderColor = '#e2eaf4'
              }}
            >
              {/* Card Header */}
              <div
                className="flex items-center justify-between px-5 py-4"
                style={{ backgroundColor: bg, borderBottom: `1px solid ${border}` }}
              >
                <span className="text-3xl">{icon}</span>
                <span
                  className="text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{ backgroundColor: cat.bg, color: cat.text, border: `1px solid ${cat.border}` }}
                >
                  {category}
                </span>
              </div>

              {/* Card Body */}
              <div className="flex flex-col flex-1 px-5 py-4 gap-3">
                <h2 className="text-base font-bold" style={{ color: '#1e293b' }}>
                  {title}
                </h2>
                <p className="text-xs leading-relaxed flex-1" style={{ color: '#64748b' }}>
                  {description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {tech.map(t => (
                    <span
                      key={t}
                      className="text-xs px-2 py-0.5 rounded-md font-medium"
                      style={{ backgroundColor: '#f1f5f9', color: '#475569' }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-2 mt-2">
                  {github ? (
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg transition-all duration-200"
                      style={{ backgroundColor: '#1e293b', color: '#ffffff' }}
                      onMouseEnter={e => e.currentTarget.style.backgroundColor = '#0f172a'}
                      onMouseLeave={e => e.currentTarget.style.backgroundColor = '#1e293b'}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                  ) : (
                    <span
                      className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg"
                      style={{ backgroundColor: '#f1f5f9', color: '#94a3b8' }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      Private
                    </span>
                  )}

                  {demo && (
                    <a
                      href={demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg transition-all duration-200"
                      style={{ backgroundColor: '#eff6ff', color: '#1d4ed8', border: '1px solid #bfdbfe' }}
                      onMouseEnter={e => e.currentTarget.style.backgroundColor = '#dbeafe'}
                      onMouseLeave={e => e.currentTarget.style.backgroundColor = '#eff6ff'}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default Proyek