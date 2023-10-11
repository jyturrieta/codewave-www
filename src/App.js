import React from "react";
import { Box, Typography } from "@mui/material";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Box sx={{ color:"secondary"}}>
        <Typography variant="h1" color="relaxed.main"> 
          Hello World!
        </Typography>
        <Footer/>
      </Box>
    </div>
  );
}

export default App;
