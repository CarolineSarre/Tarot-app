import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import CardList from './pages/CardList'
import DrawCards from './pages/DrawCards'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cards" element={<CardList />} />
      <Route path="/tiragem" element={<DrawCards />} />
    </Routes>
  )
}
