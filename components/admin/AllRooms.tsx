"use client";

import { IRoom } from "@/backend/models/room";
import { useDeleteRoomMutation } from "@/redux/api/roomApi";
import { MDBDataTable } from "mdbreact";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import DataTable, { TableColumn } from "react-data-table-component";
import Loader from "@/components/layout/Loader";

interface Props {
  data: {
    rooms: IRoom[];
  };
}

const AllRooms = ({ data }: Props) => {
  const rooms = data?.rooms;
  const router = useRouter();

  const [deleteRoom, { error, isSuccess }] = useDeleteRoomMutation();

  useEffect(() => {
    if (error && "data" in error) {
      //@ts-ignore
      toast.error(error?.data?.errMessage);
    }

    if (isSuccess) {
      router.refresh();
      toast.success("Room deleted");
    }
  }, [error, isSuccess]);

  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setLoader(false);
  }, []);

  const columns: TableColumn<any>[] = [
    {
      name: "Room ID",
      selector: (row) => row.idd,
    },
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Actions",
      selector: (row) => row.actions,
    },
  ];

  const row: any = [];

  const getRow = () => {
    rooms.forEach((room) => {
      const obj = {
        id: room._id,
        idd: room._id,
        name: room.name,
        actions: (
          <>
            <Link
              href={`/admin/rooms/${room._id}`}
              className="btn btn-outline-primary"
            >
              {" "}
              <i className="fa fa-pencil"></i>{" "}
            </Link>
            <Link
              href={`/admin/rooms/${room._id}/upload_images`}
              className="btn btn-outline-success ms-2"
            >
              {" "}
              <i className="fa fa-images"></i>{" "}
            </Link>
            <button
              className="btn btn-outline-danger ms-2"
              onClick={() => deleteRoomHandler(room._id)}
            >
              {" "}
              <i className="fa fa-trash"></i>{" "}
            </button>
          </>
        ),
      };
      row.push(obj);
    });
    return row;
  };

  const deleteRoomHandler = (id: string) => {
    deleteRoom(id);
  };

  return (
    <div>
      <h1 className="my-5 position-relative">
        {`${rooms?.length} Rooms`}
        <Link
          href="/admin/rooms/new"
          className="mt-0 text-white btn btn-danger position-absolute end-0 form-btn"
        >
          Create Room
        </Link>
      </h1>
      {loader ? (
        <Loader />
      ) : (
        <DataTable columns={columns} data={getRow()} pagination />
      )}
    </div>
  );
};

export default AllRooms;
