import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../../actions/actionCreators";

import RecommendForm from "./RecommendForm";
import RecommendCard from "./RecommendCard";

export const RecommendList = ({ recommendList }) => {
  return (
    <div className="recommend-container">
      <RecommendForm />
      {recommendList.map(recommended => (
        <RecommendCard key={recommended.id} recommended={recommended} />
      ))}
    </div>
  );
};

export default connect(state => state, actionCreators)(RecommendList);
