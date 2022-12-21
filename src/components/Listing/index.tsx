import React, { FC } from "react";
import "./Listing.css";
interface ListingProps {
  imgSrc: string;
  title: string;
  description?: string | JSX.Element | JSX.Element[];
}

const Listing: FC<ListingProps> = ({ imgSrc, title, description }) => {
  return (
    <div className="listing">
      {imgSrc && <img src={imgSrc} alt="" />}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
};

export default Listing;
