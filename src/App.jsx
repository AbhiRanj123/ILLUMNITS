import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Navbar from "./components/Shared/Navbar/Navbar.jsx";
import Contact from "./pages/Contact/contact.jsx";
import NotFound from "./pages/404/Not_found.jsx";
import Footer from "./components/Shared/Footer/Footer.jsx";
import Gallery from "./pages/Gallery/Gallery.jsx";
import EventGallery from "./pages/EventGallery/EventGallery.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/:name" element={<EventGallery />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      {/* <div className="slider"></div> */}
    </BrowserRouter>
  );
}

export default App;
