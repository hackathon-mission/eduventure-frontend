import { Button } from "@mui/base";
import { Box } from "@mui/material";
import { Paper } from "@mui/material";
import BattlePass from "../components/dashboard/BattlePass";
import ContinueAdventures from "../components/dashboard/ContinueAdventures";
import HeroCard from "../components/dashboard/HeroCard";
import NewAdventureButton from "../components/dashboard/NewAdventureButton";
import { theme } from "../data/theme";
import { useAuth } from "../features/auth/authContext";
import GuestDashboard from "./GuestDashboard";
import { isLoggedIn } from "../utils/auth";
import { User, Teacher } from "../data/interfaces";

const Dashboard: React.FC = () => {
    let user: User | Teacher = JSON.parse(localStorage.getItem("user") || "{}");

    return isLoggedIn() ? (
        <Box display={"flex"} width="100%" flexDirection={"column"} alignItems={"center"} justifyContent={'center'}>
            <Button style={{ margin: "20px 0px" }} href={"/profile/" + user?._id}>Go to profile</Button>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {(user as Teacher).realname ? (
                    <>
                        <Paper style={{ padding: "2rem" }}>
                            Welcome, {user?.username} (Teacher)
                            <HeroCard />
                        </Paper>
                    </>
                ) : (
                    <>
                        <NewAdventureButton />
                        <Paper style={{ padding: "2rem" }}>
                            Welcome, {user?.username} (Student)
                            <HeroCard />
                            <BattlePass />
                        </Paper>
                        <ContinueAdventures />
                    </>
                )}
            </div>
        </Box>
    ) : (
        <GuestDashboard />
    );
};

export default Dashboard;
