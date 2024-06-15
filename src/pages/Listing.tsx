// src/components/ListingDetails.tsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Paper, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import { Listing, User } from "../data/interfaces";
import { serverUrl } from "../data/consts";
import { theme } from "../data/theme";

const StyledPaper = styled(Paper)(() => ({
    textAlign: "center",
    color: theme.colors.secondary,
}));

export const ListingDetails: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [listing, setListing] = useState<Listing | null>(null);

    useEffect(() => {
        fetch(`${serverUrl}/listing/${id}`)
            .then((res) => res.json())
            .then((data) => setListing(data))
            .catch(() => navigate("/notFound"));
    }, [id, navigate]);

    const handleBuy = () => {
        const buyerId = "your_buyer_id"; // Replace with actual buyer ID
        fetch(`${serverUrl}/sell/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ buyer: buyerId }),
        }).then((res) => {
            if (res.ok) {
                navigate("/marketplace");
            }
        });
    };

    if (!listing) return <Typography>Loading...</Typography>;

    return (
        <Box sx={{ flexGrow: 1, p: 3 }}>
            <StyledPaper>
                <Typography variant="h4">{listing.name}</Typography>
                <Typography variant="body1">{listing.description}</Typography>
                <Typography variant="h6">Price: {listing.price} XP</Typography>
                <Button variant="contained" color="primary" onClick={handleBuy}>
                    Buy
                </Button>
            </StyledPaper>
        </Box>
    );
};

export default ListingDetails;
