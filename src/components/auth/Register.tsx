// src/Register.tsx
import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import { theme } from "../../data/theme";
import { serverUrl } from "../../data/consts";
import { redirect } from "react-router";

const Register: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [realname, setRealname] = useState<string>("");
  const [userType, setUserType] = useState<"teacher" | "student">("student");

  const handleRegister = () => {
    const endpoint =
      userType === "teacher"
        ? serverUrl + "/teacher/register"
        : serverUrl + "/register";
    const body = userType === "teacher" ? { username, realname } : { username };

    fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then(() => redirect("/")); /*
      .then((res) => res.json())
      .then((data) => {
        if (data === "success") {
          alert(`${userType} registered successfully!`);
          setUsername("");
          setRealname("");
        } else {
          alert("Registration failed.");
        }
      })
      .catch((err) => {
        console.error(err);
        alert("An error occurred. Please try again.");
      });*/
  };

  return (
    <Container maxWidth="xs">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="60vh"
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Register
        </Typography>
        <TextField
          label="Username"
          variant="outlined"
          margin="normal"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {userType === "teacher" && (
          <TextField
            label="Real Name"
            variant="outlined"
            margin="normal"
            fullWidth
            value={realname}
            onChange={(e) => setRealname(e.target.value)}
          />
        )}
        <Button
          variant="contained"
          style={{ background: theme.colors.primary }}
          fullWidth
          onClick={handleRegister}
          sx={{ mt: 2 }}
        >
          Register as {userType === "teacher" ? "Teacher" : "Student"}
        </Button>
        <Button
          variant="text"
          fullWidth
          onClick={() =>
            setUserType(userType === "teacher" ? "student" : "teacher")
          }
          sx={{ mt: 2 }}
        >
          {userType === "teacher"
            ? "Register as Student"
            : "Register as Teacher"}
        </Button>
      </Box>
    </Container>
  );
};

export default Register;
