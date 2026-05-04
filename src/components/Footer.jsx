import { NavLink } from 'react-router-dom'

const quickLinks = [
  { label: 'Home',        path: '/home' },
  { label: 'Proyek',      path: '/proyek' },
  { label: 'Achivment',   path: '/achivment' },
  { label: 'Personality', path: '/personality' },
]

const connectLinks = [
  { label: 'E-Mail',    href: 'mailto:erykhususkerja@gmail.com' },
  { label: 'Github',    href: 'https://github.com/username' },
  { label: 'Instagram', href: 'https://instagram.com/username' },
]

function Footer() {
  return (
    <footer className="w-full">

      {/* Main Footer */}
      <div
        className="px-6 sm:px-10 md:px-16 py-10 md:py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12"
        style={{
          backgroundColor: '#ffffff',
          borderTop: '1px solid #e2eaf4',
        }}
      >

        {/* Kolom 1 - Nama & Deskripsi */}
        <div className="sm:col-span-2 md:col-span-1">
          <h2
            className="text-2xl md:text-3xl font-extrabold mb-3"
            style={{ color: '#1d4ed8' }}
          >
            Arya Pratama
          </h2>
          <div
            className="w-10 h-1 mb-4 rounded"
            style={{ backgroundColor: '#3b82f6' }}
          />
          <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>
            Creative Developer focused on building
            modern, interactive, and meaningful
            digital experiences.
          </p>
        </div>

        {/* Kolom 2 - Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-3" style={{ color: '#1e293b' }}>
            Quick Links
          </h3>
          <div
            className="w-10 h-1 mb-4 rounded"
            style={{ backgroundColor: '#3b82f6' }}
          />
          <ul className="flex flex-col gap-3">
            {quickLinks.map(({ label, path }) => (
              <li key={label}>
                <NavLink
                  to={path}
                  className="text-sm transition-all duration-200"
                  style={{ color: '#6b7280' }}
                  onMouseEnter={e => {
                    e.target.style.color = '#1d4ed8'
                    e.target.style.fontWeight = '600'
                  }}
                  onMouseLeave={e => {
                    e.target.style.color = '#6b7280'
                    e.target.style.fontWeight = '400'
                  }}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Kolom 3 - Connect */}
        <div>
          <h3 className="text-lg font-bold mb-3" style={{ color: '#1e293b' }}>
            Connect
          </h3>
          <div
            className="w-10 h-1 mb-4 rounded"
            style={{ backgroundColor: '#3b82f6' }}
          />
          <ul className="flex flex-col gap-3">
            {connectLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-all duration-200"
                  style={{ color: '#6b7280' }}
                  onMouseEnter={e => {
                    e.target.style.color = '#1d4ed8'
                    e.target.style.fontWeight = '600'
                  }}
                  onMouseLeave={e => {
                    e.target.style.color = '#6b7280'
                    e.target.style.fontWeight = '400'
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div
        className="py-4 text-center text-xs sm:text-sm px-4"
        style={{
          backgroundColor: '#eff6ff',
          borderTop: '1px solid #bfdbfe',
          color: '#9ca3af',
        }}
      >
        © 2025{' '}
        <span style={{ color: '#1d4ed8', fontWeight: '600' }}>
          Arya Bima Putra Pratama
        </span>
        . All Rights Reserved.
      </div>

    </footer>
  )
}

export default Footer