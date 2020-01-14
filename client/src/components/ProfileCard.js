import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import * as actionCreators from "../state/actionCreators";

import waterLogo from "../assets/waterLogo.png";

const ProfileCard = ({
  editUser,
  username,
  phoneNumber: phone,
}) => {

  const [phoneNumber, setPhoneNumber] = useState(phone || "");
  const [password, setPassword] = useState("");

  const onUserEdit = e => {
    e.preventDefault();
    editUser({ phoneNumber, password });
  };

  return (
    <ProfileCardStyle className="profile-container">
      <img alt="profile thumbnail" src={waterLogo} />
      <h3 className="profile-username">User: {username}</h3>
      <h3 className="profile-phonenumber">Phone: {phoneNumber}</h3>{" "}
      <div className='profile-info'>
        <form>
          <input
            type="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <input
            type="text"
            name="phoneNumber"
            value={phoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
          />
        </form>
        <button className='add-btn' onClick={onUserEdit}>Edit Profile</button>
      </div>
    </ProfileCardStyle>
  );
};

export default connect(
  state => state,
  actionCreators
)(ProfileCard);

const ProfileCardStyle = styled.aside`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  max-width: 100%;
  max-height: 50vh;
  text-align: center;
  img {
    border-radius: 12px;
    margin: 25% auto 10%;
    max-width: 80%;
    max-height: 50vh;
  }
  h3 {
    margin: 3%;
    font-size: 1.6rem;
  }
  input {
    margin: 3%;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid black;
    background: transparent;
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
`;
