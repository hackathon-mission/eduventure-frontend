import { useState, useEffect } from "react";
import { serverUrl } from "../data/consts";
import { Box, Avatar, Button } from "@mui/material";
import { Item } from "../data/interfaces";
import { AlignVerticalCenter } from "@mui/icons-material";

export default function ChangeAvatar() {
    let user = JSON.parse(localStorage.getItem("user") || "{}");

    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        fetch(`${serverUrl}/user/${user._id.toString()}/items`).then((res) => res.json()).then((data) => { setItems(data) }).catch((err) => console.log(err))
    }, []);

    return (
        !user ? (<>Log in to change your avatar.</>) : (
            <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
                {items.map((item) => (
                    <Box display={"flex"} flexDirection={"column"} alignItems={"center"} marginTop={"30px"} border={"solid 1px hotpink"} borderRadius={"5px"} padding={"40px"}>
                        <Avatar src={`${serverUrl}/${item.img}`} sx={{ width: 128, height: 128, margin: "auto" }} />
                        <p>{item.name}</p>
                        <Button
                            onClick={() => {
                                fetch(`${serverUrl}/user/${user._id.toString()}/avatar`, {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json",
                                    },
                                    body: JSON.stringify({ avatar_id: item._id.toString() }),
                                }).then((res) => {
                                    if (res.status === 200) {
                                        alert("Avatar changed successfully.");
                                    } else {
                                        alert("Failed to change avatar.");
                                    }
                                }).catch((err) => console.log(err));
                            }}
                        >
                            Select Avatar
                        </Button>
                    </Box>
                ))
                }
            </Box >))
}
