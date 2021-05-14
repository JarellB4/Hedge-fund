import React from "react";
import "./style.css";

const ContractorImageCarousel = (props) => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        {props.images.map((image, index) => (
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={index}
            class={index === 0 ? "active" : ""}
            aria-current="true"
            aria-label="Slide {index}"
          ></button>
        ))}
      </div>

      <div class="carousel-inner">
        {props.images.map((image, index) => (
          <div className={"carousel-item " + (index === 0 ? 'active' : '' )}>
            <img src={image.image} class="d-block w-100" alt={index} />
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default ContractorImageCarousel;
