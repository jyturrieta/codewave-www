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
import Carousel from "react-material-ui-carousel";


function Item(props) {
  return (
    <Card sx={{ maxWidth: 345, margin: "auto", backgroundColor: "primary.main" }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CardMedia
          component="img"
          image={props.image}
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
  );
}


const Portfolio = () => {

  
  


  return (
    <>
      <Box
        id="portfolio"
        bgcolor="primary.main"
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
        <Box sx={{ padding: "2rem" }}>
          <Carousel
            autoPlay={false}
            animation="slide"
            indicators={true}
            navButtonsAlwaysVisible={true}
          
          >
            <Item image={depatas} />
            <Item image={depatas} />
            <Item image={depatas} />
            <Item image={depatas} />
            <Item image={depatas} />
            <Item image={depatas} />
          </Carousel>
          </Box>
      </Box>
    </>
  );
};

export default Portfolio;
