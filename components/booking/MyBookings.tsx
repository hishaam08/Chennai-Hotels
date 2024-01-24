"use client";

import Loader from "@/components/layout/Loader";
import { IBooking } from "@/backend/models/booking";
import Link from "next/link";
import { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";

interface Props {
  data: {
    bookings: IBooking[];
  };
}

const MyBookings = ({ data }: Props) => {
  const bookings = data?.bookings;

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
      name: "Check Out",
      selector: (row) => row.checkout,
    },
    {
      name: "Amount Paid",
      selector: (row) => row.amountpaid,
    },
    {
      name: "Actions",
      selector: (row) => row.actions,
    },
  ];

  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setLoader(false);
  }, []);

  const row: any = [];

  const getRow = () => {
    bookings.forEach((booking) => {
      // console.log(booking.amountPaid);
      const onj = {
        id: booking._id,
        idd: booking._id,
        checkin: new Date(booking?.checkInDate).toLocaleString("en-US"),
        checkout: new Date(booking?.checkOutDate).toLocaleString("en-US"),
        amountpaid: `₹${booking?.amountPaid}`,
        actions: (
          <>
            <Link href={`/bookings/${booking._id}`} className="btn btn-primary">
              {" "}
              <i className="fa fa-eye"></i>{" "}
            </Link>
            <Link
              href={`/bookings/invoice/${booking._id}`}
              className="btn btn-success ms-2"
            >
              {" "}
              <i className="fa fa-receipt"></i>{" "}
            </Link>
          </>
        ),
      };
      row.push(onj);
    });
    return row;
  };

  return (
    <>
      {/* <h1>My Bookings</h1> */}
      {loader ? (
        <Loader />
      ) : (
        <>
          <div className="container my-bookings">
            <h1 className="my-5 text-center">My Bookings</h1>
            <DataTable columns={columns} data={getRow()} pagination />
          </div>
        </>
      )}
    </>
  );
};

export default MyBookings;
