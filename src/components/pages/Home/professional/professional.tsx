import React from "react";
import {
  Box,
  Grid,
  Button,
  Container,
  Typography,
  ListItemIcon,
} from "@mui/material";

import * as Styles from "../styles";

export default function Professional() {
  return (
    <Styles.ProfessionalBackgroundImg>
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: "12px",
          lineHeight: "18px",
          opacity: 0.48,
          mb: 3,
        }}
      >
        PROFESSIONAL KIT
      </Typography>
      <Styles.ProfessionalTitle>For Designer</Styles.ProfessionalTitle>
      <Button
        variant="contained"
        sx={{
          fontWeight: 700,
          fontSize: "15px",
          lineHeight: "26px",
          color: "white",
          backgroundColor: "#FA541C",
          paddingY: "8px",
          paddingX: "16px",
          textTransform: "none",
          marginTop: 4,
        }}
      >
        Figma WorkSpace <span style={{ marginRight: 8 }}></span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 48 48"
        >
          <g
            fill="none"
            stroke="#FFF"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
          >
            <path d="M28 6H42V20" />
            <path d="M42 29.4737V39C42 40.6569 40.6569 42 39 42H9C7.34315 42 6 40.6569 6 39V9C6 7.34315 7.34315 6 9 6L18 6" />
            <path d="M25.7998 22.1999L41.0998 6.8999" />
          </g>
        </svg>
      </Button>
    </Styles.ProfessionalBackgroundImg>
  );
}
