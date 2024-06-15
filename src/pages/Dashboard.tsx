import { Paper } from "@mui/material";
import BattlePass from "../components/dashboard/BattlePass";
import ContinueAdventures from "../components/dashboard/ContinueAdventures";
import HeroCard from "../components/dashboard/HeroCard";
import { theme } from "../data/theme";
export default function Dashboard() {
    return (
        <div style={{display:"flex",flexDirection:"column", gap:"1rem"}}>
            <Paper style={{ color: theme.colors.secondary, padding: "2rem" }}>
                This is the dashboard
                <HeroCard></HeroCard>
                <BattlePass></BattlePass>
            </Paper>
            <ContinueAdventures></ContinueAdventures>
        </div>
    );
}
