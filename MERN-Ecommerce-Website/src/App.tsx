import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { lazy } from "react"


const Home = lazy(() => import("./pages/Home"))
const Search = lazy(() => import("./pages/Search"))
const Cart = lazy(() => import("./pages/Cart"))

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </Router>
  )
}

export default App
