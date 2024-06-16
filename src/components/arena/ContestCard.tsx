import { Card, CardContent } from "@mui/joy";
import { CardActionArea, Typography } from "@mui/material";

export interface ContestProps {
    name: string;
    description: string;
    startDate: Date;
    endDate: Date;
}

export default function ConstestCard(props: ContestProps) {
    return (
        <Card
            sx={{
                maxWidth: "250px",
                flexShrink: "0",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            }}
        >
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.startDate.toDateString()}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.endDate.toDateString()}
                </Typography>
            </CardContent>
                <CardActionArea>
                    <Card>Join now &gt;</Card>
                </CardActionArea>
        </Card>
    );
}
