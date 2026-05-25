import articles from '../data/articles'
import NewsCard from '../components/NewsCard'

function News() {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-20">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold mb-10">
          Latest News
        </h1>

        <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {articles.map((article) => (
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

    </div>
  )
}

export default News