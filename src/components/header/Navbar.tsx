import { Button, ThemeProvider } from "@mui/material";
import ButtonGroup from "@mui/joy/ButtonGroup";
import { theme } from "../../data/theme";

interface ButtonData {
    label: string;
    url: string;
}

export default function Navbar() {
    let buttonData: ButtonData[] = [
        { label: "Leaderboard", url: "/leaderboard" },
        { label: "Battle Arena", url: "/arena" },
        { label: "Market", url: "/market" },
    ];
    return (
        <ButtonGroup sx={{justifyContent:"center"}} spacing="2rem">
            {buttonData.map((data: ButtonData) => (
                <Button key={data.label}
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
