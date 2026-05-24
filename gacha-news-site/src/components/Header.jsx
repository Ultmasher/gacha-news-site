import { Link } from 'react-router-dom'
import { useState } from 'react'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur border-b border-slate-800">

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link
          to="/"
          className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
        >
          Gacha News Hub
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-slate-300">
          <Link className="hover:text-white" to="/">Home</Link>

          <Link className="hover:text-white" to="/news">
            News
          </Link>

          <Link className="hover:text-white" to="/guides">
            Guides
          </Link>

          <Link className="hover:text-white" to="/tier-lists">
            Tier Lists
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
        <nav className="md:hidden flex flex-col px-6 pb-6 gap-4 text-slate-300">

          <Link
            onClick={() => setMenuOpen(false)}
            to="/"
          >
            Home
          </Link>

          <Link
            onClick={() => setMenuOpen(false)}
            to="/news"
          >
            News
          </Link>

          <Link
            onClick={() => setMenuOpen(false)}
            to="/guides"
          >
            Guides
          </Link>

          <Link
            onClick={() => setMenuOpen(false)}
            to="/tier-lists"
          >
            Tier Lists
          </Link>

        </nav>
      )}

    </header>
  )
}

export default Header