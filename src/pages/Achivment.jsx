import lkskab from '../assets/achivment/lkskab.jpeg'
import lks2 from '../assets/achivment/lks2.jpeg'
import lks1 from '../assets/achivment/lks1.jpeg'
import bit from '../assets/achivment/bit.jpeg'
import botubig from '../assets/achivment/botubig.jpeg'
import revou from '../assets/achivment/revou.jpeg'

const achievements = [
  {
    id: 1,
    title: '1st Place — LKS AI Kabupaten Pasuruan',
    year: '2025',
    type: '🏆 Competition',
    category: 'competition',
    issuer: 'Dinas Pendidikan Kabupaten Pasuruan',
    description: 'Achieved 1st place in the Students Competency Competition (LKS) in the field of Artificial Intelligence at the Pasuruan Regency level.',
    image: lkskab,
  },
  {
    id: 2,
    title: '5th Place — LKS AI Provinsi Jawa Timur',
    year: '2025',
    type: '🥈 Competition',
    category: 'competition',
    issuer: 'Dinas Pendidikan Provinsi Jawa Timur',
    description: 'Achieved 5th place in the Students Competency Competition (LKS) in the field of Artificial Intelligence at the East Java Provincial level.',
    image: lks2,
  },
  {
    id: 3,
    title: '11th Place — LKS AI Provinsi Jawa Timur',
    year: '2024',
    type: '🎖️ Competition',
    category: 'competition',
    issuer: 'Dinas Pendidikan Provinsi Jawa Timur',
    description: 'Achieved 11th place in the Students Competency Competition (LKS) in the field of Artificial Intelligence at the East Java Provincial level.',
    image: lks1,
  },
  {
    id: 4,
    title: 'AI Bootcamp — PT. Bit Preneur Technology',
    year: '2024',
    type: '📜 Bootcamp',
    category: 'bootcamp',
    issuer: 'PT. Bit Preneur Technology',
    description: 'Completed an intensive bootcamp program focused on Artificial Intelligence, covering machine learning fundamentals and AI application development.',
    image: bit,
  },
  {
    id: 5,
    title: 'AI Bootcamp — PT. Universal Big Data',
    year: '2024',
    type: '📜 Bootcamp',
    category: 'bootcamp',
    issuer: 'PT. Universal Big Data',
    description: 'Completed a bootcamp program in Artificial Intelligence with a focus on big data processing and AI-driven analytics.',
    image: botubig,
  },
  {
    id: 6,
    title: 'Fundamental Web Development — RevoU',
    year: '2024',
    type: '📜 Bootcamp',
    category: 'bootcamp',
    issuer: 'RevoU',
    description: 'Completed the RevoU Fundamental Course in Web Development, covering HTML, CSS, JavaScript, and modern web development practices.',
    image: revou,
  },
]

const categoryStyle = {
  competition: { bg: '#eff6ff', text: '#1d4ed8', border: '#bfdbfe', dot: '#3b82f6' },
  bootcamp:    { bg: '#f0fdf4', text: '#15803d', border: '#bbf7d0', dot: '#22c55e' },
}

function Achivment() {
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
            Achievements & Certificates
          </h1>
        </div>
        <p className="mt-3 text-sm" style={{ color: '#64748b' }}>
          Competitions, bootcamps, and certifications I've earned throughout my journey.
        </p>

        {/* Summary badges */}
        <div className="flex gap-3 mt-4 flex-wrap">
          <span
            className="text-xs font-semibold px-3 py-1.5 rounded-full"
            style={{ backgroundColor: '#eff6ff', color: '#1d4ed8', border: '1px solid #bfdbfe' }}
          >
            🏆 3 Competitions
          </span>
          <span
            className="text-xs font-semibold px-3 py-1.5 rounded-full"
            style={{ backgroundColor: '#f0fdf4', color: '#15803d', border: '1px solid #bbf7d0' }}
          >
            📜 3 Bootcamps
          </span>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {achievements.map(({ id, title, year, type, category, issuer, description, image }) => {
          const style = categoryStyle[category]
          return (
            <div
              key={id}
              className="flex flex-col rounded-2xl overflow-hidden transition-all duration-200"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2eaf4',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = `0 12px 32px rgba(59,130,246,0.1)`
                e.currentTarget.style.borderColor = style.border
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.borderColor = '#e2eaf4'
              }}
            >
              {/* Gambar Sertifikat */}
              <div
                className="w-full h-44 overflow-hidden flex items-center justify-center"
                style={{ backgroundColor: style.bg }}
              >
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-300"
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  onError={e => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                {/* Placeholder kalau foto belum ada */}
                <div
                  className="w-full h-full items-center justify-center flex-col gap-2"
                  style={{ display: 'none' }}
                >
                  <span className="text-4xl">📄</span>
                  <p className="text-xs" style={{ color: style.text }}>Certificate Image</p>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-col flex-1 px-5 py-4 gap-2">

                {/* Badge type + tahun */}
                <div className="flex items-center justify-between">
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: style.bg, color: style.text, border: `1px solid ${style.border}` }}
                  >
                    {type}
                  </span>
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded-md"
                    style={{ backgroundColor: '#f1f5f9', color: '#64748b' }}
                  >
                    {year}
                  </span>
                </div>

                {/* Judul */}
                <h2 className="text-sm font-bold leading-snug" style={{ color: '#1e293b' }}>
                  {title}
                </h2>

                {/* Issuer */}
                <p className="text-xs font-medium" style={{ color: '#3b82f6' }}>
                  {issuer}
                </p>

                {/* Deskripsi */}
                <p className="text-xs leading-relaxed flex-1" style={{ color: '#64748b' }}>
                  {description}
                </p>

              </div>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default Achivment