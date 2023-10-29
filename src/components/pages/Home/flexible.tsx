import React from "react";
import { Box, Grid, Button, Container } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { grey } from "@mui/material/colors";
import RowTwo from "./flexibleExamples/rowTwo";
import RowOne from "./flexibleExamples/rowOne";
import RowThree from "./flexibleExamples/rowThree";
import RowFour from "./flexibleExamples/rowFour";
import * as Styles from "./styles";
import RowFive from "./flexibleExamples/rowFive";

//
export default function Flexible() {
  return (
    <Container
      sx={{
        // justifyContent: "space-between",
        // WebkitBoxPack: "justify",
        // webkitJustifyContent: "space-between",
        padding: 0,
        width: "100%",
      }}
    >
      <Grid container>
        <Grid item xs={12} md={5}>
          <Box
            sx={{ paddingTop: "80px", padding: "14px", paddingBottom: "24px" }}
          >
            <Styles.Description
              variant="body1"
              sx={{
                fontSize: "12px",
                fontWeight: 600,
                opacity: 0.4,
              }}
            >
              INTERFACE STARTER KIT
            </Styles.Description>
            <Styles.FlexibleHeader sx={{ width: 1 }} variant="body1">
              Flexible Components
            </Styles.FlexibleHeader>
            <Styles.Description
              variant="body2"
              sx={{
                fontSize: 16,
                opacity: 0.5,
              }}
            >
              Pre-set components are easy to customize and use. We collected
              most popular elements. Menu, sliders, buttons, inputs etc. are all
              here. Just dive in!
            </Styles.Description>
            <Styles.ComponentsBtnBox>
              <Button
                sx={{
                  border: "0.5px solid gray",
                  borderRadius: 2,
                  color: "black",
                  fontWeight: 600,
                  paddingY: "7px",
                  paddingX: "16px",
                  textTransform: "none",
                  alignContent: "center",
                }}
              >
                Browse Components <KeyboardArrowRightIcon />
              </Button>
            </Styles.ComponentsBtnBox>
          </Box>
        </Grid>

        <Grid sx={{ padding: "20px" }} md={7} xs={12} item>
          <Grid
            container
            sx={{
              border: ` 0.5px solid ${grey[200]}`,
              borderRadius: 7,
              textAlign: "center",
              padding: "24px",
              paddingTop: "34px",
            }}
          >
            <RowOne />
            <RowTwo />
            <RowThree />
            <RowFour />
            <RowFive />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
