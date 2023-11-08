import React from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import depatas from "../../assets/depatas.png";
import nawaiam from "../../assets/nawaiam.png";
import ecommerce from "../../assets/ecommerce.png";
import promogo from "../../assets/promogo.png";
import gestorcitas from "../../assets/gestorcitas.png";
import peopleconnect from "../../assets/peopleconnect.png";
import pestool from "../../assets/pestool.png";
import Carousel from "react-material-ui-carousel";


const productos = [
  {
    id: 1,
    nombre: "ACRONIS",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quibusdam.",
    imagen: depatas,
  },
  {
    id: 2,
    nombre: "NAWAIAM",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quibusdam.",
    imagen: nawaiam,
  },
  {
    id: 3,
    nombre: "eCommerce",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quibusdam.",
    imagen: ecommerce,
  },
  {
    id: 4,
    nombre: "Promo GO",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quibusdam.",
    imagen: promogo,
  },
  {
    id: 5,
    nombre: "Gestor de citas",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quibusdam.",
    imagen: gestorcitas,
  },
  {
    id: 6,
    nombre: "People Connect",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quibusdam.",
    imagen: peopleconnect,
  },
  {
    id: 7,
    nombre: "PES Tool",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quibusdam.",
    imagen: pestool,
  },
];

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
          {props.nombre}
        </Typography>
        <Typography variant="body2" color="white.main">
          {props.descripcion}
        </Typography>
        
      </CardContent>
      <CardActions sx={{display:"flex", justifyContent:"center"}}>
        <Button size="small" color="white">
          Ver más
        </Button>
      </CardActions>
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
            PRODUCTOS
          </Typography>
        </Box>
        <Box sx={{ padding: "2rem" }}>
          <Carousel
            autoPlay={true}
            animation="slide"
            indicators={true}
            navButtonsAlwaysVisible={true}
            
          >
            {productos.map((item, i) => (
              <Item key={i} nombre={item.nombre} image={item.imagen} descripcion={item.descripcion}/>
            ))}
          </Carousel>
          </Box>
      </Box>
    </>
  );
};

export default Portfolio;

