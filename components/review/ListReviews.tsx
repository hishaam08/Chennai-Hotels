import { IReview } from "@/backend/models/room";
import React from "react";
import StarRatings from "react-star-ratings";

interface Props {
  reviews: IReview[];
}

const ListReviews = ({ reviews }: Props) => {
  // console.log("Reviews", reviews);
  return (
    <div className="mb-5 reviews w-100">
      <h3>{reviews?.length} Reviews</h3>
      <hr />

      {reviews?.map((review) => (
        <div className="my-3 review-card">
          <div className="row">
            <div className="col-3 col-lg-1">
              <img
                src={
                  review?.user?.avatar
                    ? review?.user?.avatar?.url
                    : "/images/default_avatar.jpg"
                }
                alt={review?.user?.name}
                width={60}
                height={60}
                className="rounded-circle"
              />
            </div>
            <div className="col-9 col-lg-11">
              <StarRatings
                rating={review?.rating}
                starRatedColor="#e61e4d"
                numberOfStars={5}
                starDimension="24px"
                starSpacing="1px"
                name="rating"
              />
              <p className="mt-1 review_user">by {review?.user?.name}</p>
              <p className="review_comment">{review?.comment}</p>
            </div>
            <hr />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListReviews;
