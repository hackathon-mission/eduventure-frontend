import { useEffect, useState } from "react";
import { Adventure } from "../data/interfaces";
import AdventureThumbnail from "../components/adventure/AdventureThumbnail";

export default function ViewAdventures() {
    const [serverUrl, setServerUrl] = useState(
        "http://104.248.193.0:3000/adventures",
    );
    const [adventures, setAdventures] = useState<Adventure[]>([]);
    useEffect(() => {
        fetch(serverUrl)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data)
                setAdventures(data);
            });
    }, []);
    return <>
        {adventures.map((adventure ) => (
        <AdventureThumbnail key={adventure._id.toString()} name={adventure.name} description={adventure.description}></AdventureThumbnail>
        ))}
    </>;
}
