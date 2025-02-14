import React from "react";
import { useNavigate } from "react-router-dom";
import { BiPowerOff } from "react-icons/bi";
import styled from "styled-components";
import axios from "axios";
import { logoutRoute } from "../utils/APIRoutes";
export default function Logout() {
  const navigate = useNavigate();
  const handleClick = async () => {
    const id = await JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
    )._id;
    const data = await axios.get(`${logoutRoute}/${id}`);
    if (data.status === 200) {
      localStorage.clear();
      navigate("/login");
    }
  };
  return (
    <Button  onClick={handleClick}>Log Out</Button>
  );
}

const Button = styled.button`
  
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    padding: 0.5rem;
    border-radius: 0.5rem;
    background-color: rgb(154, 134, 243);
    border: none;
    padding: 10px;
    border-radius: 0px;
    background: red;
    box-shadow: 0px 0px 7px 4px #ff000094;
    /* border: 1px solid white; */
    color: white;
    margin: 10px;
    cursor: pointer;


`;
