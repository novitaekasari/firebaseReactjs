// TODO: answer here
import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { Select } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from "@chakra-ui/react";

const Student = () => {
  // TODO: answer here
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");
  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await fetch(`http://localhost:3001/student`);
      const data = await response.json();
      setStudents(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const deleteStudent = async (id) => {
    try {
      await fetch(`http://localhost:3001/student/${id}`, {
        method: "DELETE",
      });
      setStudents((prevStudents) => prevStudents.filter((student) => student.id !== id));
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredStudents = filter !== "All" ? students.filter((student) => student.faculty === filter) : students;

  return (
    <>
      <Navbar />
      {!loading ? (
        <div
          style={{
            minHeight: "80vh",
          }}
        >
          <Container maxW="100vh">
            <br></br>
            <Box height="100%">
              <Heading as="h2" size="md">
                Student
              </Heading>

              <label htmlFor="filter">Filter:</label>
              <Select id="filter" value={filter} onChange={handleFilterChange} data-testid="filter">
                <option value="All">All</option>
                <option value="Fakultas Ekonomi">Fakultas Ekonomi</option>
                <option value="Fakultas Ilmu Sosial dan Politik">Fakultas Ilmu Sosial dan Politik</option>
                <option value="Fakultas Teknik">Fakultas Teknik</option>
                <option value="Fakultas Teknologi Informasi dan Sains">Fakultas Teknologi Informasi dan Sains</option>
              </Select>

              <br></br>
              <Box bg="skyblue.200">
                <TableContainer overflowX="auto">
                  <Table variant="simple" id="table-student">
                    <Thead backgroundColor="ButtonFace" id="student-data">
                      <Tr>
                        <Th>No</Th>
                        <Th>Full Name</Th>
                        <Th>Faculty</Th>
                        <Th>Program Study</Th>
                        <Th>Option</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {filteredStudents.map((student, index) => (
                        <Tr key={student.id} className="student-data-row">
                          <Td>{index + 1}</Td>
                          <Td>
                            <Link to={`/student/${student.id}`}>{student.fullname}</Link>
                          </Td>
                          <Td>{student.faculty}</Td>
                          <Td>{student.programStudy}</Td>
                          <Td>
                            <Button colorScheme="red" size="sm" variant="ghost" type="button" class="delete-btn" id="delete-btn" onClick={() => deleteStudent(student.id)} data-testid={`delete-${student.id}`}>
                              Delete
                            </Button>
                          </Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </TableContainer>
              </Box>
            </Box>
            <br></br>
          </Container>
        </div>
      ) : (
        <p>Loading ...</p>
      )}
    </>
  );
};

export default Student;
