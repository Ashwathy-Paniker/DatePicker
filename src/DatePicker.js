import React from "react";
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
  return (
    <>
      <Card p={5}>
        <Flex>
          <Flex>
            <Box p={"4"}>
              <Text as='b'>From:</Text>{" "}
              <Input
                type="date"
                min="2004-12-01"
                placeholder="Select start date"
                htmlSize={6}
                width="auto"
                size="md"
              />
            </Box>
            <Spacer />
            <Box p={"4"}>
              <Text as='b'>To:</Text>{" "}
              <Input
                type="date"
                p={5}
                min="2004-12-01"
                placeholder="Select End date"
                size="md"
                htmlSize={6}
                width="auto"
              />
            </Box>
          </Flex>
        </Flex>
      </Card>
    </>
  );
}
