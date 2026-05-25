import { useState } from 'react'
import { Link } from 'react-router-dom'
import NewsCard from '../components/NewsCard'
import articles from '../data/articles'
import dramas from '../data/dramas'
import LatestDrama from '../components/LatestDrama'
import TierListPreview from '../components/TierListPreview'

function Home() {
  const [search, setSearch] = useState('')
  const [selectedGame, setSelectedGame] = useState('All')

  const featuredDrama = dramas[0]

  const filteredArticles = articles.filter((article) => {
    const matchesSearch = article.title
      .toLowerCase()
      .includes(search.toLowerCase())

    const matchesGame =
      selectedGame === 'All' || article.game === selectedGame

    return matchesSearch && matchesGame
  })

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 pt-10 mb-16">
        <h2 className="text-3xl font-bold mb-6">
          🔥 Trending Drama
        </h2>

        <Link
          to={`/drama/${featuredDrama.id}`}
          className="block relative rounded-3xl overflow-hidden border border-slate-800"
        >
          <img
            src={featuredDrama.image}
            alt={featuredDrama.title}
            className="w-full h-[500px] object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />

         <div className="absolute bottom-0 p-8">

  <div className="flex items-center gap-2 mb-4">
    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>

    <span className="text-green-400 font-bold text-sm">
      LIVE DISCUSSION
    </span>
  </div>

  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">
    {featuredDrama.tag}
  </span>

            <h2 className="text-5xl font-bold mt-4 mb-4">
              {featuredDrama.title}
            </h2>

            <p className="text-slate-300 max-w-2xl">
              {featuredDrama.summary}
            </p>
          </div>
        </Link>
      </div>

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

      <div className="max-w-7xl mx-auto px-6 pb-20 grid gap-10 lg:grid-cols-4">
        <section className="lg:col-span-3 grid gap-8 md:grid-cols-2">
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

        <LatestDrama />
        <TierListPreview />
      </div>
    </div>
  )
}

export default Home