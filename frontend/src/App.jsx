import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Offer from './pages/Offer/Offer';
import Menu from './pages/Menu/Menu';
import News from './pages/News/News';
import Gallery from './pages/Gallery/Gallery';
import Contact from './pages/Contact/Contact';
import MainLayouts from './layout/MainLayouts';
import NoPage from './pages/NoPage/NoPage';
import Add from './pages/Add/Add';
import About from './pages/About/About';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayouts />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="offer" element={<Offer />} />
            <Route path="menu" element={<Menu />} />
            <Route path="news" element={<News />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="contact" element={<Contact />} />
            <Route path="add" element={<Add />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
