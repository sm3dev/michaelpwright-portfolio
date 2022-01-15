import { Devices, Email, GitHub, LinkedIn, Share } from "@mui/icons-material";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Chip,
  Stack,
  ListItem,
  Typography,
  Divider,
} from "@mui/material";
import React from "react";
import a from "sass-node/lib/a";

export const ComingSoon = () => {
  let pageURL = encodeURI(document.location.href);
  const socialChips = [
    {
      key: 1,
      label: "Connect on LinkedIn",
      url: "https://www.linkedin.com/in/mpw?trk=public-profile-badge-profile-badge-view-profile-cta",
      connectType: "LinkedIn",
    },
    {
      key: 2,
      label: "Follow on GitHub",
      url: "https://github.com/sm3dev",
      connectType: "GitHub",
    },
    {
      key: 3,
      label: "Email Me",
      url: "mailto:mrwry7@gmail.com",
      connectType: "Email",
    },
  ];

  // use MUI Chips: https://mui.com/components/chips/#basic-chip
  return (
    <>
      <Box
        className="mainBox"
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 4,
          alignItems: "center",
        }}
      >
        <Card sx={{ maxWidth: 345, m: 1 }} className="card">
          <CardContent className="card-content__block" sx={{ p: 0 }}>
            <Box
              className="card-header__block"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                pb: 4,
                alignItems: "center",
              }}
            >
              {" "}
              <Devices fontSize="large" sx={{ m: 2 }} />
              <Typography
                variant="h5"
                component="div"
                className="card__title text__all-caps"
              >
                Let's Connect!
              </Typography>
            </Box>
            <Stack className="card-content__action-stack">
              {socialChips.map((data) => {
                let icon;

                if (data.connectType === "LinkedIn") {
                  icon = <LinkedIn />;
                } else if (data.connectType === "GitHub") {
                  icon = <GitHub />;
                } else if (data.connectType === "Email") {
                  icon = <Email />;
                }

                return (
                  <>
                    <ListItem key={data.key}>
                      <Chip
                        icon={icon}
                        label={data.label}
                        component="a"
                        href={data.url}
                        target="_blank"
                        clickable
                        color="default"
                        size="medium"
                      />
                    </ListItem>
                    <Divider light />
                  </>
                );
              })}
            </Stack>
          </CardContent>
          <CardActions>
            <Button color="primary" component="a" href={pageURL} title="share my card">
              SHARE THIS CARD{" "}
            </Button>
            <Button color="primary" variant="contained">DOWNLOAD RÉSUMÉ</Button>
          </CardActions>
        </Card>
        <Card>
          <Typography>
            Have you visited the NSS Cohort 51 Website built by me and my 3
            UI/UX Front-End <del>teammates</del> wizards?
          </Typography>
        </Card>
      </Box>
    </>
  );
};
