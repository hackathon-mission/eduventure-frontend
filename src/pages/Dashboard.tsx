import Button from "@mui/joy/Button";
import { Box } from "@mui/material";
import { Paper } from "@mui/material";
import BattlePass from "../components/dashboard/BattlePass";
import ContinueAdventures from "../components/dashboard/ContinueAdventures";
import HeroCard from "../components/dashboard/HeroCard";
import NewAdventureButton from "../components/dashboard/NewAdventureButton";
import GuestDashboard from "./GuestDashboard";
import { isLoggedIn } from "../utils/auth";
import { User, Teacher, Item } from "../data/interfaces";
import { useState, useEffect } from "react";
import { serverUrl } from "../data/consts";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { redirect } from "react-router";
import { Link } from "react-router-dom";
import { theme } from "../data/theme";

const Dashboard: React.FC = () => {
  let userLocal: User | Teacher = JSON.parse(
    localStorage.getItem("user") || "{}",
  );
  const [avatar, setAvatar] = useState<Item | null>(null);

  useEffect(() => {
    if (userLocal && userLocal.avatar) {
      fetch(`${serverUrl}/avatar/${userLocal.avatar}`)
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            setAvatar(data);
          }
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return isLoggedIn() ? (
    <Box
      display={"flex"}
      width="100%"
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Avatar
        alt={userLocal.username}
        src={"http://104.248.193.0:3000/" + avatar?.img}
        sx={{ width: 128, height: 128, margin: "auto" }}
      />
      <Link to={"/profile/" + userLocal?._id}>
        <Button variant="outlined" style={{ margin: "20px 0px" }}>
          {userLocal.username}
        </Button>
      </Link>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {(userLocal as Teacher).realname ? (
          <>
            <Paper style={{ padding: "2rem" }}>
              <Typography variant="h5" sx={{ color: theme.colors.primary }}>
                Welcome, {(userLocal as Teacher)?.realname}. Thank you for supporting us.
              </Typography>
            </Paper>
          </>
        ) : (
          <>
            <Typography gutterBottom variant="h5" sx={{ color: theme.colors.primary  }}>
              Welcome, {userLocal?.username}! We're glad you're back.
            </Typography>
            <Paper style={{ padding: "2rem", display:"flex" , flexDirection:"column", gap:"2rem"}}>
              <HeroCard />
              <BattlePass />
            </Paper>
            <NewAdventureButton />
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
