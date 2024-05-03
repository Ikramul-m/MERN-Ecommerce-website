import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { lazy, Suspense } from "react"
import Loader from "./Components/loader"

const Home = lazy(() => import("./pages/Home"))
const Search = lazy(() => import("./pages/Search"))
const Cart = lazy(() => import("./pages/Cart"))


const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </Suspense>

    </Router>
  )
}

export default App
