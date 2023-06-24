// TODO: answer here
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/Navbar";
import { Button } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";

const AddStudent = () => {
  const navigate = useNavigate();
  const url = `http://localhost:3001/student`;

  const [studentData, setStudentData] = useState({
    fullname: "",
    profilePicture: "",
    address: "",
    phoneNumber: "",
    birthDate: "",
    gender: "",
    programStudy: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(studentData),
      });
      const data = await response.json();

      navigate("/student");
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let faculty = "";

    if (name === "programStudy") {
      switch (value) {
        case "Ekonomi":
        case "Manajemen":
        case "Akuntansi":
          faculty = "Fakultas Ekonomi";
          break;
        case "Administrasi Publik":
        case "Administrasi Bisnis":
        case "Hubungan Internasional":
          faculty = "Fakultas Ilmu Sosial dan Politik";
          break;
        case "Teknik Sipil":
        case "Arsitektur":
          faculty = "Fakultas Teknik";
          break;
        case "Matematika":
        case "Fisika":
        case "Informatika":
          faculty = "Fakultas Teknologi Informasi dan Sains";
          break;
        default:
          faculty = "";
          break;
      }
    }

    setStudentData({ ...studentData, [name]: value, faculty });
  };

  return (
    <>
      <NavBar />

      <form id="form-student" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="input-name">Fullname</label>
          <Input placeholder="Fullname" id="input-name" name="fullname" type="text" value={studentData.fullname} onChange={handleChange} data-testid="name" />
          <br />
          <br />
        </div>

        <div>
          <label htmlFor="profil-pict">Profile Picture</label>
          <Input placeholder="Profile Picture" id="profil-pict" name="profilePicture" type="text" value={studentData.profilePicture} onChange={handleChange} data-testid="profilePicture" />
          <br />
          <br />
        </div>

        <div>
          <label htmlFor="input-address">Address</label>
          <Input placeholder="Address" id="input-address" name="address" type="text" value={studentData.address} onChange={handleChange} data-testid="address" />
          <br />
          <br />
        </div>

        <div>
          <label htmlFor="input-phoneNumber">Phone Number</label>
          <Input placeholder="Phone Number" id="input-phoneNumber" name="phoneNumber" type="text" value={studentData.phoneNumber} onChange={handleChange} data-testid="phoneNumber" />
          <br />
          <br />
        </div>

        <div>
          <label htmlFor="input-date">Birth Date</label>
          <Input placeholder="Birth Date" id="input-date" name="birthDate" type="text" value={studentData.birthDate} onChange={handleChange} data-testid="date" />
          <br />
          <br />
        </div>

        <div>
          <label htmlFor="input-gender">Gender</label>
          <Input placeholder="Gender" id="input-gender" name="gender" type="text" value={studentData.gender} onChange={handleChange} data-testid="gender" />
          <br />
          <br />
        </div>

        <div>
          <label htmlFor="input-prody">Program Study</label>
          <select id="input-prody" name="programStudy" value={studentData.programStudy} onChange={handleChange} data-testid="prody">
            <option value="">Select Program Study</option>
            <option value="Ekonomi">Ekonomi</option>
            <option value="Manajemen">Manajemen</option>
            <option value="Akuntansi">Akuntansi</option>
            <option value="Administrasi Publik">Administrasi Publik</option>
            <option value="Administrasi Bisnis">Administrasi Bisnis</option>
            <option value="Hubungan Internasional">Hubungan Internasional</option>
            <option value="Teknik Sipil">Teknik Sipil</option>
            <option value="Arsitektur">Arsitektur</option>
            <option value="Matematika">Matematika</option>
            <option value="Fisika">Fisika</option>
            <option value="Informatika">Informatika</option>
          </select>
          <br />
          <br />
        </div>

        <div>
          <Button colorScheme="blue" type="submit" data-testid="student-btn">
            All Student
          </Button>
        </div>
      </form>
    </>
  );
};

export default AddStudent;