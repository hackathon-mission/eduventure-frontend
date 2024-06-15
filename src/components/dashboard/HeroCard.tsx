import Grid from "@mui/material/Unstable_Grid2";
import { Stack } from "@mui/system";
import { getExp, getLeaderboardPosition } from "../../utils/mockups";
import ProgressSummary from "./ProgressSummary";
export default function HeroCard() {
    return (
        <Stack>
            <ProgressSummary
                experience={getExp()}
                leaderboardPlace={getLeaderboardPosition()}
            ></ProgressSummary>
        </Stack>
    );
}
