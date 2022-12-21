import { IResponse } from "src/types/api.type";
import { IListing } from "src/types/listing.type";
import { BASE_URL } from "../constants/url";

export const fetchListings = async () => {
  const res = await fetch(`${BASE_URL}/listings`);
  const data: IResponse<IListing[]> = await res.json();
  return data.data;
};
