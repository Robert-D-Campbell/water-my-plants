import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import * as actionCreators from "../../../actions/actionCreators";

const ReviewForm = ({
  errors,
  touched,
  values,
  status,
  addReview,
  editReview,
  setValues,
  resetForm,
  reviewList,
  reviewToEdit
}) => {
  const handleSubmit = e => {
    e.preventDefault();
    if (reviewToEdit > 0) {
      editReview(values);
    } else {
      addReview(values);
    }
    resetForm();
  };

  useEffect(() => {
    if (reviewToEdit > 0) {
      setValues(reviewList.find(review => review.id === reviewToEdit));
    }
  }, [reviewToEdit, reviewList, setValues]);

  return (
    <div className="review-form">
      <Form onSubmit={handleSubmit}>
        <label className="review-label">Strain:</label>
        <Field
          className="review-field"
          type="text"
          name="strain"
          placeholder="Strain"
        />
        {touched.strain && errors.strain && (
          <span className="error">{errors.strain}</span>
        )}
        <label className="review-label">Type:</label>
        <Field
          className="review-field"
          type="text"
          name="Type"
          placeholder="Type"
        />
        {touched.type && errors.type && (
          <span className="error">{errors.type}</span>
        )}
        <label className="review-label">Score:</label>
        <Field
          className="review-field"
          type="text"
          name="Score"
          placeholder="Score"
        />
        {touched.score && errors.score && (
          <span className="error">{errors.score}</span>
        )}
        <label className="review-label">THC %:</label>
        <Field
          className="review-field"
          type="text"
          name="THC_Percent"
          placeholder="THC Percent"
        />
        {touched.THC_Percent && errors.THC_Percent && (
          <span className="error">{errors.THC_Percent}</span>
        )}
        <label className="review-label">CBD %:</label>
        <Field
          className="review-field"
          type="text"
          name="CBD"
          placeholder="CBD Percent"
        />
        {touched.CBD && errors.CBD && (
          <span className="error">{errors.CBD}</span>
        )}
        <label className="review-label">Medical Effects:</label>
        <Field
          className="review-field"
          type="text"
          name="medical_effect_plain"
          placeholder="Medical Effects"
        />
        {touched.medical_effect_plain && errors.medical_effect_plain && (
          <span className="error">{errors.medical_effect_plain}</span>
        )}
        <label className="review-label">effect:</label>
        <Field
          className="review-field"
          type="text"
          name="effect"
          placeholder="Effect"
        />
        {touched.effect && errors.effect && (
          <span className="error">{errors.effect}</span>
        )}
        <label className="review-label">Flavor:</label>
        <Field
          className="review-field"
          type="text"
          name="flavor"
          placeholder="flavor"
        />
        {touched.flavor && errors.flavor && (
          <span className="error">{errors.flavor}</span>
        )}
        <label className="review-label">Recommendation:</label>
        <Field
          className="review-field"
          type="text"
          name="Recommendation"
          placeholder="Recommendation"
        />
        {touched.Recommendation && errors.Recommendation && (
          <span className="error">{errors.Recommendation}</span>
        )}
        <label className="review-label">Description:</label>
        <Field
          className="review-field"
          type="text"
          name="Description1"
          placeholder="Description"
        />
        {touched.Description1 && errors.Description1 && (
          <span className="error">{errors.Description1}</span>
        )}
        <button>Submit</button>
      </Form>
    </div>
  );
};

const FormikReviewForm = withFormik({
  mapPropsToValues({
    strain,
    Score,
    Type,
    THC_Percent,
    CBD,
    effect,
    flavor,
    Description1,
    medical_effect_plain,
    Recommendation
  }) {
    return {
      strain: strain || "",
      Score: Score || "",
      Type: Type || "",
      THC_Percent: THC_Percent || "",
      CBD: CBD || "",
      effect: effect || "",
      flavor: flavor || "",
      Description1: Description1 || "",
      medical_effect_plain: medical_effect_plain || ""
    };
  },
  validationSchema: Yup.object().shape({
    strain: Yup.string(),
    Score: Yup.string(),
    Type: Yup.string(),
    THC_Percent: Yup.string(),
    CBD: Yup.string(),
    effect: Yup.string(),
    flavor: Yup.string(),
    Description1: Yup.string(),
    medical_effect_plain: Yup.string(),
    Recommendation: Yup.string()
  })
})(ReviewForm);

const mapStateToProps = state => state;

export default connect(mapStateToProps, actionCreators)(FormikReviewForm);
