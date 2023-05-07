import { useState } from "react";
import TrainDataService from '../services/trainServices'
import { Switch, Route, Navigate, withRouter, useNavigate } from "react-router-dom";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  IconButton,
  Select,
  Heading,
  Button,
} from "@chakra-ui/react";
import { CalendarIcon, Search2Icon } from "@chakra-ui/icons";
// import "./FrontPage.scss";
// import bg from "../assets/bgimg.webp";

import {
  Box,
  Input,
  List,
  ListItem,
  ListIcon,
  Text,
  Flex,
  Icon,
  Stack,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Contacts from "./Contacts";

const FrontPage = (getTrains) => {
  const [source, setSource] = useState("");
  const [dest, setDest] = useState("");
  const [date, setDate] = useState();
  const [seatClass, setSeatClass] = useState();
  const [trains, setTrains] = useState();
  const [loadFront, setLoadFront] = useState(true)

  const [trainObj, setTrainObj] = useState(null);
  const navigate = useNavigate();

  const id = 3

  const submitHandler = (e) => {
    e.preventDefault();
    const obj = {
      source: source,
      dest: dest,
      date: date,
      seatClass: seatClass,
    };

    TrainDataService.getTrains('/api/getTrain', { source: source, destination: dest, date: date })
      .then(res => {
        setTrains(res.data);
        console.log((res.data));
        let newTrains = res.data
        console.log(trains)
        navigate('/contact', { state: newTrains })
      })
      .catch(err => console.log(err))
  };


  return (
    (loadFront) ? <Box w={"container.xl"} h={"100vh"} bgImage={"bg"}>
      <Box w={"60%"} m={"auto"} marginTop={"50px"}>
        <Heading
          style={{
            fontSize: "3rem",
            textAlign: "center",
            fontWeight: "900",
            color: "#202994",
            textShadow: "2px 2px red",
            marginBottom: "2rem",
          }}
        >
          Welcom to SGGS Railways
        </Heading>
        <form onSubmit={submitHandler}>
          <VStack w={"100%"} gap={"0.7rem"}>
            <HStack w={"100%"}>
              <Input
                value={source}
                onChange={(e) => {
                  setSource(e.target.value);
                }}
                w={"100%"}
                p={"30px"}
                borderTopLeftRadius={"12px"}
                border={"none"}
                bgColor={"#e2e2e2"}
                color={"blackAlpha.700"}
                placeholder="Enter your source"
                fontSize={"1.2rem"}
                css={{
                  outline: "none",
                }}
                required
              />

              <Input
                w={"100%"}
                p={"30px"}
                value={dest}
                borderTopRightRadius={"12px"}
                border={"none"}
                bgColor={"#e2e2e2"}
                color={"blackAlpha.700"}
                placeholder="Enter your destination"
                fontSize={"1.2rem"}
                onChange={(e) => {
                  setDest(e.target.value);
                }}
                css={{
                  outline: "none",
                }}
                required

              />
            </HStack>
            <HStack w={"100%"}>
              <Input
                w={"100%"}
                p={"30px"}
                type="date"
                borderBottomLeftRadius={"12px"}
                border={"none"}
                bgColor={"#e2e2e2"}
                color={"blackAlpha.700"}
                placeholder="Enter your source"
                fontSize={"1.2rem"}
                css={{
                  outline: "none",
                }}
                onChange={(e) => {
                  setDate(e.target.value)
                }}
                value={date}
                required
              />
              <Input
                w={"100%"}
                p={"30px"}
                borderBottomRightRadius={"12px"}
                border={"none"}
                bgColor={"#e2e2e2"}
                color={"blackAlpha.700"}
                placeholder="Enter your source"
                fontSize={"1.2rem"}
                css={{
                  outline: "none",
                }}
                onChange={(e) => {
                  setSeatClass(e.target.value)
                }}
                value={seatClass}
                required
              />
            </HStack>

            <HStack w={"100%"}>
              <Button
                w={"100%"}
                p={"30px"}
                type="submit"
                borderRadius={"12px"}
                border={"none"}
                bgColor={"#ff650e"}
                color={"#e2e2e2"}
                placeholder="Enter your source"
                fontSize={"1.3rem"}
                cursor={"pointer"}
                css={{
                  outline: "none",
                  ":hover": {
                    opacity: "0.9",
                  },
                }}
              >
                Search Trains
              </Button>
            </HStack>
          </VStack>
        </form>
      </Box>
    </Box>
      :
      <Contacts />
  );
};

export default FrontPage;
