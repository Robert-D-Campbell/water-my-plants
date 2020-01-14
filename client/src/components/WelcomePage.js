import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import styled from "styled-components";
import * as withAuth from "../helpers//axiosWithAuth";


import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import PlantList from "./PlantList";
import background from "../assets/background.jpeg";
import waterLogo from '../assets/waterLogo.png'

export default function WelcomePage() {
  return (
    <WrapperStyle className="wrapper">
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route path="/login" render={props => <LoginForm {...props} />} />
        <Route path="/signup" exact component={SignupForm} />
        <withAuth.asRoute path="/plants" exact component={PlantList} />
      </Switch>
    </WrapperStyle>
  );
}
const WrapperStyle = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  overflow: hidden;
  .logout-btn {
    background: #518999;
    color: white;
    border-radius: 8px;
    border: none;
    margin: 25% auto;
    height: 30px;
    width: 60px;
  }
  .form-container {
    overflow: hidden;
    background-image: linear-gradient(to bottom, white 40%, transparent 100%);
    display: flex;
    flex-direction: column;
    opacity: 0.7;
    width: 360px;
    max-width: 60%;
    border-radius: 12px;
    margin: 8% 8% auto;
    animation: moveUp 1.5s ease-in-out 0.2s backwards;
    @keyframes moveUp {
      0% {
        transform: translateY(100%);
        opacity: 0;
      }
      100% {
        transform: translateY(0px);
        opacity: 0.7;
      }
    }
    @media (max-width: 768px) {
      max-width: 100%;
      margin: 3% 3% 0;
    }
    .form {
      display: flex;
      flex-direction: column;
      label {
        font-size: 2.2rem;
        padding: 2% 0 1% 5%;
      }
      small {
        font-size: 1.3rem;
        margin: 1% 0 0 5%;
      }
      input {
        background: transparent;
        margin-left: 5%;
        padding-left: 2%;
        width: 90%;
        height: 30px;
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: 1px solid black;
      }
      .btn {
        border: 1px solid black;
        border-radius: 2px;
        margin: 5% auto;
        width: 50%;
      }
      .error {
        margin-left: 5%;
        font-size: 1.4rem;
        color: red;
      }
    }
    .form-link {
      color: black;
      font-size: 1.4rem;
      margin: 0 auto;
    }
    .water-logo{
      margin: 3% auto;
      width: 175px;
      height: 175px;
      max-width: 100%;
      max-height: 100%;
      background-image: url(${waterLogo});
      background-repeat: no-repeat;
      background-position:center;
      background-size: contain;
      animation: fadeIn 2s ease-in-out 0.2s backwards;
      @keyframes fadeIn {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    }
  }
  #login-form {
    height: 60%;
    @media(max-height: 800px) {
      height: 80%;
    }
  }
  #signup-form {
    height: 70%;
    @media(max-height: 800px) {
      height: 90%;
    }
  }
`;
