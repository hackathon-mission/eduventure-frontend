// src/components/NotFound.tsx
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

const StyledBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    textAlign: "center",
    //backgroundColor: theme.palette.background.default,
    //color: theme.palette.text.primary,
}));

const NotFound: React.FC = () => {
    const navigate = useNavigate();

    return (
        <StyledBox>
            <Typography variant="h1" gutterBottom>
                404
            </Typography>
            <Typography variant="h6" gutterBottom>
                Page Not Found
            </Typography>
            <Button variant="contained" color="primary" onClick={() => navigate("/")}>
                Go to Home
            </Button>
        </StyledBox>
    );
};

export default NotFound;
