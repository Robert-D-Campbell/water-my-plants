import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getReviewList } from "../../../actions/actionCreators";
import ReviewCard from "./ReviewCard";
import ReviewForm from "./ReviewForm";

export const ReviewList = ({
  getReviewList,
  reviewList,
  editingPlantId,
  reviewToEdit,
  setValues
}) => {
  useEffect(() => {
    getReviewList();
  }, [getReviewList]);

  return (
    <div className="review-list-container">
      <ReviewForm />
      {reviewList.map(review => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
};
const mapStateToProps = state => state;

export default connect(mapStateToProps, { getReviewList })(ReviewList);
