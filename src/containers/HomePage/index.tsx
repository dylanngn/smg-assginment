import React, { FC, useEffect, useMemo } from "react";
import { useQuery } from "react-query";
import { useHistory } from "react-router-dom";
import parse from "html-react-parser";

import { IListing } from "src/types/listing.type";
import { fetchListings } from "src/services/ListingService";
import Listing from "src/components/Listing";

import "./HomePage.css";

const Home: FC = () => {
  const history = useHistory();

  const { data } = useQuery<IListing[]>("listings", fetchListings);

  const listings = useMemo(
    () =>
      data?.map((l) => ({
        ...l,
        description: parse(l?.description || ""),
      })),
    [data]
  );

  const handleOnClickListing = (id: string) => {
    history.push(`/details/${id}`);
  };

  useEffect(() => {
    const unsubscribe = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unsubscribe();
    };
  }, [history]);

  return (
    <div className="homepage">
      <ul className="listings">
        {listings?.map((l, index) => (
          <li
            key={String(`${l?.id}-${index}`)}
            onClick={() => handleOnClickListing(l.id)}
          >
            <Listing
              imgSrc={l?.images?.[0] || ""}
              title={l?.title}
              description={l?.description}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
