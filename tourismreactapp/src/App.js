import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import StickyBar from "./Components/Stickybar/StickyBar";
import NavBar from "./Components/Navbar/NavBar";
import Footer from "./Components/Footer/Footer";
import TourPackage from "./Pages/Tour Package/TourPackage";
import Gallery from "./Pages/Gallery/Gallery";
import ContactUs from "./Pages/Contact us/ContactUs"


function App() {
  return (
    <BrowserRouter>
    <StickyBar />
    <NavBar /><br/><br/><br/>
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path="/tourpackage" element={<TourPackage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
      <Footer /> 
    </BrowserRouter>
  );
}

export default App;
