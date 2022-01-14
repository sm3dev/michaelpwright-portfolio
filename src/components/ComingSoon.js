import { Email, GitHub, LinkedIn, Share } from "@mui/icons-material";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
  CardHeader,
  Chip,
  Avatar,
  Stack,
} from "@mui/material";
import React from "react";

export const ComingSoon = () => {
  const [chipData, setChipData] = useState([
    {
      key: 1,
      label: "Connect on LinkedIn",
      url: "https://www.linkedin.com/in/mpw?trk=public-profile-badge-profile-badge-view-profile-cta",
      theIcon: "LinkedIn",
    },
    {
      key: 2,
      label: "Follow on GitHub",
      url: "https://github.com/sm3dev",
      theIcon: "GitHub",
    },
    {
      key: 3,
      label: "Email Me",
      url: "mailto:mrwry7@gmail.com",
      theIcon: "Email",
    },
  ]);

  // use MUI Chips: https://mui.com/components/chips/#basic-chip
  return (
    <div>
      <Box>
        <Card></Card>
      </Box>
    </div>
  );
};
