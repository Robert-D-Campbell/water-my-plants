import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../../actions/actionCreators";

const ReviewCard = ({ review, startEditReview, deleteReview }) => {
  const onEdit = e => {
    e.preventDefault();
    startEditReview(review.id);
  };
  const onDelete = e => {
    e.preventDefault();
    deleteReview(review.id);
  };

  return (
    <>
      <div className="card-container">
        <p>{review.strain}</p>
        <p>{review.Score}</p>
        <p>{review.Type}</p>
        <p>{review.THC_Percent}</p>
        <p>{review.CBD}</p>
        <p>{review.effect}</p>
        <p>{review.flavor}</p>
        <p>{review.Description1}</p>
        <p>{review.medical_effect_plain}</p>
        <p>{review.Recommendation}</p>

        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </>
  );
};
const mapStateToProps = state => state;
export default connect(mapStateToProps, actionCreators)(ReviewCard);
