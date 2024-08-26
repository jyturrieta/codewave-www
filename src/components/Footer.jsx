import { Box, Typography, Button } from "@mui/material";
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
      <Box sx={{
        backgroundColor: "#010101"
      }}>
        <Box sx={{ display: "flex", flexDirection: { xs:"column", sm: "column", md: "row" }, justifyContent:"space-evenly", alignItems:"center" }}>
          <Box
            component="img"
            sx={{ margin: "1rem", maxWidth:{xs:"70%", sm:"30%"}, height: "auto" }}
            src={logoBlanco}
            alt="logoBlanco"
          />
          <Box sx={{margin:"2rem", display:"flex", flexDirection:"column"}}>
            <Box sx={{paddingBottom:2, display: "flex", alignItems: "center", flexDirection:{xs:"column", sm:"column", md:"row"} }}>
              <Email sx={{ color: "white.main", fontSize: "3rem" }} />
              <Typography  variant="h6" align="center" color="white.main" sx={{paddingLeft:{sm:"0.5rem"}}}>
                CODEWAVE@UNAHUR.EDU.AR
              </Typography>
            </Box>
            <Box sx={{paddingBottom:2, display: "flex", alignItems: "center", flexDirection:{xs:"column", sm:"column", md:"row"} }}>
              <Phone sx={{ color: "white.main", fontSize: "3rem" }} />
              <Typography variant="h6" align="center" color="white.main" sx={{paddingLeft:{sm:"0.5rem"}}}>
                
                +54 9 11 1234-56711
              </Typography>
            </Box>
            <Box sx={{paddingBottom:2, display: "flex", alignItems: "center", flexDirection:{xs:"column", sm:"column", md:"row"} }}>
              <Place sx={{ color: "white.main", fontSize: "3rem" }} />
              <Typography  variant="h6" align="center" color="white.main" sx={{paddingLeft:{sm:"0.5rem"}}}>
                
                AUSEBIONE 8, HURLINGHAM
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{display: "flex", justifyContent:"space-between", alignItems:"center"}}>
        <Box sx={{ display: "flex", justifyContent: "center", padding:"2" }}>
          <Typography variant="body1" align="center">
          © CODEWAVE {getYear()}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center"}}>
          <Button color="black" variant="text" target="_blank" href="https://www.facebook.com/codewavear">
            <Facebook sx={{fontSize:"3rem"}}/>
          </Button>
          <Button color="black"  variant="text" target="_blank" href="https://www.instagram.com/codewavear/">
            <Instagram sx={{fontSize:"3rem"}}/>
          </Button>
          <Button color="black" variant="text" target="_blank" href="https://twitter.com/codewavear">
            <Twitter sx={{fontSize:"3rem"}}/>
          </Button>
          <Button color="black" variant="text" target="_blank" href="">
            <LinkedIn sx={{fontSize:"3rem"}}/>
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
