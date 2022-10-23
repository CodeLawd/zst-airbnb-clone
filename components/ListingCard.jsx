import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { StarIcon, HeartIcon } from "@heroicons/react/solid";

const ListingCard = ({ listing: { images, name, dateAvailable, rating, cost, host }, listingId }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [like, setLike] = useState(false);

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const next = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="mb-5 group cursor-pointer">
      <div className="w-full h-[180px] md:h-[260px] relative overflow-hidden flex rounded-lg">
        {images.map((img, i) => (
          <img
            loading="lazy"
            key={i}
            src={img}
            alt={img}
            className="object-cover min-w-full w-full h-full transition-all duration-700 select-none"
            style={{ transform: `translate(-${currentIndex * 100}%)` }}
          />
        ))}
        {currentIndex > 0 && (
          <div
            className="hidden group-hover:flex absolute left-3 md:left-5 -translate-y-[50%] top-[50%] w-8 h-8  justify-center items-center rounded-full bg-white group-:scale-110 shadow-lg text-black cursor-pointer select-none active:scale-90 transition-all duration-200"
            onClick={prev}
          >
            <ChevronLeftIcon className="w-4" />
          </div>
        )}
        {currentIndex < images.length - 1 && (
          <div
            className="hidden group-hover:flex absolute right-3 md:right-5 -translate-y-[50%] top-[50%] w-8 h-8  justify-center items-center rounded-full bg-white hover:scale-110 shadow-lg text-black cursor-pointer select-none active:scale-90 transition-all duration-200"
            onClick={next}
          >
            <ChevronRightIcon className="w-4" />
          </div>
        )}

        <div className="absolute flex gap-1 -translate-x-[50%] left-[50%] bottom-4">
          {images.map((img, i) => (
            <div className={`${currentIndex !== i && "bg-opacity-50"} bg-white w-2 h-2 rounded-full `} key={i} />
          ))}
        </div>

        <div
          className={`${like ? "text-red-600" : "text-black opacity-60"} absolute top-3 right-4 `}
          onClick={() => setLike(!like)}
        >
          <HeartIcon className="w-8" />
        </div>
      </div>

      <div className="">
        <div className="text-black flex justify-between items-center">
          <h3 className="font-semibold text-sm mt-3">{name}</h3>
          <p className="flex items-center gap-1 text-sm">
            <StarIcon className="w-4" />
            <span className="font-thin">{rating}</span>
          </p>
        </div>
        <p className="text-gray-500 font-thin text-sm">Hosted by {host}</p>
        <p className="text-gray-500 font-thin text-sm">{dateAvailable}</p>
        <p className="text-sm mt-2">
          <span className="font-semibold"> ${cost} </span> night
        </p>
      </div>
    </div>
  );
};

export default ListingCard;
