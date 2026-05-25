import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Layout from './components/Layout'

import Home from './pages/Home'
import News from './pages/News'
import Guides from './pages/Guides'
import TierLists from './pages/TierLists'
import Article from './pages/Article'
import GamePage from './pages/GamePage'
import Games from './pages/Games'
import Drama from './pages/Drama'
import DramaArticle from './pages/DramaArticle'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/tier-lists" element={<TierLists />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="/games" element={<Games />} />
          <Route path="/games/:gameName" element={<GamePage />} />
          <Route path="/drama" element={<Drama />} />
          <Route path="/drama/:id" element={<DramaArticle />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App