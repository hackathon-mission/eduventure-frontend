// src/components/Profile.tsx
// src/components/Profile.tsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { User, Teacher, Item } from "../data/interfaces";
import { Avatar, Box, Typography, Grid, Paper } from "@mui/material";
import { styled } from "@mui/system";
import NotFound from "./NotFound";
import { serverUrl } from "../data/consts";

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

export function Profile() {
    const { id } = useParams();
    console.log(id)
    console.log("  ")
    const navigate = useNavigate();
    const [user, setUser] = useState<User | Teacher | null>(null);

    useEffect(() => {
        fetch(`${serverUrl}/user/${id}`)
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    setUser(data);
                } else {
                    navigate("/notFound");
                }
            })
            .catch(() => {
                navigate("/notFound");
            });
    }, [id, navigate]);

    if (user === null) {
        return <NotFound />;
    }

    const isTeacher = (user: User | Teacher): user is Teacher => {
        return (user as Teacher).realname !== undefined;
    };

    return (
        <Box sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <StyledPaper>
                        <Avatar
                            alt={user.username}
                            src={
                                user.avatar?.img
                            }
                            sx={{ width: 128, height: 128, margin: "auto" }}
                        />
                        <Typography variant="h5" gutterBottom>
                            {user.username}
                        </Typography>
                        <Typography variant="subtitle1">{user.pronouns}</Typography>
                    </StyledPaper>
                </Grid>
                <Grid item xs={12} md={8}>
                    <StyledPaper>
                        {isTeacher(user) ? (
                            <>
                                <Typography variant="h6">Real Name: {user.realname}</Typography>
                                <Typography variant="body1">
                                    Adventures: {user.adventures.length}
                                </Typography>
                            </>
                        ) : (
                            <>
                                <Typography variant="h6">XP: {user.xp}</Typography>
                                <Typography variant="body1">
                                    Items: {user.items.length}
                                </Typography>
                                <Typography variant="h6" gutterBottom>
                                    Presented Items:
                                </Typography>
                                <Grid container spacing={2}>
                                    {user.presented_items.map((item: Item) => (
                                        <Grid item xs={4} key={item._id.toString()}>
                                            <img
                                                src={item.img}
                                                alt={item.name}
                                                style={{ width: "100%" }}
                                            />
                                            <Typography variant="body2">{item.name}</Typography>
                                        </Grid>
                                    ))}
                                </Grid>
                            </>
                        )}
                    </StyledPaper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Profile;
