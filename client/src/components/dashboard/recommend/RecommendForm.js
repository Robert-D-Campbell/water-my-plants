import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../../actions/actionCreators";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";

const RecommendForm = ({
  errors,
  touched,
  values,
  status,
  history,
  postRecForm
}) => {
  const handleSubmit = e => {
    e.preventDefault();
    postRecForm(values, history);
  };

  return (
    <div className="form-container">
      <Form className="recommendation-form" onSubmit={handleSubmit}>
        <label className="recommend-label"> Family: </label>
        <Field component="select" name="family" placeholder="Family">
          <option>Please Select desired type of strain</option>
          <option value="Indica">Indica</option>
          <option value="Sativa">Sativa</option>
          <option value="Hybrid">Hybrid</option>
        </Field>
        {touched.family && errors.family && (
          <span className="error"> {errors.family} </span>
        )}
        <label className="recommend-label"> Effects: </label>
        <Field component="select" name="effects" placeholder="Effects">
          <option>Please Select desired effects</option>
          <option value="Aroused">Aroused</option>
          <option value="Body High">Body High</option>
          <option value="Cerebral">Cerebral</option>
          <option value="Energetic">Energetic</option>
          <option value="Euphoric">Euphoric</option>
          <option value="Focused">Focused</option>
          <option value="Giggly">Giggly</option>
          <option value="Hungry">Hungry</option>
          <option value="Long Lasting">Long Lasting</option>
          <option value="Mellow">Mellow</option>
          <option value="Motivation">Motivation</option>
          <option value="Relaxed">Relaxed</option>
          <option value="Sleepy">Sleepy</option>
          <option value="Sociable">Sociable</option>
          <option value="Talkative">Talkative</option>
          <option value="Tingly">Tingly</option>
          <option value="Uplifted">Uplifted</option>
        </Field>
        {touched.effects && errors.effects && (
          <span className="error"> {errors.effects} </span>
        )}
        <label className="recommend-label"> Terpenes: </label>
        <Field component="select" name="terpenes" placeholder="Terpenes">
          <option>Please Select desired flavors</option>
          <option value="Chemical">Chemical</option>
          <option value="Fruity">Fruity</option>
          <option value="Berry">Berry</option>
          <option value="Tropical">Tropical</option>
          <option value="Citrus">Citrus</option>
          <option value="Sweet">Sweet</option>
          <option value="Dairy">Dairy</option>
          <option value="Earthy">Earthy</option>
          <option value="Flowery">Flowery</option>
          <option value="Minty">Minty</option>
          <option value="Nutty">Nutty</option>
          <option value="Spicy">Spicy</option>
          <option value="Other">Other</option>
        </Field>
        {touched.terpenes && errors.terpenes && (
          <span className="error"> {errors.terpenes} </span>
        )}
        <label className="recommend-label"> Medical Benefits: </label>
        <Field
          component="select"
          name="benefits"
          placeholder="Medical Benefits"
        >
          <option>Please Select your desired Medical Benefits</option>
          <option value="Analgesic (Pain relief)">
            Analgesic (Pain relief)
          </option>
          <option value="Anorectic (Weight loss)">
            Anorectic (Weight loss)
          </option>
          <option value="Antibacterial (Inhibits bacteria)">
            Antibacterial (Inhibits bacteria)
          </option>
          <option value="Antidiabetic (Lowers blood sugar)">
            Antidiabetic (Lowers blood sugar)
          </option>
          <option value="Antidepressant (Reduces depression)">
            Antidepressant (Reduces depression)
          </option>
          <option value="Antiemetic (Reduces nausea and vomiting)">
            Antiemetic (Reduces nausea and vomiting)
          </option>
          <option value="Antiepileptic (Inhibits seizures)">
            Antiepileptic (Inhibits seizures)
          </option>
          <option value="Antifungal (Inhibits fungal growth)">
            Antifungal (Inhibits fungal growth)
          </option>
          <option value="Anti inflammatory (Reduces inflammation)">
            Anti inflammatory (Reduces inflammation)
          </option>
          <option value="Anti insomnia (Aids sleep)">
            Anti insomnia (Aids sleep)
          </option>
          <option value="Anti ischemic (Reduces artery risk blockage)">
            Anti ischemic (Reduces artery risk blockage)
          </option>
          <option value="Antiproliferative (Inhibits cancer growth)">
            Antiproliferative (Inhibits cancer growth)
          </option>
          <option value="Antipsoriatic (Inhibits Psoriasis)">
            Antipsoriatic (Inhibits Psoriasis)
          </option>
          <option value="Antipsychotic (Tranquilizing)">
            Antipsychotic (Tranquilizing)
          </option>
          <option value="Antispasmodic (Suppresses muscle spasms)">
            Antispasmodic (Suppresses muscle spasms)
          </option>
          <option value="Anxiolytic (Relieves anxiety)">
            Anxiolytic (Relieves anxiety)
          </option>
          <option value="Appetite stimulant (Increases appetite)">
            Appetite stimulant (Increases appetite)
          </option>
          <option value="Bone stimulant (Stimulates bone growth)">
            Bone stimulant (Stimulates bone growth)
          </option>
          <option value="Gastro oesophageal reflux (Reduces acid reflux)">
            Gastro oesophageal reflux (Reduces acid reflux)
          </option>
          <option value="Immunostimulant (Immune response stimulant)">
            Immunostimulant (Immune response stimulant)
          </option>
          <option value="Immunosuppressive (Immune response reduction)">
            Immunosuppressive (Immune response reduction)
          </option>
          <option value="Intestinal anti prokinetic (Reduces small intestine contractions)">
            Intestinal anti prokinetic (Reduces small intestine contractions)
          </option>
          <option value="Neuroprotectant (Slows nervous system degeneration)">
            Neuroprotectant (Slows nervous system degeneration)
          </option>
          <option value="Vasorelaxant (Reduces vascular tension)">
            Vasorelaxant (Reduces vascular tension)
          </option>
        </Field>
        {touched.benefits && errors.benefits && (
          <span className="error"> {errors.benefits} </span>
        )}
        <label className="recommend-label"> Extra Information: </label>
        <Field
          as="textarea"
          rows="10"
          cols="40"
          type="text"
          name="info"
          placeholder="Extra Information"
        />
        <button>Submit</button>
      </Form>
    </div>
  );
};

const FormikRecommendForm = withFormik({
  mapPropsToValues({ family, effects, terpenes, benefits, info }) {
    return {
      family: family || "",
      effects: effects || "",
      terpenes: terpenes || "",
      benefits: benefits || "",
      info: info || ""
    };
  },

  validationSchema: Yup.object().shape({
    family: Yup.string().oneOf(["Indica", "Sativa", "Hybrid", "Skunk"]),
    effects: Yup.string().oneOf([
      "Aroused",
      "Body High",
      "Cerebral",
      "Creative",
      "Energetic",
      "Euphoric",
      "Focused",
      "Giggly",
      "Hungry",
      "Long Lasting",
      "Mellow",
      "Motivation",
      "Relaxed",
      "Sleepy",
      "Sociable",
      "Talkative",
      "Tingly",
      "Uplifted"
    ]),
    terpenes: Yup.string().oneOf([
      "Chemical",
      "Fruity",
      "Berry",
      "Tropical",
      "Citrus",
      "Sweet",
      "Dairy",
      "Earthy",
      "Flowery",
      "Minty",
      "Nutty",
      "Spicy",
      "Other"
    ]),
    benefits: Yup.string().oneOf([
      "Analgesic (Pain relief)",
      "Anorectic (Weight loss)",
      "Antibacterial (Inhibits bacteria)",
      "Antidiabetic (Lowers blood sugar)",
      "Antidepressant (Reduces depression)",
      "Antiemetic (Reduces nausea and vomiting)",
      "Antiepileptic (Inhibits seizures)",
      "Antifungal (Inhibits fungal growth)",
      "Anti inflammatory (Reduces inflammation)",
      "Anti insomnia (Aids sleep)",
      "Anti ischemic (Reduces artery risk blockage)",
      "Antiproliferative (Inhibits cancer growth)",
      "Antipsoriatic (Inhibits Psoriasis)",
      "Antipsychotic (Tranquilizing)",
      "Antispasmodic (Suppresses muscle spasms)",
      "Anxiolytic (Relieves anxiety)",
      "Appetite stimulant (Increases appetite)",
      "Bone stimulant (Stimulates bone growth)",
      "Gastro oesophageal reflux (Reduces acid reflux)",
      "Immunostimulant (Immune response stimulant)",
      "Immunosuppressive (Immune response reduction)",
      "Intestinal anti prokinetic (Reduces small intestine contractions)",
      "Neuroprotectant (Slows nervous system degeneration)",
      "Vasorelaxant (Reduces vascular tension)"
    ]),
    info: Yup.string()
  })
})(RecommendForm);

export default connect(state => state, actionCreators)(FormikRecommendForm);
