import React, { FC } from "react";
import "./Card.css";

interface ListingProps {
  imgSrc: string;
  title: string;
  description?: string;
}

const Card: FC<ListingProps> = ({ imgSrc, title, description }) => {
  return (
    <div className="card">
      {imgSrc && <img src={imgSrc} alt="" />}
      <div className="card-body">
        <h3>{title}</h3>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
};

export default Card;
