import React from "react";
import { Box, ImageListItem } from "@mui/material";

export default function UiImage() {
  return (
    <ImageListItem sx={{ width: "100%", height: "100%", margin: "0px auto" }}>
      <img
        src="https://zone-ui.vercel.app/assets/images/home/new_start.png"
        alt="Ui kit"
      />
    </ImageListItem>
  );
}
