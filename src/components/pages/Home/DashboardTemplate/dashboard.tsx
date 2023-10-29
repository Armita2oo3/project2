import React from "react";
import {
  Box,
  Grid,
  Button,
  Container,
  Typography,
  ListItemIcon,
  Stack,
  Chip,
  Divider,
  ImageListItem,
} from "@mui/material";
import * as Styles from "../styles";

export default function Dashboard() {
  return (
    <Box sx={{ position: "relative", overflowX: "clip" }}>
      <Styles.MainDashboard>
        <Styles.MainBoxDashboard
          sx={{
            backgroundColor: "#F4F6F8",
          }}
        >
          <Styles.DashboardStack direction="row">
            <Box>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "12px",
                  color: "#919EAB",
                }}
              >
                PERFECT COMBINATION
              </Typography>
              <Styles.Dashboard>
                Looking For a <br /> Dashboard Template?
              </Styles.Dashboard>{" "}
              <Styles.DashboardMiniText>
                Minimal UI Kit is a professional dashboard used by many of our
                clients.
              </Styles.DashboardMiniText>
            </Box>
          </Styles.DashboardStack>
          <Box>
            <ImageListItem
              sx={{
                width: "60%",
                display: { xs: "none", md: "block" },
                position: "absolute",
                top: -30,
                right: -30,
              }}
            >
              <img
                src="https://zone-ui.vercel.app/assets/images/home/minimal_dashboard.png"
                alt="Ui kit"
              />
            </ImageListItem>
          </Box>
          <Stack
            direction="row"
            sx={{ justifyContent: "center", marginTop: 8 }}
          >
            <ImageListItem
              sx={{
                width: "100%",
                display: { xs: "block", md: "none" },
              }}
            >
              <img
                src="https://zone-ui.vercel.app/assets/images/home/minimal_dashboard.png"
                alt="Ui kit"
              />
            </ImageListItem>
          </Stack>
        </Styles.MainBoxDashboard>
      </Styles.MainDashboard>
    </Box>
  );
}
