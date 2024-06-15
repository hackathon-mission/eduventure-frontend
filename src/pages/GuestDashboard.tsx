import React from "react";
import { Button, Container, Typography, Box } from "@mui/material";
import { useAuth } from "../features/auth/authContext";
import { theme } from "../data/theme";
import { redirect } from "react-router-dom";
import { isLoggedIn } from "../utils/auth";
import { useNavigate } from "react-router-dom";

const GuestDashboard: React.FC = () => {
    const navigate = useNavigate()
    if (isLoggedIn()) {
        navigate("/");
    }

    return (
        <Container maxWidth="sm">
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                minHeight="100vh"
            >
                <Typography textAlign="center" variant="h3" component="h1" gutterBottom>
                    Welcome to eduVENTURE
                </Typography>
                <Typography variant="h5" component="p" gutterBottom>
                    A platform which turns education into an adventure
                </Typography>
                <Box mt={2} display="flex" gap="1rem">
                    <Button
                        variant="contained"
                        sx={{
                            background: theme.colors.primary,
                            ":hover": { background: theme.colors.secondary },
                        }}
                        href="/login"
                    >
                        Log In
                    </Button>
                    <Button
                        variant="outlined"
                        sx={{
                            color: theme.colors.primary,
                            borderColor: theme.colors.primary,
                        }}
                    >
                        Create Account
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default GuestDashboard;
