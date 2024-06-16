import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import ConstestCard from "../components/arena/ContestCard";
import ScrollContainer from "react-indiana-drag-scroll";
import { useRef, useEffect } from "react";
import {
    getDailyArenaContests,
    getWeeklyArenaContests,
} from "../utils/mockups";
export default function BattleArena() {
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        ref.current?.scrollTo({
            left: 0,
        });
    }, []);
    return (
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"} overflow="auto" width="100%">
            <Typography variant="h5" component="div">
                Daily Contests
            </Typography>
            <ScrollContainer  style={{overflowX:"scroll", display:"flex" , gap:"2rem", width:"fit-content", maxWidth:"100%"}}>
                {getDailyArenaContests().map((contest) => (
                    <ConstestCard
                        key={contest.name}
                        name={contest.name}
                        description={contest.description}
                        startDate={contest.startDate}
                        endDate={contest.endDate}
                    ></ConstestCard>
                ))}
            </ScrollContainer>
            <Typography variant="h5" component="div">
                Weekly Contests
            </Typography>
            <ScrollContainer  style={{overflowX:"scroll", display:"flex" , gap:"2rem", width:"fit-content", maxWidth:"100%"}}>
            {getWeeklyArenaContests().map((contest) => (
                <ConstestCard
                    key={contest.name}
                    name={contest.name}
                    description={contest.description}
                    startDate={contest.startDate}
                    endDate={contest.endDate}
                ></ConstestCard>
            ))}
            </ScrollContainer>
        </Box>
    );
}
