import { useEffect, useState } from "react";
import { Item, User } from "../data/interfaces";
import { serverUrl } from "../data/consts";
import { Button, OutlinedInput, Box } from "@mui/material";


export default function AddListing() {
    let user: User = JSON.parse(localStorage.getItem("user") || "{}");

    const [items, setItems] = useState<Item[]>([]);
    const [selectedItem, setSelectedItem] = useState<number>(-1);
    const [price, setPrice] = useState<number>(0);
    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    useEffect(() => {
        fetch(`${serverUrl}/user/${user._id.toString()}/items`).then((res) => res.json()).then((data) => { setItems(data) }).catch((err) => console.log(err));
    }, []);

    return (
        <Box display={"flex"} flexDirection={"column"}>
            <h1>Add a new listing</h1>
            <h3>Select item to list:</h3>
            {items.map((item: Item, index, array) => (
                <Button sx={{ backgroundColor: (selectedItem == index ? "gray" : "white") }}
                    onClick={() => setSelectedItem(index)}>
                    {item.name}
                </Button>
            ))}
            <h3>Price:</h3>
            <OutlinedInput onChange={(e) => setPrice(Number(e.target.value))} type={"number"} />
            <h3>Name:</h3>
            <OutlinedInput onChange={(e) => setName(e.target.value)} />
            <h3>Description:</h3>
            <OutlinedInput onChange={(e) => setDescription(e.target.value)} />
            <Button
                onClick={() => {
                    fetch(`${serverUrl}/listing`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            item: items[selectedItem]._id.toString(),
                            price: price,
                            name: name,
                            description: description,
                            seller: user._id.toString()
                        }),
                    }).then((res) => {
                        if (res.status === 200) {
                            alert("Listing added successfully");
                        } else {
                            alert("Failed to add listing");
                        }
                    }).catch((err) => console.log(err));
                }}
            >Add listing</Button>
        </Box >
    );
}