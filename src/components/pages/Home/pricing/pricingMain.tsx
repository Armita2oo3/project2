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
} from "@mui/material";
import * as Styles from "../styles";
import { shadows } from "@mui/system";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import StandardPricing from "./standardPricing";
import PlusPricing from "./plusPricing";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import ExtendedPricing from "./extendedPricing";
export default function PricingMain() {
  return (
    <Styles.PricingBox sx={{ marginBottom: 8 }}>
      <Box sx={{ marginBottom: "80px" }}>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: "12px",
            lineHeight: "18px",
            opacity: 0.48,
            mb: 3,
          }}
        >
          PRICING PLANS
        </Typography>
        <Styles.ProfessionalTitle sx={{ marginY: "24px" }}>
          The Right Plan
          <br /> For Your Business
        </Styles.ProfessionalTitle>
        <Typography
          sx={{
            fontSize: "16px",
            color: "#637381",
          }}
        >
          Choose the perfect plan for your needs. Always flexible to grow
        </Typography>
      </Box>
      <Grid
        container
        gap={3}
        sx={{ display: "flex", justifyContent: "space-evenly" }}
      >
        {/* Standard */}
        <Grid
          item
          md={3.5}
          xs={12}
          sx={{
            boxShadow: 1,
            borderRadius: 5,
            padding: "40px",
            marginTop: 5,
            backgroundColor: "white",
            height: "100%",
          }}
        >
          <Stack spacing={3}>
            <StandardPricing />
            <Stack direction="row" spacing={3}>
              <Stack sx={{ flex: 1 }}>
                <Button
                  variant="outlined"
                  color="inherit"
                  sx={{
                    fontWeight: 700,
                    fontSize: "15px",
                    paddingY: "8px",
                    paddingX: "16px",
                    textTransform: "none",
                    width: "100%",
                    borderRadius: 3,
                    border: "1px solid gray",
                  }}
                >
                  Choose Package
                </Button>
              </Stack>
            </Stack>
            <Stack
              direction="row"
              spacing={3}
              sx={{
                justifyContent: "flex-end",
              }}
            >
              <Typography
                sx={{
                  textAlign: "right",
                  fontSize: "14px",
                  color: "#627381",
                  fontWeight: 400,
                  display: "flex",
                }}
              >
                Read license{" "}
                <KeyboardArrowRightOutlinedIcon
                  sx={{
                    textAlign: "right",
                    color: "#627381",
                    fontWeight: 400,
                  }}
                />
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        {/* Plus */}
        <Grid
          item
          md={3.5}
          xs={12}
          sx={{
            boxShadow: 6,
            borderRadius: 5,
            paddingTop: "50px",
            paddingX: "40px",
            backgroundColor: "white",
            height: "100%",
            paddingBottom: "80px",
          }}
        >
          <Grid>
            <Chip
              size="medium"
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                color: "#006C9C",
                padddingX: "6px",
                fontSize: "11px",
                height: "24px",
                maxWidth: "80px",
                borderRadius: "6px",
                alignItems: "center",
                backgroundColor: "rgba(0,184,217,0.16)",
                width: "100%",
                fontWeight: 700,
                marginBottom: "10px",
              }}
              label="POPULAR"
            />
            {/* </Box> */}
            <Stack spacing={3}>
              <PlusPricing />
              <Stack direction="row" spacing={3}>
                <Stack sx={{ flex: 1 }}>
                  <Button
                    variant="contained"
                    sx={{
                      fontWeight: 700,
                      fontSize: "15px",
                      paddingY: "8px",
                      paddingX: "16px",
                      textTransform: "none",
                      width: "100%",
                      borderRadius: 3,
                      border: "1px solid black",

                      color: "white",
                      backgroundColor: "black",
                    }}
                  >
                    Choose Package
                  </Button>
                </Stack>
              </Stack>
              <Stack
                direction="row"
                spacing={3}
                sx={{
                  justifyContent: "flex-end",
                }}
              >
                <Typography
                  sx={{
                    textAlign: "right",
                    fontSize: "14px",
                    color: "#627381",
                    fontWeight: 400,
                    display: "flex",
                  }}
                >
                  Read license{" "}
                  <KeyboardArrowRightOutlinedIcon
                    sx={{
                      textAlign: "right",
                      color: "#627381",
                      fontWeight: 400,
                    }}
                  />
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
        {/* Extended */}
        <Grid
          item
          md={3.5}
          xs={12}
          sx={{
            boxShadow: 1,
            borderRadius: 5,
            padding: "40px",
            marginTop: 5,
            backgroundColor: "white",
            height: "100%",
          }}
        >
          <Stack spacing={3}>
            <ExtendedPricing />
            <Stack direction="row" spacing={3}>
              <Stack sx={{ flex: 1 }}>
                <Button
                  variant="contained"
                  sx={{
                    fontWeight: 700,
                    fontSize: "15px",
                    paddingY: "8px",
                    paddingX: "16px",
                    textTransform: "none",
                    width: "100%",
                    borderRadius: 3,
                    border: "1px solid #FA541C",
                    backgroundColor: "#FA541C",
                  }}
                >
                  Choose Package
                </Button>
              </Stack>
            </Stack>
            <Stack
              direction="row"
              spacing={3}
              sx={{
                justifyContent: "flex-end",
              }}
            >
              <Typography
                sx={{
                  textAlign: "right",
                  fontSize: "14px",
                  color: "#627381",
                  fontWeight: 400,
                  display: "flex",
                }}
              >
                Read license{" "}
                <KeyboardArrowRightOutlinedIcon
                  sx={{
                    textAlign: "right",
                    color: "#627381",
                    fontWeight: 400,
                  }}
                />
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Styles.PricingBox>
  );
}
