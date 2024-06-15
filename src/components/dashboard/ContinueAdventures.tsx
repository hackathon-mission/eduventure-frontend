import Button from "@mui/joy/Button";
import { Stack } from "@mui/system";
import { ObjectId } from "bson";
import { Adventure } from "../../data/interfaces";
import AdventureThumbnail from "../adventure/AdventureThumbnail";
import { theme } from "../../data/theme";
import { Link } from "react-router-dom";
export default function ContinueAdventures() {
   /* const adventures: Adventure[] = [
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
    ];*/
    return (
        <></>
        /*<Stack direction="row" spacing="2rem" justifyContent="space-between">
            {adventures.map((adventure) => (
                <div
                    style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
                    key={adventure._id.toString()}
                >
                    <AdventureThumbnail
                        name={adventure.name}
                        description={adventure.description}
                    ></AdventureThumbnail>
                    <Link to={"/adventure/" + adventure._id.toString()}>
                        <Button
                            variant="outlined"
                            sx={{
                                color: theme.colors.primary,
                                borderColor: theme.colors.primary,
                            }}
                        >
                            Continue &gt;
                        </Button>
                    </Link>
                </div>
            ))}
        </Stack>*/
    );
}
