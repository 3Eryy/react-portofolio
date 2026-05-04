import { useState, useRef, useEffect } from "react";

import bp from "../assets/music/bp.mp3";
import sialan from "../assets/music/sialan.mp3";
import shape from "../assets/music/shape.mp3";
import rege from "../assets/music/rege.mp3";
import nadhif from "../assets/music/nadhif.mp3";
import exo from "../assets/music/exo.mp3";

const songs = [
  { title: "As If It's Your Last", artist: "BLACKPINK", file: bp },
  { title: "The First Snow", artist: "EXO", file: exo },
  { title: "Sialan", artist: "Pamungkas", file: sialan },
  { title: "Shape of My Heart", artist: "Sting", file: shape },
  { title: "One in a Million (Reggae Cover)", artist: "Cover", file: rege },
  { title: "Kota Ini Tak Sama Tanpamu", artist: "Nadhif Basalamah", file: nadhif },
];

const experiences = [
  { num: 1, title: "Bootcamp BIT", desc: "Intensive training in AI and information technology at PT. Bit Preneur Technology" },
  { num: 2, title: "LKS AI 2024", desc: "Competed in Students Competency Competition in Artificial Intelligence at Provincial level — 11th place" },
  { num: 3, title: "Bootcamp UBIG", desc: "AI and big data skill development at PT. Universal Big Data" },
  { num: 4, title: "LKS AI 2025", desc: "Competed in Students Competency Competition in Artificial Intelligence — 1st Regency, 5th Provincial" },
  { num: 5, title: "Internship — AI Engineer", desc: "Built AI-based solutions at a software house, focusing on intelligent automation systems" },
  { num: 6, title: "Chatbot CS Project", desc: "Developed an AI-powered customer service chatbot for school information services" },
]

const hobbies = [
  { emoji: "🎤", name: "Singing", desc: "Expressing myself through voice and melody" },
  { emoji: "🎸", name: "Music", desc: "Enjoying and exploring various music genres" },
  { emoji: "🏃", name: "Light Exercise", desc: "Casual jogging to keep the body fit" },
  { emoji: "🍳", name: "Cooking", desc: "Experimenting with recipes and creating new dishes" },
]

function formatTime(s) {
  if (!s || isNaN(s)) return "0:00";
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

export default function Personality() {
  const [currentIdx, setCurrentIdx] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const updateProgress = () => {
      setCurrentTime(audio.currentTime);
      setProgress((audio.currentTime / audio.duration) * 100 || 0);
    };
    const onLoaded = () => setDuration(audio.duration);
    const onEnded = () => { setIsPlaying(false); setProgress(0); setCurrentTime(0); };
    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("ended", onEnded);
    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("ended", onEnded);
    };
  }, [currentIdx]);

  useEffect(() => {
    const audio = audioRef.current;
    if (currentIdx === null || !audio) return;
    audio.src = songs[currentIdx].file;
    audio.load();
    audio.play();
  }, [currentIdx]);

  const handlePlay = (idx) => {
    const audio = audioRef.current;
    if (currentIdx === idx) {
      if (isPlaying) { audio.pause(); setIsPlaying(false); }
      else { audio.play(); setIsPlaying(true); }
    } else {
      setCurrentIdx(idx);
      setProgress(0); setCurrentTime(0); setDuration(0);
      setIsPlaying(true);
    }
  };

  const handleSeek = (e) => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    const val = Number(e.target.value);
    audio.currentTime = (val / 100) * audio.duration;
    setProgress(val);
  };

  return (
    <div className="w-full max-w-5xl mx-auto py-8 px-4 gap-10 flex flex-col">
      <audio ref={audioRef} />

      {/* ── Header ── */}
      <div>
        <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: '#3b82f6' }}>
          FROSTSONIC
        </p>
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-extrabold" style={{ color: '#1e293b' }}>Personality</h1>
        </div>
        <p className="mt-3 text-sm" style={{ color: '#64748b' }}>
          A glimpse into my journey, taste in music, and what I enjoy outside of coding.
        </p>
      </div>

      {/* ── Experience Timeline ── */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-lg font-bold" style={{ color: '#1e293b' }}>Experience</h2>
          <div className="flex-1 h-px" style={{ backgroundColor: '#e2eaf4' }} />
        </div>

        <div className="flex flex-col">
          {experiences.map((exp, i) => (
            <div key={exp.num} className="flex gap-4 relative">
              {/* Garis vertikal */}
              {i < experiences.length - 1 && (
                <div
                  className="absolute"
                  style={{
                    left: '15px',
                    top: '34px',
                    width: '2px',
                    height: 'calc(100% - 10px)',
                    backgroundColor: '#dbeafe',
                  }}
                />
              )}

              {/* Dot */}
              <div
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mt-0.5 z-10"
                style={{ backgroundColor: '#1d4ed8', color: '#ffffff' }}
              >
                {exp.num}
              </div>

              {/* Content */}
              <div className="pb-7 flex-1">
                <p className="text-sm font-semibold" style={{ color: '#1e293b' }}>{exp.title}</p>
                <p className="text-xs mt-1" style={{ color: '#64748b' }}>{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Favorite Songs ── */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-lg font-bold" style={{ color: '#1e293b' }}>Favorite Songs</h2>
          <div className="flex-1 h-px" style={{ backgroundColor: '#e2eaf4' }} />
        </div>

        {/* Song List */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{ border: '1px solid #e2eaf4' }}
        >
          {songs.map((song, i) => (
            <div
              key={i}
              className="flex items-center gap-4 px-5 py-4 cursor-pointer transition-all duration-150"
              style={{
                backgroundColor: currentIdx === i ? '#eff6ff' : '#ffffff',
                borderBottom: i < songs.length - 1 ? '1px solid #f1f5f9' : 'none',
              }}
              onClick={() => handlePlay(i)}
              onMouseEnter={e => {
                if (currentIdx !== i) e.currentTarget.style.backgroundColor = '#f8faff'
              }}
              onMouseLeave={e => {
                if (currentIdx !== i) e.currentTarget.style.backgroundColor = '#ffffff'
              }}
            >
              {/* Nomor / Playing indicator */}
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0"
                style={{
                  backgroundColor: currentIdx === i ? '#1d4ed8' : '#f1f5f9',
                  color: currentIdx === i ? '#ffffff' : '#64748b',
                }}
              >
                {currentIdx === i && isPlaying ? '▶' : i + 1}
              </div>

              {/* Info lagu */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold truncate" style={{ color: currentIdx === i ? '#1d4ed8' : '#1e293b' }}>
                  {song.title}
                </p>
                <p className="text-xs" style={{ color: '#94a3b8' }}>{song.artist}</p>
              </div>

              {/* Play button */}
              <button
                className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-150"
                style={{
                  backgroundColor: currentIdx === i ? '#1d4ed8' : '#eff6ff',
                  color: currentIdx === i ? '#ffffff' : '#1d4ed8',
                  border: '1px solid #bfdbfe',
                }}
                onClick={e => { e.stopPropagation(); handlePlay(i); }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                {currentIdx === i && isPlaying ? '⏸' : '▶'}
              </button>
            </div>
          ))}
        </div>

        {/* Mini Player */}
        {currentIdx !== null && (
          <div
            className="mt-4 rounded-2xl p-5"
            style={{ backgroundColor: '#f8faff', border: '1.5px solid #bfdbfe' }}
          >
            <p className="text-xs font-medium mb-1" style={{ color: '#93c5fd' }}>NOW PLAYING</p>
            <p className="text-base font-bold mb-1" style={{ color: '#1d4ed8' }}>
              {songs[currentIdx].title}
            </p>
            <p className="text-xs mb-4" style={{ color: '#94a3b8' }}>{songs[currentIdx].artist}</p>

            {/* Progress bar */}
            <input
              type="range"
              min="0" max="100"
              value={progress}
              onChange={handleSeek}
              className="w-full cursor-pointer"
              style={{
                height: '4px',
                borderRadius: '2px',
                accentColor: '#1d4ed8',
              }}
            />
            <div className="flex justify-between mt-2 mb-4">
              <span className="text-xs" style={{ color: '#94a3b8' }}>{formatTime(currentTime)}</span>
              <span className="text-xs" style={{ color: '#94a3b8' }}>{formatTime(duration)}</span>
            </div>

            {/* Spotify button */}
            <a
              href="https://open.spotify.com/user/31fsodt2kyey4e7jkxav6tk5duly?si=707540e165f8440c&nd=1&dlsi=af9a0821f01b4dbb"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200"
              style={{ backgroundColor: '#1DB954', color: '#ffffff' }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
              Open My Spotify
            </a>
          </div>
        )}
      </section>

      {/* ── Hobbies ── */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-lg font-bold" style={{ color: '#1e293b' }}>Hobbies</h2>
          <div className="flex-1 h-px" style={{ backgroundColor: '#e2eaf4' }} />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {hobbies.map((h, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-5 rounded-2xl transition-all duration-200"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2eaf4',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#bfdbfe'
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(59,130,246,0.1)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#e2eaf4'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <span className="text-3xl mb-3">{h.emoji}</span>
              <p className="text-sm font-semibold mb-1" style={{ color: '#1d4ed8' }}>{h.name}</p>
              <p className="text-xs leading-relaxed" style={{ color: '#64748b' }}>{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}