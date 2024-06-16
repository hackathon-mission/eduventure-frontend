// src/components/Profile.tsx
// src/components/Profile.tsx
import React, { useEffect, useState } from "react";
import { ObjectId } from "mongodb";
import { useParams, useNavigate } from "react-router-dom";
import { User, Teacher, Item } from "../data/interfaces";
import { Avatar, Box, Typography, Grid, Paper, Button } from "@mui/material";
import { styled } from "@mui/system";
import NotFound from "./NotFound";
import { serverUrl } from "../data/consts";

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    textAlign: "center",
    color: "black",
}));

export function Profile() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState<User | Teacher | null>(null);
    const [avatar, setAvatar] = useState<Item | null>(null);
    const [presentedItems, setPresentedItems] = useState<Item[]>([]);

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

    useEffect(() => {
        if (user && user.avatar) {
            fetch(`${serverUrl}/avatar/${user.avatar}`).then((res) => res.json()).then((data) => {
                if (data) {
                    setAvatar(data);
                }
            }).catch((err) => console.log(err));
        }
    }, [user]);

    useEffect(() => {
        if (user) {
            (user as User).presented_items.map((item: ObjectId) => {
                fetch(`${serverUrl}/item/${id}`).then((res) => res.json()).then((data) => {
                    if (data) {
                        setPresentedItems([...presentedItems, data]);
                    }
                }).catch((err) => console.log(err))
            });
        }
    }, [user]);

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
                                "http://104.248.193.0:3000/" + avatar?.img
                            }
                            sx={{ width: 128, height: 128, margin: "auto" }}
                        />
                        <Typography variant="h5" gutterBottom>
                            {user.username}
                        </Typography>
                        <Button href={"/changeAvatar"}>change avatar</Button>
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
                                    Items: 3
                                </Typography>
                                <Typography variant="h6" gutterBottom>
                                    Presented Items:
                                </Typography>
                                <Grid container spacing={2}>
                                    {presentedItems.map((item: Item) => (
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
