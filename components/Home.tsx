"use client";

import React from "react";
import RoomItem from "./room/RoomItem";
import { IRoom } from "@/backend/models/room";
import CustomPagination from "./layout/CustomPagination";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface Props {
  data: {
    success: boolean;
    resPerPage: number;
    filteredRoomsCount: number;
    rooms: IRoom[];
  };
}
const Home = ({ data }: Props) => {
  const searchParams = useSearchParams();
  const location = searchParams.get("location");

  const { rooms, resPerPage, filteredRoomsCount } = data;
  return (
    <div>
      <section id="rooms" className="container mt-5">
        <h2 className="mb-3 ml-2 stays-heading">
          {location
            ? `${filteredRoomsCount} rooms found in ${location}`
            : "All Rooms"}
        </h2>
        <Link href="/search" className="ml-2 back-to-search">
          &larr; Search
        </Link>
        <div className="mt-4 row">
          {rooms?.length === 0 ? (
            <div className="mt-5 alert alert-danger w-100">
              <b>No Rooms.</b>
            </div>
          ) : (
            rooms?.map((room) => <RoomItem key={room._id} room={room} />)
          )}
        </div>
      </section>

      <CustomPagination
        resPerPage={resPerPage}
        filteredRoomsCount={filteredRoomsCount}
      />
    </div>
  );
};

export default Home;