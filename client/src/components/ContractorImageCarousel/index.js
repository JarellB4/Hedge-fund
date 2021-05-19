import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./style.css";

const ContractorImageCarousel = (props) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      {props.images && props.images.length > 0 ? (
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {props.images.map((image, index) => (
            <Carousel.Item style={{ height: "300px" }} interval={1000000} key={index}>
              <img
                // className="d-block w-300"
                className="d-inline w-100"
                src={image.image}
                alt={index}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      ) : null}
    </div>
  );
};

export default ContractorImageCarousel;
