import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { theme } from "../../data/theme";

interface RewardItemProps {
  level: number;
  reward: string | number;
  claimed: boolean;
  isUnlocked: boolean;
}

const RewardItem: React.FC<RewardItemProps> = ({
  level,
  reward,
  claimed,
  isUnlocked,
}) => {
  return (
    <Box
      sx={{
        border: `2px solid ${theme.colors.primary}`,
        borderRadius: "14px",
        textAlign: "center",
        backgroundColor: isUnlocked ? theme.colors.secondary : "white",
        maxWidth: "250px",
        flexShrink: "0",
      }}
    >
      <Typography variant="h6">Level {level}</Typography>
      <Typography variant="body1">
        Reward: {typeof reward === "number" ? `${reward} XP` : reward}
      </Typography>
      <Typography variant="body2">
        {claimed ? "Claimed" : "Not Claimed"}
      </Typography>
    </Box>
  );
};

export default RewardItem;
