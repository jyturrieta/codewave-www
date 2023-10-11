import { Box, Typography } from "@mui/material";
import React from "react";
import {
  Phone,
  Email,
  Facebook,
  Instagram,
  Twitter,
  Place
} from "@mui/icons-material";
import logoBlanco from "../assets/codewaveBlanco.png";

const Footer = () => {
  return (
    <>
      <Box bgcolor="grey">
        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent:"space-evenly", alignItems:"center" }}>
          <Box
            component="img"
            sx={{ margin: "2rem", maxWidth: "100%", height: "auto" }}
            src={logoBlanco}
            alt="logoBlanco"
          />
          <Box sx={{margin:"2rem", display:"flex", flexDirection:"column"}}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Email sx={{ color: "white.main", fontSize: "3rem" }} />
              <Typography variant="h6" align="center" color="white.main">
                
                CODEWAVE@CODEWAVE.COM.AR
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Phone sx={{ color: "white.main", fontSize: "3rem" }} />
              <Typography variant="h6" align="center" color="white.main">
                
                +54 9 11 1234-5678
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Place sx={{ color: "white.main", fontSize: "3rem" }} />
              <Typography variant="h6" align="center" color="white.main">
                
                ORIGONE 151, HURLINGHAM
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
