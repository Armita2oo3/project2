import React from "react";
import { Grid, Avatar, Stack, Tabs, Tab, Chip } from "@mui/material";
import * as Styles from "./../styles";
import AlignHorizontalLeftRoundedIcon from "@mui/icons-material/AlignHorizontalLeftRounded";
import ToggleButton from "@mui/material/ToggleButton";
import AlignHorizontalCenterRoundedIcon from "@mui/icons-material/AlignHorizontalCenterRounded";
import AlignHorizontalRightRoundedIcon from "@mui/icons-material/AlignHorizontalRightRounded";
import { red, grey } from "@mui/material/colors";
import { alpha } from "@mui/material/styles";
//
export default function RowTwo() {
  // Delete
  function handleDelete() {
    return;
  }

  // Toggle Button Group

  const [alignment, setAlignment] = React.useState("left");

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };
  // Tabs
  const [value, setValue] = React.useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Grid
      container
      rowSpacing={2}
      sx={{
        marginTop: 2,
        display: "flex",
        justifyContent: "center",
        // justifyContent: "space-around",
      }}
      columnSpacing={4}
    >
      <Grid item>
        {/* <Stack alignItems={"center"} alignContent={"center"}> */}
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="inherit"
          // indicatorColor="grey[900]"
          sx={{
            padding: 0,
            margin: 0,
            ".css-1aquho2-MuiTabs-indicator": {
              backgroundColor: "black",
            },
            display: "flex",
          }}
        >
          <Tab
            value="one"
            sx={{ fontSize: 12, padding: 0, margin: 0 }}
            label="Angular"
          />
          <Tab
            value="two"
            sx={{
              fontSize: 12,
              padding: 0,
              margin: 0,
            }}
            label="React"
          />
          <Tab
            value="three"
            sx={{ fontSize: 12, padding: 0, margin: 0 }}
            label="Vue"
          />
        </Tabs>
        {/* </Stack> */}
      </Grid>

      {/* Toggle Button */}
      <Grid item>
        <Styles.StyledToggleButtonGroup
          size="small"
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
          color="warning"
          sx={{
            border: `1px solid ${grey[200]}`,
            padding: 0.1,
          }}
        >
          <ToggleButton value="left" aria-label="left aligned">
            <AlignHorizontalLeftRoundedIcon fontSize="small" />
          </ToggleButton>
          <ToggleButton value="center" aria-label="centered">
            <AlignHorizontalCenterRoundedIcon fontSize="small" />
          </ToggleButton>
          <ToggleButton value="right" aria-label="right aligned">
            <AlignHorizontalRightRoundedIcon fontSize="small" />
          </ToggleButton>
        </Styles.StyledToggleButtonGroup>
      </Grid>

      {/* Chip */}
      <Grid
        item
        // xs={3} sm={2} md={12} lg={3}
        sx={{ marginTop: 1 }}
      >
        <Chip
          sx={{
            bgcolor: alpha(red[700], 0.2),
            borderRadius: 2,
          }}
          onDelete={handleDelete}
          avatar={
            <Avatar sx={{ bgcolor: red[900] }}>
              <span style={{ color: "white" }}>P</span>
            </Avatar>
          }
          label="Pamela"
        />{" "}
      </Grid>
    </Grid>
  );
}
