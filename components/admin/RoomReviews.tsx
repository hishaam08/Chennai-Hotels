"use client";

import { IReview } from "@/backend/models/room";
import { revalidateTag } from "@/helpers/revalidate";
import {
  useDeleteReviewMutation,
  useLazyGetRoomReviewsQuery,
} from "@/redux/api/roomApi";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

import DataTable, { TableColumn } from "react-data-table-component";
import Loader from "@/components/layout/Loader";

const columns: TableColumn<any>[] = [
  {
    name: "ID",
    selector: (row) => row.idd,
  },
  {
    name: "Rating",
    selector: (row) => row.rating,
  },
  {
    name: "Comment",
    selector: (row) => row.comment,
  },
  {
    name: "Actions",
    selector: (row) => row.actions,
  },
];

const RoomReviews = () => {
  const [roomId, setRoomId] = useState("");

  const router = useRouter();

  const [getRoomReviews, { data, error }] = useLazyGetRoomReviewsQuery();
  const reviews = data?.reviews || [];

  const [deleteReview, { isSuccess, isLoading }] = useDeleteReviewMutation();

  const getRoomReviewsHandler = () => {
    getRoomReviews(roomId);
  };

  useEffect(() => {
    if (error && "data" in error) {
      //@ts-ignore
      toast.error(error?.data?.errMessage);
    }

    if (isSuccess) {
      revalidateTag("RoomDetails");
      router.refresh();
      toast.success("Review deleted");
    }
  }, [error, isSuccess]);

  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setLoader(false);
  }, []);

  const row: any = [];

  const getRow = () => {
    reviews.forEach((review: IReview) => {
      const obj = {
        idd: review._id,
        id: review._id,
        rating: review?.rating,
        comment: review?.comment,
        actions: (
          <>
            <button
              className="mx-2 btn btn-outline-danger"
              disabled={isLoading}
              onClick={() => deleteReviewHandler(review?._id)}
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

  // const setReviews = () => {
  //   const data: { columns: any[]; rows: any[] } = {
  //     columns: [
  //       {
  //         label: "ID",
  //         field: "id",
  //         sort: "asc",
  //       },
  //       {
  //         label: "Rating",
  //         field: "rating",
  //         sort: "asc",
  //       },
  //       {
  //         label: "Comment",
  //         field: "comment",
  //         sort: "asc",
  //       },

  //       {
  //         label: "Actions",
  //         field: "actions",
  //         sort: "asc",
  //       },
  //     ],
  //     rows: [],
  //   };

  //   reviews?.forEach((review: IReview) => {
  //     data?.rows?.push({
  //       id: review._id,
  //       rating: review?.rating,
  //       comment: review?.comment,
  //       actions: (
  //         <>
  //           <button
  //             className="mx-2 btn btn-outline-danger"
  //             disabled={isLoading}
  //             onClick={() => deleteReviewHandler(review?._id)}
  //           >
  //             <i className="fa fa-trash"></i>
  //           </button>
  //         </>
  //       ),
  //     });
  //   });

  //   return data;
  // };

  const deleteReviewHandler = (id: string) => {
    deleteReview({ id, roomId });
  };

  return (
    <div>
      <div className="mt-5 row justify-content-center">
        <div className="col-6">
          <div className="form-check">
            <label htmlFor="roomId_field">Enter Room ID</label>
            <input
              type="text"
              id="roomId_field"
              className="form-control"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
            />

            <button
              className="py-2 mt-3 btn btn-danger form-btn w-100"
              onClick={getRoomReviewsHandler}
            >
              Fetch Reviews
            </button>
          </div>
        </div>
      </div>

      {reviews?.length > 0 ? (
        <DataTable columns={columns} data={getRow()} pagination />
      ) : (
        <h5 className="mt-5 text-center">No Reviews</h5>
      )}
    </div>
  );
};

export default RoomReviews;
