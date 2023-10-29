import React from "react";
import { Box, Typography } from "@mui/material";
import UiImage from "./uiImage";
import * as Styles from "./styles";
export default function UiKit() {
  return (
    <Styles.MainGridHome>
      <Styles.ZoneKit sx={{}} textAlign={"center"}>
        <Box sx={{ backgroundColor: "#F4F6F8", borderRadius: 5 }}>
          <UiImage />
          <Box
            sx={{
              marginTop: "24px",
              marginLeft: "auto",
              marginRight: "auto",
              paddingLeft: "24px",
              paddingRight: "24px",
              maxWidth: "560px",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                paddingTop: 5,
                fontSize: 13,
                fontWeight: 600,
                opacity: 0.4,
                paddingBottom: 4,
              }}
            >
              NEW START
            </Typography>
            <Styles.ZoneKitHeader variant="h2" sx={{ fontWeight: 700 }}>
              The <span style={{ color: "#FA541C" }}>Zone</span> UI Kit
            </Styles.ZoneKitHeader>
            <Typography
              variant="body1"
              sx={{
                paddingTop: 5,
                fontSize: 16,
                opacity: 0.7,
                paddingBottom: "80px",
                color: "#637381",
              }}
            >
              Modern ui kit to save your time,boost your creativity.Neat and
              super stylish layout ready to help with your projects
            </Typography>
          </Box>
        </Box>
      </Styles.ZoneKit>
    </Styles.MainGridHome>
  );
}
