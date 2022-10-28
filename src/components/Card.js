import React from "react";
import StarRatings from "react-star-ratings";

const Card = ({ cardData }) => {
  return (
    <>
      <div className="card">
        <div className="head">
          <span>Supplier Name : {cardData.name}</span>
          <span>State ID : {cardData.stateId}</span>
        </div>
        <div className="stars">
          <StarRatings
            rating={cardData.rating}
            starRatedColor="yellow"
            numberOfStars={5}
            name="rating"
            starDimension="20px"
            starSpacing="7px"
          />
        </div>
        <span>Vehicle Make Id : {cardData.vehicleMakeId}</span>
      </div>
    </>
  );
};

export default Card;
