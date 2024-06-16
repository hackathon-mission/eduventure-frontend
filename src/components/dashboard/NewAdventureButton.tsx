import Card, { CardProps } from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActionsProps } from "@mui/material";
import Link from "@mui/joy/Link";

export default function NewAdventureButton() {
    return (
        <Card>
            <CardActionArea>
                <CardContent>
                    <Typography variant="h5" component="div">
                        New adventure
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography variant="h6" component="div">
                        <Link
                            overlay
                            underline="none"
                            href="/adventures"
                            sx={{ color: "text.tertiary" }}
                        >
                            Choose your adventure
                        </Link>
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card >
    );
}
