"use client";

import { IRoom } from "@/backend/models/room";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import StarRatings from "react-star-ratings";

interface Props {
  room: IRoom;
}

const RoomItem = ({ room }: Props) => {
  return (
    <div className="my-3 col-sm-12 col-md-6 col-lg-3 d-flex">
      <div className="p-2 card w-100">
        <Image
          className="mx-auto card-img-top"
          src={
            room?.images?.length > 0
              ? room.images[0].url
              : "/images/default_room_image.jpg"
          }
          alt={room?.name}
          height={170}
          width={100}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">
            <Link href={`/rooms/${room?._id}`}>{room?.name}</Link>
          </h5>
          <div className="mt-auto">
            <p className="mt-2 card-text">
              <b>₹{room?.pricePerNight}</b> / night
            </p>
          </div>
          <div>
            <div className="d-flex align-items-center">
              <StarRatings
                rating={room?.ratings}
                starRatedColor="#e61e4d"
                numberOfStars={5}
                starDimension="18px"
                starSpacing="1px"
                name="rating"
              />
              <span className="no-of-reviews">
                ({room?.numOfReviews} Reviews)
              </span>
            </div>
            <Link
              className="mt-3 btn view-btn w-100"
              href={`/rooms/${room?._id}`}
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomItem;
