import articles from '../data/articles'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <aside className="bg-slate-900 p-6 rounded-2xl border border-slate-800">

      <h2 className="text-2xl font-bold mb-6">
        Trending
      </h2>

      <div className="flex flex-col gap-4">

        {articles.map((article) => (
          <Link
            key={article.id}
            to={`/article/${article.id}`}
            className="hover:text-purple-400"
          >
            {article.title}
          </Link>
        ))}

      </div>

    </aside>
  )
}

export default Sidebar