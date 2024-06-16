// src/components/BattlePass.tsx
import React, { useState, useEffect } from "react";
import { Box, LinearProgress, Typography } from "@mui/material";
import ScrollContainer from "react-indiana-drag-scroll";
import RewardItem from "../battlepass/RewardItem";
import { User, Teacher } from "../../data/interfaces";

interface Reward {
  _id: string;
  level: number;
  ticksNeeded: number;
  reward: string | number;
  claimed: boolean;
  rewardIsExp: boolean;
}

const mockRewards: Reward[] = [
  {
    _id: "666dd8da425f02d2e7a26a13",
    level: 1,
    ticksNeeded: 10,
    reward: 500,
    claimed: false,
    rewardIsExp: true,
  },
  {
    _id: "666dd958425f02d2e7a26a14",
    level: 2,
    ticksNeeded: 20,
    reward: "666dca09b072133bf4a26a18",
    claimed: false,
    rewardIsExp: false,
  },
  {
    _id: "666dd97f425f02d2e7a26a16",
    level: 3,
    ticksNeeded: 30,
    reward: 500,
    claimed: false,
    rewardIsExp: true,
  },
  {
    _id: "666dd9fb425f02d2e7a26a17",
    level: 4,
    ticksNeeded: 40,
    reward: "666dca27b072133bf4a26a19",
    claimed: false,
    rewardIsExp: false,
  },
  {
    _id: "666dda0e425f02d2e7a26a18",
    level: 5,
    ticksNeeded: 50,
    reward: 1000,
    claimed: false,
    rewardIsExp: true,
  },
];

const BattlePass: React.FC = () => {
  let userLocal: User  = JSON.parse(
    localStorage.getItem("user") || "{}",
  );
  const [xp, setXp] = useState<number>(150); // Example user XP, you can change this
  const [rewards, setRewards] = useState<Reward[]>(mockRewards);

  const levelsUnlocked = Math.floor(xp / 100);
  const progress = ((xp % 100) / 100) * 100; // percentage

  useEffect(() => {
        setXp(userLocal.xp)
    // Fetch rewards from the server if necessary
    // setRewards(mockRewards);
  }, []);

  return (
    <Box display={"flex"} flexDirection={"column"} gap="1rem">
      <Typography variant="h5" gutterBottom>
        Battle Pass
      </Typography>
      <ScrollContainer
        style={{
          overflowX: "scroll",
          display: "flex",
          gap: "2rem",
          width: "fit-content",
          maxWidth: "100%",
        }}
      >
        {rewards.map((reward) => (
          <RewardItem
            key={reward._id}
            level={reward.level}
            reward={reward.reward}
            claimed={reward.claimed}
            isUnlocked={reward.level <= levelsUnlocked}
          />
        ))}
      </ScrollContainer>
      <Typography variant="body1">
        Current XP: {xp} - Level: {levelsUnlocked}
      </Typography>
      <LinearProgress variant="determinate" value={progress} />
    </Box>
  );
};

export default BattlePass;
