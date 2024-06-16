import Button from "@mui/joy/Button";
import { maxWidth, Stack } from "@mui/system";
import { ObjectId } from "bson";
import { Adventure, User, Teacher } from "../../data/interfaces";
import AdventureThumbnail from "../adventure/AdventureThumbnail";
import { theme } from "../../data/theme";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchUser, fetchAdventure } from "../../utils/fetching";
import { UserAdventure } from "../../data/interfaces";
import { Card, CardContent } from "@mui/material";
const calculateCompletionPercentage = (
    userAdventure: UserAdventure,
): number => {
    const totalTasks = userAdventure.completed.length;
    const completedTasks = userAdventure.completed.filter(
        (completed) => completed,
    ).length;
    return (completedTasks / totalTasks) * 100;
};

export default function ContinueAdventures() {
    const user: Teacher | User = JSON.parse(localStorage.getItem("user") || "{}");
    const userId = user._id.toString();
    const [adventures, setAdventures] = useState<Adventure[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const user = await fetchUser(userId!);
            if (!user) {
                setError("User not found");
                setLoading(false);
                return;
            }

            const adventuresData = await Promise.all(
                user.user_adventures.map(async (userAdventure) => {
                    const adventure = await fetchAdventure(
                        userAdventure.base_adventure_id.toString(),
                    );
                    return {
                        ...adventure!,
                        completionPercentage: calculateCompletionPercentage(userAdventure),
                    };
                }),
            );

            adventuresData.sort(
                (a, b) => b.completionPercentage - a.completionPercentage,
            );
            setAdventures(adventuresData.slice(0, 3));
            setLoading(false);
        };

        fetchData();
    }, [userId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <Stack direction="row" spacing="2rem" justifyContent="space-between">
            {adventures.map((adventure) => (
                <div
                    style={{ display: "flex", flexDirection: "column", gap: "0.5rem"  }}
                    key={adventure._id!.toString()}
                >
                    <AdventureThumbnail
                        name={adventure.name}
                        description={adventure.description}
                        width="100%"
                    />
                    <Link to={"/adventure/" + adventure._id!.toString()}>
                        <Button
                            variant="outlined"
                            sx={{
                                color: "primary",
                                borderColor: "primary",
                            }}
                        >
                            Continue &gt;
                        </Button>
                    </Link>
                </div>
            ))}
        </Stack>
    );
}
