import { Typography } from "@mui/material";

interface DashboardProgressInfo {
  experience: number;
  leaderboardPlace: number;
}
function getNumericSuffix(number: number): string {
  let j = number % 10,
    k = number % 100;
  if (j === 1 && k !== 11) {
    return "st";
  }
  if (j === 2 && k !== 12) {
    return "nd";
  }
  if (j === 3 && k !== 13) {
    return "rd";
  }
  return "th";
}

export default function ProgressSummary(props: DashboardProgressInfo) {
  return (
    <Typography variant="h5">
      This week you have earned {props.experience} experience, placing{" "}
      {props.leaderboardPlace}
      {getNumericSuffix(props.leaderboardPlace)} in the leaderboard. Great work!
    </Typography>
  );
}
