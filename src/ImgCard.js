/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

const ImgCard = ({ crypto }) => {
  return (
    <>
      <img className="card-image-top" src={crypto.icon} alt={crypto.name} height="64px" width="64px" />
      <p style={{"color":"orange", fontWeight:"bold"}}>{crypto.name}</p>
      <p>Rank : {crypto.rank}</p>
      <p>Price in $ : {crypto.price}</p>
      <p>marketCap: {crypto.marketCap}</p>
    </>
  );
};

export default ImgCard;
