import React from "react";
import { Box } from "@mui/material";
import Footer from "./components/Footer";
import Nosotros from "./components/Nosotros";
import Header from "./components/Header";
import ContactForm from "./components/ContactForm"
import SliderCarousel from "./components/SliderCarousel";
import Servicios from "./components/Servicios"

function App() {
  return (
    <div className="App">
      <Box sx={{ color:"secondary"}}>
        <Header/>
        <SliderCarousel/>
        <Nosotros />
        <Servicios/>
        <ContactForm/>
        <Footer/>
        
      </Box>
    </div>
  );
}

export default App;
