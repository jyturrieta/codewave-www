import { Box, Typography } from "@mui/material";
import React from "react";
import {
  Phone,
  Email,
  Facebook,
  Instagram,
  Twitter,
  LinkedIn,
  Place
} from "@mui/icons-material";
import logoBlanco from "../assets/codewaveBlanco.png";

function getYear() {
    return new Date().getFullYear();
}


const Footer = () => {
  return (
    <>
      <Box bgcolor="grey">
        <Box sx={{ display: "flex", flexDirection: { xs:"column", sm: "column", md: "row" }, justifyContent:"space-evenly", alignItems:"center" }}>
          <Box
            component="img"
            sx={{ margin: "2rem", maxWidth: "100%", height: "auto" }}
            src={logoBlanco}
            alt="logoBlanco"
          />
          <Box sx={{margin:"2rem", display:"flex", flexDirection:"column"}}>
            <Box sx={{ display: "flex", alignItems: "center", flexDirection:{xs:"column", sm:"column", md:"row"} }}>
              <Email sx={{ color: "white.main", fontSize: "3rem" }} />
              <Typography variant="h6" align="center" color="white.main">
                
                CODEWAVE@CODEWAVE.COM.AR
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", flexDirection:{xs:"column", sm:"column", md:"row"} }}>
              <Phone sx={{ color: "white.main", fontSize: "3rem" }} />
              <Typography variant="h6" align="center" color="white.main">
                
                +54 9 11 1234-5678
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", flexDirection:{xs:"column", sm:"column", md:"row"} }}>
              <Place sx={{ color: "white.main", fontSize: "3rem" }} />
              <Typography variant="h6" align="center" color="white.main">
                
                ORIGONE 151, HURLINGHAM
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{display: "flex", justifyContent:"space-between", alignItems:"center", margin:"1rem"}}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="body1" align="center">
          © CODEWAVE {getYear()}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Facebook sx={{  fontSize: "4rem" }} />
          <Instagram sx={{ fontSize: "4rem" }} />
          <Twitter sx={{fontSize: "4rem" }} />
        <LinkedIn sx={{ fontSize: "4rem" }} />
        </Box>
      </Box>
    </>
  );
};

export default Footer;
