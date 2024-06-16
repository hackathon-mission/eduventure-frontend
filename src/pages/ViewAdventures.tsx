import { useEffect, useState } from "react";
import { Adventure } from "../data/interfaces";
import AdventureThumbnail from "../components/adventure/AdventureThumbnail";
import { serverUrl } from "../data/consts";
import { Box } from "@mui/material";

export default function ViewAdventures() {
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
                <AdventureThumbnail key={adventure._id.toString()} name={adventure.name} description={adventure.description}></AdventureThumbnail>
            ))}
        </Box>);
}
