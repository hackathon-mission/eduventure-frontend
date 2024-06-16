// src/components/Profile.tsx
// src/components/Profile.tsx
import React, { useEffect, useState } from "react";
import { ObjectId } from "mongodb";
import { useParams, useNavigate } from "react-router-dom";
import { User, Teacher, Item, Adventure } from "../data/interfaces";
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
    const [adventures, setAdventures] = useState<Adventure[]>([]);

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

    console.log(adventures)

    const isTeacher = (user: User | Teacher): user is Teacher => {
        return (user as Teacher).realname !== undefined;
    };

    return (
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Box display={"flex"} flexDirection={"column"} alignItems={"center"} marginTop={"30px"}>
                <Avatar src={avatar ? `${serverUrl}/${avatar.img}` : ""} sx={{ width: 150, height: 150, margin: "auto", marginBottom: "20px" }} />
                <Button
                    onClick={() => {
                        navigate("/changeAvatar");
                    }}
                >Change avatar</Button>
                <Typography variant={"h4"}>{isTeacher(user) ? user.realname : user.username}</Typography>
                <Typography variant={"h6"} color={"grey"}>{user.pronouns}</Typography>
            </Box>
            <Box marginTop={"70px"} display={"flex"} flexDirection={"row"} alignItems={"center"} justifyContent={"center"}>
                {
                    isTeacher(user) ? <Box display={"flex"} flexDirection={"column"} alignItems={"center"} height={"150px"} width={"250px"}>
                        <Typography variant={"h6"}>Number of adventures</Typography>
                        <Typography variant={"h3"} marginTop={"10px"}>{user.adventures.length}</Typography>
                    </Box> : <Box display={"flex"} flexDirection={"column"} alignItems={"center"} height={"150px"} width={"250px"}>
                        <Typography variant={"h6"}>Collected expierience</Typography>
                        <Typography variant={"h3"} marginTop={"10px"}>{user.xp}</Typography>
                    </Box>
                }
                {
                    isTeacher(user) ? <></> : <Box display={"flex"} flexDirection={"column"} alignItems={"center"} height={"150px"} width={"250px"}>
                        <Typography variant={"h6"}>Number of items</Typography>
                        <Typography variant={"h3"} marginTop={"10px"}>{user.items.length}</Typography>
                    </Box>
                }
            </Box>
            {
                isTeacher(user) ? <></> : <Button onClick={() => navigate(`/adventures`)}>Go to adventures</Button>
            }
        </Box >
    );
};

export default Profile;
