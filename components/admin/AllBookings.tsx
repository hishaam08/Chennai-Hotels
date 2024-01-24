"use client";

import { IBooking } from "@/backend/models/booking";
import { useDeleteBookingMutation } from "@/redux/api/bookingApi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

import React, { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import Loader from "@/components/layout/Loader";

interface Props {
  data: {
    bookings: IBooking[];
  };
}

const columns: TableColumn<any>[] = [
  {
    name: "ID",
    selector: (row) => row.idd,
  },
  {
    name: "Check In",
    selector: (row) => row.checkin,
  },
  {
    name: "Actions",
    selector: (row) => row.actions,
  },
];

const AllBookings = ({ data }: Props) => {
  const bookings = data?.bookings;

  const router = useRouter();

  const [deleteBooking, { error, isLoading, isSuccess }] =
    useDeleteBookingMutation();

  useEffect(() => {
    if (error && "data" in error) {
      //@ts-ignore
      toast.error(error?.data?.errMessage);
    }

    if (isSuccess) {
      router.refresh();
      toast.success("Booking deleted");
    }
  }, [error, isSuccess]);

  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setLoader(false);
  }, []);

  const row: any = [];

  const getRow = () => {
    bookings.forEach((booking) => {
      const obj = {
        id: booking._id,
        idd: booking._id,
        checkin: new Date(booking?.checkInDate).toLocaleString("en-US"),
        actions: (
          <>
            <Link
              href={`/bookings/${booking._id}`}
              className="btn btn-outline-primary"
            >
              {" "}
              <i className="fa fa-eye"></i>{" "}
            </Link>
            <Link
              href={`/bookings/invoice/${booking._id}`}
              className="btn btn-outline-success ms-2"
            >
              {" "}
              <i className="fa fa-receipt"></i>{" "}
            </Link>
            <button
              className="mx-2 btn btn-outline-danger"
              disabled={isLoading}
              onClick={() => deleteBookingHandler(booking?._id)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </>
        ),
      };
      row.push(obj);
    });
    return row;
  };

  const deleteBookingHandler = (id: string) => {
    deleteBooking(id);
  };

  return (
    <div className="container">
      <h1 className="my-5">{bookings?.length} Bookings</h1>
      {loader ? (
        <Loader />
      ) : (
        <DataTable columns={columns} data={getRow()} pagination />
      )}
    </div>
  );
};

export default AllBookings;
