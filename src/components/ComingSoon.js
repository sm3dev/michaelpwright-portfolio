import {
  Devices,
  Download,
  Email,
  GitHub,
  LinkedIn,
  Share,
} from "@mui/icons-material";
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
  IconButton,
} from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import React from "react";

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
          backgroundColor: blueGrey.A100,
          backgroundImage: `linear-gradient(to bottom right, ${blueGrey.A100}, ${blueGrey.A300})`,
        }}
      >
        <Card
          sx={{
            maxWidth: 345,
            m: 1,
            flexGrow: 1,
            flexShrink: 0,
          }}
          className="card social__card"
        >
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
            <Stack
              className="card-content__action-stack"
              direction="column"
              spacing={1}
            >
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
                  <ListItem key={data.key}>
                    <Chip
                      key={data.key}
                      icon={icon}
                      label={data.label}
                      component="a"
                      href={data.url}
                      target="_blank"
                      clickable
                      color="info"
                      size="medium"
                    />
                  </ListItem>
                );
              })}
            </Stack>
          </CardContent>
          <CardActions>
            <IconButton
              color="info"
              aria-label="share"
              component="a"
              // href={pageURL}
              title="share my card"
              onClick={() => {
                console.log(pageURL);
              }}
            >
              <Share />
            </IconButton>
            <Button color="info" variant="outlined" startIcon={<Download />}>
              Résumé PDF
            </Button>
          </CardActions>
        </Card>
        <Card className="card card__c51-info">
          <CardContent>
            <Typography>
              Have you visited the NSS Cohort 51 Website built by me and my 3
              UI/UX Front-End <del>teammates</del> wizards?
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};
