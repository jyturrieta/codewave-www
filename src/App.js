import React from "react";
import { Box } from "@mui/material";
import Footer from "./components/Footer";
import Nosotros from "./components/Nosotros";
import Header from "./components/Header";
import ContactForm from "./components/ContactForm.jsx"
import SliderCarousel from "./components/SliderCarousel";

function App() {
  return (
    <div className="App">
      <Box sx={{ color:"secondary"}}>
        <Header/>
        <SliderCarousel/>
        <Nosotros />
        <ContactForm/>
        <Footer/>
        
      </Box>
    </div>
  );
}

export default App;
