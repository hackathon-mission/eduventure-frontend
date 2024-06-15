// src/Login.tsx
import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import { Teacher, User } from "../../data/interfaces";

import { useAuth } from "../../features/auth/authContext";
import { theme } from "../../data/theme";
const Login: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const { loginAsTeacher, loginAsStudent } = useAuth();

    const handleLogin = (userType: "teacher" | "student") => {
        // Mock user data for demonstration purposes
        if (userType === "teacher") {
            const teacher: Teacher = {
                username: "teacherUser",
                realname: "John Doe",
                pronouns: "he/him",
                avatar: null,
                adventures: [],
            };
            loginAsTeacher(teacher);
        } else {
            const student: User = {
                username: "studentUser",
                pronouns: "they/them",
                xp: 100,
                avatar: null,
                presented_items: [],
                user_adventures: [],
            };
            loginAsStudent(student);
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
