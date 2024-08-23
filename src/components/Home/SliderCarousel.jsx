import React from "react";
import banner1 from "../../assets/banner_1.png";
import banner2 from "../../assets/banner_2.png";
import banner3 from "../../assets/banner_3.png";
import Carousel from "react-bootstrap/Carousel";

const items = [
  {
    img: banner1,
    alt: "item1",
  },
  {
    img: banner2,
    alt: "item2",
  },
  {
    img: banner3,
    alt: "item3",
  },
];

const SliderCarousel = () => {
  return (
    <>
      <Carousel className="d-flex justify-content-center ">
        {items.map((item) => (
          <Carousel.Item key={item.id}>
              <img
                className="d-block "
                src={item.img}
                style={{ heigth: "auto", width: "100%", objectFit: "cover" }}
              />
            
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default SliderCarousel;
