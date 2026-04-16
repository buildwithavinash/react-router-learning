
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Courses from './pages/Courses'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import CourseDatails from './pages/CourseDatails'

const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>

      <Route path='/courses' element={<Courses />}>
      <Route index element={<p>Select a course</p>}/>
      <Route path=':id' element={<CourseDatails />}/>
      </Route>


      <Route path='/about' element={<About />}/>
      <Route path='*' element={<NotFound />}/>
    </Routes>
    </>
  )
}

export default App