import React from "react";
import styled from 'styled-components';
import grass from '../assets/grass.jpeg';
import flower from '../assets/flower.jpeg';
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";


const PlantCard = ({ plant, startEditPlant, deletePlant }) => {
  const onEdit = e => {
    startEditPlant(plant.id);
  };
  const onDelete = e => {
    deletePlant(plant.id);
  }; 
  
  return (
    <PlantCardStyle className="plant-card">
      <div className='plant-img' />
      <h2>{plant.id}</h2>
      <h3>{plant.species}</h3>
      <h3>{plant.h2oFrequency}</h3>
      <div className='btn-container'>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
      </div>
      {/* {plant && (
        <form onSubmit={onEdit}>
          <label>
            Nick Name:
            <input
              onChange={}
              value={}
            />
          </label>
          <label>
            Species:
            <input
              onChange={}
              value={}
            />
          </label> */}
      
    </PlantCardStyle>
  )
};

export default connect(
  state => state,
  actionCreators
)(PlantCard);


const PlantCardStyle = styled.article`
  background-image: linear-gradient(to bottom, transparent 50%, black 100%), url(${grass});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow: 2px 3px 5px black;
  border-radius: 12px;
  opacity: 0.9;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 3% 3% 1%;
  margin: 3%;
  width: 300px;
  max-width: 25%;
  @media(max-width: 1200px) {
      max-width: 40%;
  }
  @media(max-width: 768px) {
    max-width: 100%;
  }
  .btn-container {
    display: flex;
    justify-content: center;
    height: 100%;
    button{
      width: 100%;
      margin: 3% 5%;
      background: #518999;
      color: white;
      border-radius: 8px;
      border: none;
    }
  }
  .plant-img {
    margin: 0 auto;
    border-radius: 50%;
    width: 125px;
    height: 125px;
    max-width: 100%;
    background-image: url(${flower});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  h2 {
    font-size: 1.8rem;
    text-align: center;
    color: white;
    text-shadow: 2px 2px 2px black; 
  }
  h3 {
    margin: 2%;
    font-size: 1.6rem;
    text-align: center;
    color: white;
    text-shadow: 2px 2px 2px black; 
  }
`;
