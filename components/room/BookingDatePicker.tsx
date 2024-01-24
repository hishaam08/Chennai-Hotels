"use client";

import { IRoom } from "@/backend/models/room";
import { calculateDaysOfStay } from "@/helpers/helpers";
import {
  useGetBookedDatesQuery,
  useLazyCheckBookingAvailabilityQuery,
  useLazyStripeCheckoutQuery,
  useNewBookingMutation,
} from "@/redux/api/bookingApi";
import { useAppSelector } from "@/redux/hooks";
import { redirect, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-hot-toast";

interface Props {
  room: IRoom;
}

const BookingDatePicker = ({ room }: Props) => {
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  const [daysOfStay, setDaysOfStay] = useState(0);

  const router = useRouter();

  const { isAuthenticated } = useAppSelector((state) => state.auth);

  const [newBooking] = useNewBookingMutation();

  const [checkBookingAvailability, { data }] =
    useLazyCheckBookingAvailabilityQuery();

  const isAvailable = data?.isAvailable;

  const { data: { bookedDates: dates } = {} } = useGetBookedDatesQuery(
    room._id
  );
  const excludeDates = dates?.map((date: string) => new Date(date)) || [];

  const onChange = (dates: Date[]) => {
    const [checkInDate, checkOutDate] = dates;

    setCheckInDate(checkInDate);
    setCheckOutDate(checkOutDate);

    if (checkInDate && checkOutDate) {
      const days = calculateDaysOfStay(checkInDate, checkOutDate);

      setDaysOfStay(days);

      // check booking availability
      checkBookingAvailability({
        id: room._id,
        checkInDate: checkInDate.toISOString(),
        checkOutDate: checkOutDate.toISOString(),
      });
    }
  };

  const [stripeCheckout, { error, isLoading, data: checkoutData }] =
    useLazyStripeCheckoutQuery();

  useEffect(() => {
    if (error && "data" in error) {
      //@ts-ignore
      toast.error(error?.data?.errMessage);
    }

    if (checkoutData) {
      router.replace(checkoutData?.url);
    }
  }, [error, checkoutData]);

  // const bookRoom = () => {
  //   const amount = room.pricePerNight * daysOfStay;

  //   const checkoutData = {
  //     checkInDate: checkInDate.toISOString(),
  //     checkOutDate: checkOutDate.toISOString(),
  //     daysOfStay,
  //     amount,
  //   };

  //   stripeCheckout({ id: room?._id, checkoutData });
  // };

  const bookRoom = () => {
    const bookingData = {
      room: room?._id,
      checkInDate,
      checkOutDate,
      daysOfStay,
      amountPaid: room.pricePerNight * daysOfStay,
      paymentInfo: {
        id: "STRIPE_ID",
        status: "paid",
      },
    };
    newBooking(bookingData);
    router.replace("/bookings/me");
  };

  return (
    <div className="p-4 shadow booking-card">
      <p className="price-per-night">
        <b>₹{room?.pricePerNight}</b> / night
      </p>

      <hr />

      <p className="mb-3 mt5">Pick Check In & Check Out Date</p>

      <DatePicker
        className="w-100"
        selected={checkInDate}
        onChange={onChange}
        startDate={checkInDate}
        endDate={checkOutDate}
        minDate={new Date()}
        excludeDates={excludeDates}
        selectsRange
        inline
      />

      {isAvailable === true && (
        <div className="my-3 alert alert-success">
          Room is available. Book now.
        </div>
      )}
      {isAvailable === false && (
        <div className="my-3 alert alert-danger">
          Room not available. Try different dates.
        </div>
      )}

      {isAvailable && !isAuthenticated && (
        <>
          <div className="my-3 alert alert-danger">Login to book room.</div>
          <div className="my-3 alert alert-primary" role="alert">
            DEMO PURPOSE: Demo Account is available in the "Login" page
          </div>
        </>
      )}

      {isAvailable && isAuthenticated && (
        <>
          <button
            className="py-3 btn btn-danger form-btn w-100"
            onClick={bookRoom}
            disabled={isLoading}
          >
            Book - ₹{daysOfStay * room?.pricePerNight}
          </button>
          <div className="my-3 alert alert-danger" role="alert">
            Since this is a demo project, the payment facility has been
            disabled. Clicking the "Book" button will simply book the room
            without requiring any payment.
          </div>
        </>
      )}
    </div>
  );
};

export default BookingDatePicker;
