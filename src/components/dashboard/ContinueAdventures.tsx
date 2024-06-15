import { Stack } from "@mui/system";
import { ObjectId } from "bson";
import { Adventure } from "../../data/interfaces";
import AdventureThumbnail from "../adventure/AdventureThumbnail";
export default function ContinueAdventures() {
    const adventures: Adventure[] = [
        {
            _id: new ObjectId(),
            chapters: [new ObjectId()],
            name: "Adventure 1",
            description: "very adventure",
        },
        {
            _id: new ObjectId(),
            chapters: [new ObjectId()],
            name: "Adventure 2",
            description: "very adventure",
        },
        {
            _id: new ObjectId(),
            chapters: [new ObjectId()],
            name: "Adventure 3",
            description: "very adventure",
        },
    ];
    return (
        <Stack direction="row" spacing="2rem" justifyContent="space-between">
            {adventures.map((adventure) => (
                <AdventureThumbnail
                    name={adventure.name}
                    description={adventure.description}
                    chapters={adventure.chapters}
                ></AdventureThumbnail>
            ))}
        </Stack>
    );
}
