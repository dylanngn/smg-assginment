import React, { FC, useEffect, useMemo } from "react";
import { useQuery } from "react-query";
import { useHistory, useParams } from "react-router-dom";
import parse from "html-react-parser";

import Card from "src/components/Card";

import { fetchListings } from "src/services/ListingService";

import { IListing } from "src/types/listing.type";

import { randomPick } from "src/utils/array";
import { shorten, stripped } from "src/utils/string";

import "./DetailsPage.css";

const DetailsPage: FC = () => {
  const history = useHistory();
  const { listingId } = useParams<{ listingId: string }>();

  const { data, refetch } = useQuery<IListing[]>("listings", fetchListings, {
    enabled: false,
    onSuccess: (res) => {
      if (res?.findIndex((l: IListing) => l.id === listingId) === -1) {
        history.replace("/404");
      }
    },
  });

  const cards = useMemo(
    () =>
      randomPick(
        data?.filter((x) => x.id !== listingId && x.images?.length),
        6
      )?.map((l) => ({
        ...l,
        excerptDescription: shorten(stripped(l?.description || ""), 20),
      })) || [],
    [data, listingId]
  );

  const listing = useMemo(
    () => data?.find((l: IListing) => l.id === listingId),
    [data, listingId]
  );

  const handleOnClickCard = (id: string) => {
    history.replace(`/details/${id}`);
  };

  useEffect(() => {
    if (!listing) {
      refetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listing]);

  return (
    <div id="details" className="details">
      <div className="listingSummary">
        {listing?.images && <img src={listing?.images[0]} alt="" />}
        <h1>{listing?.title}</h1>
        <p>{parse(listing?.description || "")}</p>
      </div>
      <ul id="cards" className="cards">
        {cards.map((l, index) => {
          return (
            <li
              key={String(`${l?.id}-${index}`)}
              onClick={() => handleOnClickCard(l.id)}
            >
              <Card
                imgSrc={l?.images?.[0] || ""}
                title={l?.title}
                description={shorten(stripped(l?.description || ""), 20)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DetailsPage;
