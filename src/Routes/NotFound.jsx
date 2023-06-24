import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>404 | Not Found</h1>
      <Button colorScheme="blue" data-testid="student-btn" onClick={() => navigate(-1)}>
        Take Me Back
      </Button>
    </>
  );
};

export default NotFound;
