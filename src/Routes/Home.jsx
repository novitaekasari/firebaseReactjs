import { Button, ButtonGroup } from "@chakra-ui/react";

const Home = () => {
  return (
    <>
      <link to={`/student`}>
        <Button colorScheme="blue" type="submit" data-testid="student-btn">
          All Student
        </Button>
      </link>
    </>
  ); // TODO: replace this
};

export default Home;
