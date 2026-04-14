import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import AboutPage from "./pages/AboutPage"
import Courses from "./pages/Courses"
import HomePage from "./pages/HomePage"

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/course" element={<Courses />}/>
        <Route path="/about" element={<AboutPage />}/>
      </Routes>
    </>
  )
}

export default App