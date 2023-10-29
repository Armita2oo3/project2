import * as React from "react";
import { ImageListItem } from "@mui/material";

export default function WovenImageList() {
  return (
    <ImageListItem
      sx={{
        height: "100vh",
        maxWidth: "100vw",
        width: "100%",
      }}
    >
      <img
        src="https://zone-ui.vercel.app/assets/images/home/home_hero.png"
        alt="home hero"
        loading="lazy"
      />
    </ImageListItem>
  );
}
