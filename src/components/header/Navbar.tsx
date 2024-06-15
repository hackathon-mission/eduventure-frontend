import { Button, ThemeProvider } from "@mui/material";
import ButtonGroup from "@mui/joy/ButtonGroup";
import { theme } from "../../data/theme";

interface ButtonData {
    label: string;
    url: string;
}

export default function Navbar() {
    let buttonData: ButtonData[] = [
        { label: "Leaderboard", url: "Leaderboard.tsx" },
        { label: "Battle Arena", url: "Arena.tsx" },
        { label: "Market", url: "Market.tsx" },
    ];
    return (
        <ButtonGroup sx={{justifyContent:"center"}} spacing="2rem">
            {buttonData.map((data: ButtonData) => (
                <Button
                    sx={{
                        color: theme.colors.primary,
                        borderColor: theme.colors.primary,
                    }}
                    variant="outlined"
                    href={data.url}
                >
                    {data.label}
                </Button>
            ))}
        </ButtonGroup>
    );
}
