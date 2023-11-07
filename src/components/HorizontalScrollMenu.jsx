import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CardCarousel = ({ items }) => {
  return (
    <Carousel>
      {items.map((item, index) => (
        <div key={index}>
          <img src={item.image} alt={item.title} />
          <p className="legend">{item.title}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default CardCarousel;
