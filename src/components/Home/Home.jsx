import {
  Box,
  HStack,
  VStack,
  Heading,
  Input,
  Button,
  Container,
  Select,
  transition,
} from "@chakra-ui/react";
import React from "react";
// import bg from "../../assets/bgimg.webp";
import SearchTrainsSrc from "../SearchTrainsSrc";
import SearchTrainsDest from "../SearchTrainsDest";
import { useState } from "react";



import "./Home.scss";



import SwapHorizontalCircleIcon from "@mui/icons-material/SwapHorizontalCircle";
import { DateField } from "@mui/x-date-pickers";
import Autocomplete from "../Autocomplete";

const Home = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  }

  const handleSelect = (e) => {
    e.preventDefault();
    console.log(e);
  }
  return (
    <div className="home-container">
      <div className="home-heading">
        <h1>Welcome to Indian Railways</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="container-content">
          <div className="home-container-sub">
            <Autocomplete/>

            <button className="home-swap-icon">
              <SwapHorizontalCircleIcon
                style={{
                  height: "40px",
                  width: "40px",
                  transition: "all 300ms",
                }}
              />
            </button>
            <SearchTrainsDest />
          </div>

          <div className="home-container-sub2">
            {/* <input type="date" /> */}
            <select placeholder="Enter seat class">
              <option onSelect={handleSelect}>Option 2</option>
              <option>Option 1</option>
              <option>Option 1</option>
              <option value={"default"} selected>
                Option 1
              </option>
            </select>
          </div>
          <div className="home-container-sub3">
            <button type="submit">FIND TRAINS</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Home;
