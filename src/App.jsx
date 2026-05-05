import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Proyek from './pages/Proyek'
import Achivment from './pages/Achivment'
import Personality from './pages/Personality'

function App() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-white">

        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

        {/* Konten - pakai transition dan margin dinamis */}
        <div
          className="flex flex-col flex-1 min-h-screen"
          style={{
            transition: 'margin-left 300ms ease-in-out',
            width: isOpen ? 'calc(100% - 240px)' : 'calc(100% - 72px)',
            maxWidth: '100%',
          }}
        >
          <main className="flex-1 p-6 md:p-8 overflow-x-hidden">
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<Home />} />
              <Route path="/proyek" element={<Proyek />} />
              <Route path="/achivment" element={<Achivment />} />
              <Route path="/personality" element={<Personality />} />
            </Routes>
          </main>
          <Footer />
        </div>

      </div>
    </BrowserRouter>
  )
}

export default App