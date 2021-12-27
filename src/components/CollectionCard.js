import React from "react";
import "./CollectionCard.css";
/* import NftImage from "../assets/5.jpg"; */
import wethImage from "../assets/weth.png";

const CollectionCard = ({ id, name, traits, image }) => {
  return (
    <div className="collectionCard">
      <img src={image} alt="" />
      <div className="details">
        <div className="name">
          {name} <div className="id">.#{id}</div>
        </div>
        <div className="priceContainer">
          <img src={wethImage} alt="" className="wethImage" />
          <div className="price">{traits[0].value}</div>
          {/* <div className="price">{traits[0]?.value}</div> */}
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;

// id, name, traits, image
