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
  Tooltip,
} from "@mui/material";
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
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          p: 2,
        }}
      >
        {" "}
        <section>
          <Typography
            color="default"
            variant="subtitle1"
            fontSize="18"
            component="div"
          >
            Hi, Michael P Wright!
          </Typography>
          <Typography color="info" variant="subtitle2">
            Welcome to my portfolio. We're under construction at the moment.{" "}
          </Typography>
        </section>
      </Box>
      <Box
        id="mainBox"
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 2,
          alignItems: "center",
        }}
      >
        <Card
          sx={{
            maxWidth: 345,
            m: 1,
            flexGrow: 0,
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
              disabled
            >
              <Share />
            </IconButton>
            <Button disabled color="info" variant="outlined" startIcon={<Download />}>
              Résumé PDF
            </Button>
          </CardActions>
        </Card>
        <Card
          sx={{
            maxWidth: 480,
            m: 1,
            flexGrow: 0,
            flexShrink: 1,
          }}
          className="card card__c51-info"
        >
          <CardContent>
            <Typography variant="body1">
              Have you visited the{" "}
              <Tooltip
                title="Nashville Software School"
                disableFocusListener
                disableTouchListener
                arrow
                placement="top"
              >
                <span>NSS</span>
              </Tooltip>{" "}
              Cohort 51 Website built by me and my three UI/UX Front-End{" "}
              <del>teammates</del> student-friend-wizards?
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="outlined"
              component="a"
              target="_blank"
              title="Visit C51 Website"
              href="https://nss-day-cohort-51.github.io/"
            >
              Live NSS C51 Website
            </Button>
            <Button
              variant="outlined"
              component="a"
              target="_blank"
              title="Visit C51 GitHub Repository"
              href="https://github.com/nss-day-cohort-51/nss-day-cohort-51.github.io"
            >
              NSS Cohort 51 Repo
            </Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
};
