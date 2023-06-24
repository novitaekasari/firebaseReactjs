import React from "react";
import { Link } from "react-router-dom";
import { Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const NavBar = () => {
  return (
    <>
      <Link to={`/`} data-testid="home-page">
        <h1>Student Portal</h1>
      </Link>
      <Link to={`/student`} data-testid="student-page">
        All Student
      </Link>
      <Link to={`/add`} data-testid="add-page">
        Add Student
      </Link>
    </>
  );
};

export default NavBar;
