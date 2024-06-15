import React, { useEffect, useState } from "react";
import { Box, Grid, Paper, Typography, Button, Accordion } from "@mui/material";
import { styled } from "@mui/system";
import { Adventure } from "../data/interfaces";
import { useNavigate } from "react-router-dom";
import { serverUrl } from "../data/consts";
import { theme } from "../data/theme";

const StyledPaper = styled(Paper)(() => ({
    textAlign: "center",
    color: theme.colors.primary,
    width: "450px",
}));

const AdventuresList: React.FC = () => {
    const [adventures, setAdventures] = useState<Adventure[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${serverUrl}/adventures`)
            .then((res) => res.json())
            .then((data) => setAdventures(data));
    }, []);

    return (
        <Box sx={{ flexGrow: 1, p: 3 }}>
            <Typography variant="h4" gutterBottom>
                Adventures
            </Typography>
            <Box
                display={"flex"}
                flexDirection={"column"}
                width={"500px"}
                alignItems={"center"}
            >
                {adventures.map((adventure) => (
                    <Box display={"flex"} marginBottom={"30px"}>
                        <Accordion>
                            <StyledPaper>
                                <Typography variant="h6">{adventure.name}</Typography>
                                <Typography variant="body1">{adventure.description}</Typography>
                                {adventure.chapters.map((chapter) => (
                                    <Box>
                                        <Typography variant="body1">
                                            {chapter.description}
                                        </Typography>
                                        {chapter.links.map((link) => (
                                            <Typography variant="body1">
                                                <a href={link.url}></a>
                                                {link.name}
                                            </Typography>
                                        ))}
                                    </Box>
                                ))}
                                <Button
                                    onClick={() =>
                                        navigate(`/adventure/${adventure._id.toString()}`)
                                    }
                                >
                                    View
                                </Button>
                            </StyledPaper>
                        </Accordion>
                        {/* 
                            <StyledPaper>
                            <Typography variant="h6">{adventure.name}</Typography>
                        <Typography variant="body1">{adventure.description}</Typography>
                        <Button onClick={() => navigate(`/adventure/${adventure._id.toString()}`)}>View</Button>
                    </StyledPaper> */}
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default AdventuresList;
