import React from "react";
import { ListingCard } from ".";
import { listing } from "../helpers/data";

const data = [0, 1, 2, 3];

const ListingCardContainer = () => {
  return (
    <div className="max-w-[95%] lg:max-w-[90%] mx-auto px-2 py-4 mb-16">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-6">
        {listing?.map((listing, idx) => (
          <ListingCard listing={listing} key={idx} listingId={idx} />
        ))}
      </div>
    </div>
  );
};

export default ListingCardContainer;
