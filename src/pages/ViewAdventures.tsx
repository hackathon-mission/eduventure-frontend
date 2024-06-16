import { useEffect, useState } from "react";
import { Adventure } from "../data/interfaces";
import AdventureThumbnail from "../components/adventure/AdventureThumbnail";
import { serverUrl } from "../data/consts";
import { Box, Button } from "@mui/material";
import { User } from "../data/interfaces";
import { theme } from "../data/theme";

export default function ViewAdventures() {
    let user: User = JSON.parse(localStorage.getItem("user") || "{}");

    const [adventures, setAdventures] = useState<Adventure[]>([]);
    useEffect(() => {
        fetch(`${serverUrl}/adventures`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data)
                setAdventures(data);
            }).catch((err) => console.log(err));
    }, []);
    return (
        <Box display={"flex"} flexDirection={"column"} alignItems={'center'}>
            {adventures.map((adventure) => (
                <Box display={"flex"}>
                    <AdventureThumbnail width="40vw" key={adventure._id.toString()} name={adventure.name} description={adventure.description}></AdventureThumbnail>
                    <Button
                        variant="contained"
                        sx={{marginY:"30px", bgcolor:theme.colors.primary}}
                        onClick={() => {
                            fetch(`${serverUrl}/user/${user._id.toString()}/join_adventure/${adventure._id.toString()}`, {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                }
                            }).then((res) => { if (res.status === 200) { alert("Adventure joined successfully") } else { alert("Failed to join adventure") } }).catch((err) => console.log(err));
                        }}
                    > Join adventure!</Button>
                </Box>
            ))
            }
        </Box >);
}
