import { Paper } from "@mui/material";
import BattlePass from "../components/dashboard/BattlePass";
import ContinueAdventures from "../components/dashboard/ContinueAdventures";
import HeroCard from "../components/dashboard/HeroCard";
import NewAdventureButton from "../components/dashboard/NewAdventureButton";
import { theme } from "../data/theme";
import { useAuth } from "../features/auth/authContext";
import GuestDashboard from "./GuestDashboard";

const Dashboard: React.FC = () => {
    const { isLoggedIn, userType, user } = useAuth();
    if (!isLoggedIn) {
        return <GuestDashboard />;
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {userType === 'teacher' ? (
                <>
                    <NewAdventureButton />
                    <Paper style={{ padding: "2rem" }}>
                        Welcome, {user?.username} (Teacher)
                        <HeroCard />
                        <BattlePass />
                    </Paper>
                </>
            ) : (
                <>
                    <Paper style={{ padding: "2rem" }}>
                        Welcome, {user?.username} (Student)
                        <HeroCard />
                        <BattlePass />
                    </Paper>
                    <ContinueAdventures />
                </>
            )}
        </div>
    );
};


export default Dashboard;
