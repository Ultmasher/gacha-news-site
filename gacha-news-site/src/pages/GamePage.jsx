import { useParams } from 'react-router-dom'
import articles from '../data/articles'
import NewsCard from '../components/NewsCard'

function GamePage() {
  const { gameName } = useParams()

  const filteredArticles = articles.filter(
    (article) => article.slug === gameName
  )

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-20">
      <h1 className="text-4xl font-bold mb-10 capitalize">
        {gameName.replace('-', ' ')}
      </h1>

      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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

export default GamePage