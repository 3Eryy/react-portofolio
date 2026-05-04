import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { House, FolderKanban, Trophy, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react'

const menu = [
  { path: '/home',        label: 'Home',        icon: House },
  { path: '/proyek',      label: 'Proyek',       icon: FolderKanban },
  { path: '/achivment',   label: 'Achivment',    icon: Trophy },
  { path: '/personality', label: 'Personality',  icon: Sparkles },
]

function Sidebar({ isOpen, setIsOpen }) {
  return (
    <aside
      className="fixed top-0 right-0 h-screen flex flex-col z-50 transition-all duration-300 ease-in-out"
      style={{
        width: isOpen ? '240px' : '72px',
        backgroundColor: '#ffffff',
        borderRight: '1px solid #e2eaf4',
        boxShadow: '-2px 0 12px rgba(59,130,246,0.06)',
      }}
    >

      {/* Header */}
      <div
        className="flex items-center justify-between px-4 py-5"
        style={{ borderBottom: '1px solid #e2eaf4' }}
      >
        <div
          className="overflow-hidden transition-all duration-300"
          style={{ width: isOpen ? 'auto' : '0px', opacity: isOpen ? 1 : 0 }}
        >
          <h1
            className="text-lg font-bold whitespace-nowrap tracking-tight"
            style={{ color: '#1d4ed8' }}
          >
            Arya Pratama
          </h1>
          <p className="text-xs uppercase tracking-widest mt-0.5" style={{ color: '#93c5fd' }}>
            Portfolio
          </p>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center w-8 h-8 rounded-lg flex-shrink-0 transition-all duration-200"
          style={{ backgroundColor: '#eff6ff', color: '#3b82f6', border: '1px solid #bfdbfe' }}
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = '#dbeafe'
            e.currentTarget.style.color = '#1d4ed8'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = '#eff6ff'
            e.currentTarget.style.color = '#3b82f6'
          }}
        >
          {isOpen ? <ChevronRight size={15} /> : <ChevronLeft size={15} />}
        </button>
      </div>

      {/* Nav Label */}
      {isOpen && (
        <p
          className="text-xs uppercase tracking-widest px-5 pt-5 pb-2"
          style={{ color: '#93c5fd' }}
        >
          Menu
        </p>
      )}

      {/* Menu */}
      <nav className="flex flex-col gap-1 px-3 mt-2">
        {menu.map(({ path, label, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            title={!isOpen ? label : ''}
            className="flex items-center rounded-xl transition-all duration-200"
            style={({ isActive }) => ({
              gap: isOpen ? '10px' : '0px',
              padding: isOpen ? '9px 12px' : '9px',
              justifyContent: isOpen ? 'flex-start' : 'center',
              backgroundColor: isActive ? '#eff6ff' : 'transparent',
              color: isActive ? '#1d4ed8' : '#64748b',
              borderRadius: '10px',
              boxShadow: isActive ? 'inset 0 0 0 1.5px #bfdbfe' : 'none',
            })}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#f0f9ff'
              e.currentTarget.style.color = '#2563eb'
            }}
            onMouseLeave={e => {
              const active = window.location.pathname === path
              e.currentTarget.style.backgroundColor = active ? '#eff6ff' : 'transparent'
              e.currentTarget.style.color = active ? '#1d4ed8' : '#64748b'
            }}
          >
            {({ isActive }) => (
              <>
                <span
                  className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-200"
                  style={{
                    backgroundColor: isActive ? '#dbeafe' : '#f8fafc',
                    color: isActive ? '#1d4ed8' : '#94a3b8',
                    border: isActive ? '1px solid #bfdbfe' : '1px solid #f1f5f9',
                  }}
                >
                  <Icon size={15} />
                </span>

                {isOpen && (
                  <span
                    className="text-sm font-medium whitespace-nowrap"
                    style={{ color: isActive ? '#1d4ed8' : '#64748b' }}
                  >
                    {label}
                  </span>
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Profile Card */}
      <div
        className="mx-3 mb-5 rounded-xl p-3 flex items-center gap-3 transition-all duration-300"
        style={{
          backgroundColor: '#eff6ff',
          border: '1px solid #bfdbfe',
          justifyContent: isOpen ? 'flex-start' : 'center',
        }}
      >
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
          style={{ backgroundColor: '#3b82f6', color: '#ffffff' }}
        >
          A
        </div>

        {isOpen && (
          <div className="overflow-hidden">
            <p className="text-sm font-semibold whitespace-nowrap" style={{ color: '#1d4ed8' }}>
              Arya Pratama
            </p>
            <p className="text-xs" style={{ color: '#60a5fa' }}>
              Developer
            </p>
          </div>
        )}
      </div>

    </aside>
  )
}

export default Sidebar