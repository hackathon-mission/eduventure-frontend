import Grid from "@mui/material/Unstable_Grid2";
import { Stack } from "@mui/system";
import { getExp, getLeaderboardPosition } from "../../utils/mockups";
import ProgressSummary from "./ProgressSummary";
import { useEffect, useState } from "react";
import { serverUrl } from "../../data/consts";
import { User } from "../../data/interfaces";
export default function HeroCard() {
  const [users, setUsers] = useState<User[]>([]);
  const userLocal: User = JSON.parse(localStorage.getItem("user") || "{}");
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    fetch(`${serverUrl}/users`)
      .then((res) => res.json())
      .then((data) => {
        data.sort((a: User, b: User) => b.xp - a.xp);
        setUsers(data);
        setIndex(users.findIndex((user) => user.username== userLocal.username) + 1);
      })
      .catch((err) => console.log(err));
  }, );
  return (
    <Stack>
      <ProgressSummary
        experience={userLocal.xp}
        leaderboardPlace={index}
      ></ProgressSummary>
    </Stack>
  );
}
