"use client";

import { IRoom } from "@/backend/models/room";
import React, { useEffect } from "react";
import StarRatings from "react-star-ratings";
import RoomImageSlider from "./RoomImageSlider";
import RoomFeatures from "./RoomFeatures";
import BookingDatePicker from "./BookingDatePicker";
import ListReviews from "../review/ListReviews";
import NewReview from "../review/NewReview";
// import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";
// import "mapbox-gl/dist/mapbox-gl.css";

// import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
// import GoogleMapReact from "google-map-react";
// const AnyReactComponent = ({ text }: { text: string }) => <div>{text}</div>;
// import {
//   MapsComponent,
//   LayersDirective,
//   LayerDirective,
// } from "@syncfusion/ej2-react-maps";

interface Props {
  data: {
    room: IRoom;
  };
}

// mapboxgl.accessToken = process.env.MAPBOX_ACCESS_TOKEN;

const RoomDetails = ({ data }: Props) => {
  const { room } = data;
  // console.log("Room Data: ", room);s

  // useEffect(() => {
  //   const setMap = async () => {
  //     const coordinates = room?.location?.coordinates;

  //     const map = new mapboxgl.Map({
  //       container: "room-map",
  //       style: "mapbox://styles/mapbox/streets-v11",
  //       center: coordinates,
  //       zoom: 12,
  //     });

  //     // Add marker to the map
  //     new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
  //   };

  //   if (room?.location) setMap();
  // }, []);

  // if (typeof window !== "undefined") {
  //   //This code is executed in the browser
  //   console.log("window", window.innerWidth);
  // }

  return (
    <div className="container container-fluid">
      <h2 className="mt-5">{room.name}</h2>
      <p>{room.address}</p>

      <div className="mt-auto mb-3 d-flex ratings">
        <StarRatings
          rating={room?.ratings}
          starRatedColor="#e61e4d"
          numberOfStars={5}
          starDimension="22px"
          starSpacing="1px"
          name="rating"
        />
        <span className="no-of-reviews">({room?.numOfReviews} Reviews)</span>
      </div>
      <RoomImageSlider images={room?.images} />

      <div className="my-5 row">
        <div className="col-12 col-md-6 col-lg-8">
          <h3>Description</h3>
          <p>{room?.description}</p>

          <RoomFeatures room={room} />
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <BookingDatePicker room={room} />

          {/* <>
            <h4 className="my-2">Room Location:</h4>
            <div
              id="room-map"
              className="rounded shadow"
              style={{ height: 350, width: "100%" }}
            ></div>
          </> */}
        </div>
      </div>

      <NewReview roomId={room?._id} />
      <ListReviews reviews={room?.reviews} />
    </div>
  );
};

export default RoomDetails;
