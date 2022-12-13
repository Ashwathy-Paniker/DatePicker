import React, { useState } from "react";
import {
  Card,
  CardBody,
  Button,
  Stack,
  Box,
  Container,
  Text,
  Center,
  Flex,
  Spacer,
  Input,
} from "@chakra-ui/react";
export default function DatePicker() {
  const[startdate,setStartdate] = useState("")
  const[enddate,setEnddate] = useState("")

  const handleChange=()=>{
    var selectedDate = document.getElementById("startdate").value;
    setEnddate(selectedDate)
    console.log(enddate)
  }
  return (
    <>
      <Card p={5}>
        <Flex>
          <Flex>
            <Box p={"4"}>
              <Text as='b'>From:</Text>{" "}
              <Input
                type="date"
                id="startdate"
                min="2004-12-01"
                placeholder="Select start date"
                htmlSize={6}
                width="auto"
                size="md"
                onChange={handleChange}
              />
            </Box>
            <Spacer />
            <Box p={"4"}>
              <Text as='b'>To:</Text>{" "}
              <Input
                type="date"
                min={enddate}
                id="enddate"
                p={5}
                placeholder="Select End date"
                size="md"
                htmlSize={6}
                width="auto"
                onChange={(event) => {
                  setEnddate(event.target.value);
                }}
              />
            </Box>
          </Flex>
        </Flex>
      </Card>
    </>
  );
}
