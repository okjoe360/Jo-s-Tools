import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import ShortenerPage from "./pages/ShortenerPage";
import Converter from "./pages/ConverterPage";
import Contact from "./pages/Contact";
import SearchPage from "./pages/SearchPage";
import NoPage from "./pages/NoPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="shortener" element={<ShortenerPage />} />
          <Route path="converter" element={<Converter />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<SearchPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
