import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import * as actionCreators from "../state/actionCreators";

import ProfileCard from "./ProfileCard";
import PlantCard from "./PlantCard";
import wall from "../assets/wall.jpeg";

export const PlantList = ({
  errors,
  plantsList,
  touched,
  values,
  status,
  addPlantToList,
  editPlant,
  getPlantList,
  setValues,
  resetForm,
  editingPlantId
}) => {
  const handleSubmit = e => {
    e.preventDefault();
    if(editingPlantId > 0) {
      editPlant(values);
    } else {
      addPlantToList(values);
    }
    resetForm();
  };

  useEffect(() => {
    getPlantList();
  }, []);
  useEffect(() => {
    if(editingPlantId > 0) {
      setValues(plantsList.find(plant => plant.id === editingPlantId));
    }
  }, [editingPlantId]);
 
  if (!plantsList) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <ProfileStyle className="profile-form-wrapper">
        <ProfileCard />
        <PlantFormStyle className="add-plant-container">
          <h1>Add your plants here!</h1>
          <Form className="form plant-form" onSubmit={handleSubmit}>
            <label>Nick Name:</label>
            <Field className='form-input' type="text" name="nickname" placeholder="Nick Name" />
            {touched.nickname && errors.nickname && (
              <span className="error">{errors.nickname}</span>
            )}
            <label>Species:</label>
            <Field className='form-input' type="text" name="species" placeholder="Species" />
            {touched.species && errors.species && (
              <span className="error">{errors.species}</span>
            )}
            <label>H2O Frequency:</label>
            <Field
              className='form-input'
              type="text"
              name="h2oFrequency"
              placeholder="H20 Frequency"
            />
            {touched.h2oFrequency && errors.h2oFrequency && (
              <span className="error">{errors.h2oFrequency}</span>
            )}
            <button className="add-btn" type="submit">
              ADD PLANT
            </button>
          </Form>
        </PlantFormStyle>
      </ProfileStyle>
      <PlantListStyle className="plant-list-container">
        <h1>Dont forget to water your plants!</h1>
        <div className="plant-grid">
          {plantsList.map(plant => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </div>
      </PlantListStyle>
    </>
  );
};

const FormikPlantForm = withFormik({
  mapPropsToValues({ nickname, species, h2oFrequency }) {
    return {
      nickname: nickname || "",
      species: species || "",
      h2oFrequency: h2oFrequency || ""
    };
  },

  validationSchema: Yup.object().shape({
    nickname: Yup.string().required("Enter a name for your plant"),
    species: Yup.string().required("What species is your plant"),
    h2oFrequency: Yup.string().required("Dont forget to water your plant!")
  })
})(PlantList);

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  actionCreators
)(FormikPlantForm);

const ProfileStyle = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;

background-image: linear-gradient(to bottom, #518999 0%, #CE96A6 100%);
max-width: 280px;
width: 30%;
@media(max-width: 1000px) {
  width: 40%;
}
@media(max-width: 768px) {
  max-width: 100%;
  width: 50%;
}
@media(max-width: 500px) {
  max-width: 100%;
  width: 90%;
}
.add-plant-container {
  display: flex;
  flex-direction: column;
  form {
    width: 90%;
    margin: 5% auto;
  }
  input {
    background: transparent;
    margin: 5% auto;
    width: 90%;
  }
  .add-btn{
    margin: 5% auto;
    width: 60%;
    background: #518999;
    color: white;
    border-radius: 8px;
    border: none;
  }
}
.upload-container {
  width: 60%;
  display: flex;
  flex-direction: column;
  margin: 2% auto;
  button {
    margin: 3%;
  }
}
`;
const PlantFormStyle = styled.div`
width: 100%;
h1 {
  text-align: center;
}
.form {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  box-shadow: 1px 1px 3px black;
  border-radius: 4px;
  label {
    margin: 2% 0 2% 5%;
    font-size: 1.6rem;
  }
  input {
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid black;
  }
}
`;
const PlantListStyle = styled.section`
  background-image: linear-gradient(to bottom, #EEEEED 0%, transparent 100%), url(${wall});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: auto;
  @media(max-width: 768px) {
    height: 100%;
    max-width: 100%;
    width: 100%;
  }
  .plant-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }
  h1 {
    color: #1a202c;
    margin: 8% auto;
    font-size:3.6rem;
    @media(max-width: 768px) {
      font-size: 3rem;
    }
    @media(max-width: 666px) {
      font-size: 2rem;
    }
    @media(max-width: 500px) {
      font-size: 1.8rem;
    }
  }
`;
