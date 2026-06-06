import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 text-white p-6 selection:text-slate-900">
      <div className="text-center space-y-4 max-w-md p-8 rounded-2xl bg-slate-900/50 border border-slate-800 shadow-2xl backdrop-blur-md">
        <div className="inline-flex items-center justify-center p-3 bg-cyan-500/10 rounded-xl text-cyan-400 mb-2 animate-pulse">
          Frontend Connected
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          ALX Creative Studio
        </h1>
        <p className="text-slate-400 text-sm leading-relaxed">
          Sihir Tailwind CSS udah rill 100% aktif,Sekarang bisa bikin UI premium tinggal panggil class instan doang
        </p>
        <button className="w-full py-3 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 active:scale-95">
          Gas Bantai Project!
        </button>
      </div>
    </div>
  )
}

export default App
