import React from "react";
import { Box, Typography } from "@mui/material";
import Footer from "./components/Footer";
import Nosotros from "./components/Nosotros";

import ContactForm from "./components/ContactForm.jsx"

function App() {
  return (
    <div className="App">
      <Box sx={{ color:"secondary"}}>
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
