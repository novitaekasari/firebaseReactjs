import React from "react";
import { Box, Center } from "@chakra-ui/react";

const Footer = () => {
  return (
    <div>
      <Center>
        <Box className="footer" padding="4" color="black" maxW="md">
          <p className="studentName">Novita Ekasari</p>
          <p className="studentId">FE5684125</p>
        </Box>
      </Center>
    </div>
  );
};

export default Footer;
