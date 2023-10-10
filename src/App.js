import React from "react";
import { Box, Typography } from "@mui/material";
import Footer from "./components/Footer";
import Nosotros from "./components/Nosotros";
import Header from "./components/Header";

import ContactForm from "./components/ContactForm.jsx"

function App() {
  return (
    <div className="App">
      <Box sx={{ color:"secondary"}}>
        <Header/>
        <Typography variant="h1" color="relaxed.main"> 
          Hello World!
        </Typography>
        <Footer/>
        <ContactForm/>
        <Nosotros />
      </Box>
    </div>
  );
}

export default App;
