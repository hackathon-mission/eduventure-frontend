import { Card, CardContent } from "@mui/material";
import Typography from "@mui/material/Typography";

interface AdventureThumbnailProps {
    name: string;
    description: string;
    width:string;
}

export default function AdventureThumbnail(props: AdventureThumbnailProps) {
    return (
        <Card sx={{ width: props.width, marginY: "30px"}}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.description}
                </Typography>
            </CardContent>
        </Card>
    );
}
