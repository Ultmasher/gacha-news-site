import { useState } from 'react'
import NewsCard from '../components/NewsCard'
import articles from '../data/articles'

function Home() {
  const [search, setSearch] = useState('')
  const [selectedGame, setSelectedGame] = useState('All')

  const filteredArticles = articles.filter((article) => {

    const matchesSearch =
      article.title.toLowerCase().includes(search.toLowerCase())

    const matchesGame =
      selectedGame === 'All' || article.game === selectedGame

    return matchesSearch && matchesGame
  })

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <section className="px-6 py-24 text-center">

        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Gacha News Hub
        </h2>

        <p className="text-slate-400 text-lg mb-8">
          Latest banners, leaks, events, guides and tier lists.
        </p>

        <input
          type="text"
          placeholder="Search articles..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="w-full max-w-md px-5 py-3 rounded-xl bg-slate-800 border border-slate-700 outline-none mb-8"
        />

        {/* Filters */}
        <div className="flex justify-center gap-4 flex-wrap">

          <button
            onClick={() => setSelectedGame('All')}
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-purple-600"
          >
            All
          </button>

          <button
            onClick={() => setSelectedGame('Genshin')}
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-purple-600"
          >
            Genshin
          </button>

          <button
            onClick={() => setSelectedGame('Honkai')}
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-purple-600"
          >
            Honkai
          </button>

          <button
            onClick={() => setSelectedGame('Wuthering Waves')}
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-purple-600"
          >
            Wuthering Waves
          </button>

        </div>

      </section>

      <section className="grid gap-8 px-6 pb-20 md:grid-cols-2 lg:grid-cols-3">

        {filteredArticles.map((article) => (
          <NewsCard
            key={article.id}
            id={article.id}
            image={article.image}
            title={article.title}
            description={article.description}
          />
        ))}

      </section>

    </div>
  )
}

export default Home