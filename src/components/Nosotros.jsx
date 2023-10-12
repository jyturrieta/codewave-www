import React from "react";
import { Box, Typography } from "@mui/material";


export default function Nosotros() {
  return(
      <Box id="nosotros" p={2} bgcolor="primary.main" sx={{display:"flex", justifyContent: "center", flexDirection:"column"}}>
        <Box>
          <Typography variant="h4" align="center" color="white.main">
            NOSOTROS
          </Typography>
        </Box>
        <Box p={2}>
          <Typography variant="h6" align="center" color="white.main">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
          sunt in culpa qui officia deserunt mollit anim id est laborum
          </Typography>
        </Box>
      </Box>
  )
}

