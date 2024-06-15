// src/Login.tsx
import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import { useAuth } from "../../features/auth/authContext";
import { theme } from "../../data/theme";

const Login: React.FC = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>(""); // Password is not used in the API, but might be needed for further implementation
    const { loginAsTeacher, loginAsStudent } = useAuth();

    const handleLogin = (userType: "teacher" | "student") => {
        if (userType === "teacher") {
            loginAsTeacher(username);
        } else {
            loginAsStudent(username);
        }
    };

    return (
        <Container maxWidth="xs">
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                minHeight="100vh"
            >
                <Typography variant="h4" component="h1" gutterBottom>
                    Login
                </Typography>
                <TextField
                    label="Username"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                    variant="contained"
                    style={{background:theme.colors.primary}}
                    fullWidth
                    onClick={() => handleLogin("student")}
                    sx={{ mt: 2 }}
                >
                    Login as Student
                </Button>
                <Button
                    variant="contained"
                    style={{background:theme.colors.secondary}}
                    fullWidth
                    onClick={() => handleLogin("teacher")}
                    sx={{ mt: 2 }}
                >
                    Login as Teacher
                </Button>
            </Box>
        </Container>
    );
};

export default Login;
