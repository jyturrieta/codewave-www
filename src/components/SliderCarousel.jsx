import React, { useState } from 'react';
import imagen1 from "../assets/1.jpg";
import imagen2 from "../assets/2.png";
import imagen3 from "../assets/3.jpeg"
import Carousel from 'react-material-ui-carousel';
import { Box } from '@mui/material';


const items = [
    {
        img: imagen1,
        alt: "imagen1"
    },
    {
        img: imagen2,
        alt: "imagen2"
    },
    {
        img: imagen3,
        alt: "imagen3"
    }
]

function Item(props)
{
    return (
            <Box component="img" src={props.item.img} alt={props.item.alt} sx={{width:"100%", height:"240px"}} />
    )
}


const SliderCarousel = () => {

    return (
        <>
        <Box bgcolor="primary.main">
            <Carousel
            autoPlay={true}
            stopAutoPlayOnHover={true}
            animation="fade"
            navButtonsAlwaysVisible={true}
            indicators={true}
            duration={700}
                     
            >
                {
                    items.map( (item, i) => <Item key={i} item={item} /> )
                }
            </Carousel>
        </Box>
        </>
    );
}

export default SliderCarousel;