import React from "react";
import { connect } from "react-redux";
import jwt_decode from "jwt-decode";

import * as actionCreators from "../../../actions/actionCreators";

const RecommendCard = ({ recommended, saveRecommended }) => {
  const token = localStorage.getItem("token");
  const decoded = jwt_decode(token);

  const userRecommended = Object.assign(recommended, decoded);

  return (
    <div className="recommended-card-container">
      <p>Strain: {recommended.strain}</p>
      <p>Score: {recommended.Score}</p>
      <p>Type: {recommended.Type}</p>
      <p>THC: {recommended.THC_Percent * 100 + "%"}</p>
      <p>CBD: {recommended.CBD * 10 + "%"}</p>
      <p>Effects: {recommended.effect}</p>
      <p>Flavors: {recommended.flavor}</p>
      <p>Description: {recommended.Description1}</p>
      <p>Medical Effects: {recommended.medical_effect_plain}</p>
      <button onClick={() => saveRecommended(recommended)}>
        Save Recommendation
      </button>
    </div>
  );
};

export default connect(state => state, actionCreators)(RecommendCard);
