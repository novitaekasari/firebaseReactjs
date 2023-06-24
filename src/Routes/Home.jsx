import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, Heading, Box, Center } from "@chakra-ui/react";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "skyblue",
        }}
      >
        <Center marginTop="100">
          <Box height="100%" maxW={"320px"} w={"full"} rounded={"lg"} p={6} textAlign={"center"}>
            <Card align="center" variant="outline" bg="skyblue" height="100%">
              <Heading>Home</Heading>
              <Button colorScheme="purple" as={Link} to="/student" data-testid="student-btn">
                All Student
              </Button>
            </Card>
          </Box>
        </Center>
      </div>
      <Footer />
    </>
  );
};

export default Home;
