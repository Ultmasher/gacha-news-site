import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import News from './pages/News'
import Guides from './pages/Guides'
import TierLists from './pages/TierLists'
import Article from './pages/Article'

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/guides" element={<Guides />} />
        <Route path="/tier-lists" element={<TierLists />} />
        <Route path="/article/:id" element={<Article />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App