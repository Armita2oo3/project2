import * as React from "react";
import ImageListItem from "@mui/material/ImageListItem";
import { Avatar } from "@mui/material";

export const MarketingImg = () => {
  return (
    <Avatar
      variant="rounded"
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <ImageListItem sx={{ width: "100%", height: "100%" }}>
        <img
          src="https://zone-ui.vercel.app/assets/images/menu/menu_marketing.jpg"
          alt="marketing"
          loading="lazy"
          width="100%"
          height="100%"
        />
      </ImageListItem>
    </Avatar>
  );
};
export const Travel = () => {
  return (
    <Avatar
      variant="rounded"
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <ImageListItem sx={{ width: "100%", height: "100%" }}>
        <img
          src="https://zone-ui.vercel.app/assets/images/menu/menu_travel.jpg"
          alt="travel"
          loading="lazy"
        />
      </ImageListItem>
    </Avatar>
  );
};
export const Career = () => {
  return (
    <Avatar
      variant="rounded"
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <ImageListItem sx={{ width: "100%", height: "100%" }}>
        <img
          src="https://zone-ui.vercel.app/assets/images/menu/menu_career.jpg"
          alt="travel"
          loading="lazy"
        />
      </ImageListItem>
    </Avatar>
  );
};
export const Learning = () => {
  return (
    <Avatar
      variant="rounded"
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <ImageListItem sx={{ width: "100%", height: "100%" }}>
        <img
          src="https://zone-ui.vercel.app/assets/images/menu/menu_elearning.jpg"
          alt="travel"
          loading="lazy"
        />
      </ImageListItem>
    </Avatar>
  );
};
export const Commerce = () => {
  return (
    <Avatar
      variant="rounded"
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <ImageListItem sx={{ width: "100%", height: "100%" }}>
        <img
          src="https://zone-ui.vercel.app/assets/images/menu/menu_ecommerce.jpg"
          alt="travel"
          loading="lazy"
        />
      </ImageListItem>
    </Avatar>
  );
};
