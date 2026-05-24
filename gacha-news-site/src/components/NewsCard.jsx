import { Link } from 'react-router-dom'

function NewsCard(props) {
  return (
    <Link to={`/article/${props.id}`}>

      <div className="bg-slate-900 rounded-2xl overflow-hidden hover:scale-105 transition duration-300 border border-slate-800">

        <img
          src={props.image}
          alt=""
          className="w-full h-52 object-cover"
        />

        <div className="p-5">

          <h3 className="text-xl font-bold mb-3">
            {props.title}
          </h3>

          <p className="text-slate-400">
            {props.description}
          </p>

        </div>

      </div>

    </Link>
  )
}

export default NewsCard