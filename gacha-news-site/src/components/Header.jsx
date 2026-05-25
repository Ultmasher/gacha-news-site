import { Link } from 'react-router-dom'
import { useState } from 'react'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur border-b border-slate-800">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent"
        >
          Gacha Drama Hub
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-slate-300">

          <Link className="hover:text-white transition" to="/">
            Home
          </Link>

          <Link className="hover:text-white transition" to="/drama">
            Drama
          </Link>

          <Link className="hover:text-white transition" to="/news">
            News
          </Link>

          <Link className="hover:text-white transition" to="/tier-lists">
            Tier Lists
          </Link>

          <Link className="hover:text-white transition" to="/games">
            Games
          </Link>

        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col gap-4 px-6 pb-6 text-slate-300 bg-slate-950">

          <Link
            onClick={() => setMenuOpen(false)}
            to="/"
          >
            Home
          </Link>

          <Link
            onClick={() => setMenuOpen(false)}
            to="/drama"
          >
            Drama
          </Link>

          <Link
            onClick={() => setMenuOpen(false)}
            to="/news"
          >
            News
          </Link>

          <Link
            onClick={() => setMenuOpen(false)}
            to="/tier-lists"
          >
            Tier Lists
          </Link>

          <Link
            onClick={() => setMenuOpen(false)}
            to="/games"
          >
            Games
          </Link>

        </nav>
      )}

    </header>
  )
}

export default Header