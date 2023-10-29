import React from "react";
import { Typography } from "@mui/material";
import * as Styles from "../styles";

export default function Logo() {
  return (
    <Styles.LogoContainer>
      <svg width="64px" height="64px" fill="none" viewBox="0 0 512 512">
        <ellipse
          cx="405.143"
          cy="338.571"
          fill="#FA541C"
          rx="82.857"
          ry="82.857"
        ></ellipse>
        <path
          fill="currentColor"
          d="M114.742 355.332H256v66.097H24v-61.376l140.323-203.956H24V90h232v61.376L114.742 355.332z"
        ></path>
      </svg>
      <Typography
        sx={{
          fontSize: "12px",
          lineHeight: 1.5,
          fontWeight: 400,
          color: "#637381",
        }}
      >
        © 2023. All rights reserved
      </Typography>
    </Styles.LogoContainer>
  );
}
