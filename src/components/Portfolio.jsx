import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import depatas from "../assets/depatas.png";

const Portfolio = () => {
  return (
    <>
      <Box
        id="portfolio"
        bgcolor="primary.dark"
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box sx={{ padding: "2rem" }}>
          <Typography variant="h4" align="center" color="white.main">
            PORTFOLIO
          </Typography>
        </Box>
        <Card sx={{ maxWidth: 345, margin: "auto", backgroundColor: "primary.dark"}}>
            <Box sx={{display:"flex", justifyContent:"center"}}>
          <CardMedia
            component="img"
            image={depatas}
            sx={{
              maxWidth: "235px",
              maxHeight: "235px",
              height: "235px",
              width: "235px",
              borderRadius: "100%",
            }}
          />
            </Box>
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography gutterBottom variant="h5" component="div" color="white.main">
              Proyecto 1
            </Typography>
            <Typography variant="body2" color="white.main">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
              quibusdam.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default Portfolio;
