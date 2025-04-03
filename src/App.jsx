import React from 'react'
import { Link } from 'react-router-dom'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

const App = () => {
  const particlesInit = async (main) => {
    await loadFull(main)
  }

  return (
    <div className="min-h-screen bg-[#0c0c0e] text-white flex flex-col items-center justify-center text-center relative overflow-hidden">
      <Particles
        className="absolute inset-0 z-0"
        init={particlesInit}
        options={{
          background: { color: { value: '#0c0c0e' } },
          particles: {
            color: { value: '#ffffff' },
            move: { enable: true, speed: 0.3 },
            number: { value: 50 },
            opacity: { value: 0.3 },
            size: { value: { min: 1, max: 2 } }
          }
        }}
      />
      <h1 className="text-5xl md:text-7xl font-bold z-10 mb-4 bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
        Silex Strategic Group
      </h1>
      <p className="text-gray-400 z-10 mb-8">Strategic Security. Real-World Results.</p>
      <Link to="/assessment" className="z-10 bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition">
        Start SBSS Assessment
      </Link>
    </div>
  )
}

export default App