import React from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  Avatar,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  IconButton,
  CardActions,
  Badge,
  FormControlLabel,
  Checkbox,
  Radio,
  Container,
  Switch,
  Stack,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { deepOrange, red, grey, orange, lightBlue } from "@mui/material/colors";
import TextsmsRoundedIcon from "@mui/icons-material/TextsmsRounded";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import * as Styles from "./../styles";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function RowFive() {
  // radio Button
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleRadioChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });
  //Text Field
  const categories = [
    {
      value: "Clothes",
      label: "Clothes",
    },
    {
      value: "Footwear",
      label: "Footwear",
    },
    {
      value: "Jeans",
      label: "Jeans",
    },
  ];
  // heart Button

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <Grid
      container
      sx={{
        marginTop: 3,
        display: "flex",
        justifyContent: "space-around",
        // marginBottom: 5,
      }}
    >
      <Grid
        item
        // xs={12} sm={5} md={12}
        lg={7}
      >
        <Card sx={{ maxWidth: "320px", borderRadius: 4, width: "100%" }}>
          <CardHeader
            title="Jayvion Simon"
            subheader="California,United States"
            sx={{ textAlign: "left" }}
            avatar={
              <Badge
                overlap="circular"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                variant="dot"
                color="success"
              >
                <Avatar
                  sx={{ marginRight: 1 }}
                  src="https://zone-ui.vercel.app/assets/images/avatar/avatar_1.jpg"
                />
              </Badge>
            }
          ></CardHeader>
          <CardMedia
            component="img"
            image="https://zone-ui.vercel.app/assets/images/cover/cover_12.jpg"
            alt="Galaxy image"
            sx={{
              borderRadius: 4,
              maxWidth: "304px",
              marginLeft: 1,
              height: "171px",
              width: "100%",
            }}
          />
          <CardContent>
            <Typography
              variant="body2"
              color="text.secondary"
              textAlign={"left"}
            >
              Phasellus dolor.Fusce egestas elit egat lorem.Quisque id odio.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <Grid container>
              <Grid
                item
                xs={6}
                sx={{ display: "flex", justifyContent: "flex-start" }}
              >
                <IconButton aria-label="add to favorites">
                  <Checkbox
                    {...label}
                    icon={<FavoriteBorderIcon />}
                    checkedIcon={<FavoriteIcon sx={{ color: "red" }} />}
                  />
                </IconButton>
              </Grid>

              <Grid
                item
                xs={6}
                sx={{ display: "flex", justifyContent: "flex-end" }}
              >
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton aria-label="comment ">
                  <TextsmsRoundedIcon />
                </IconButton>
              </Grid>
            </Grid>
          </CardActions>
        </Card>
      </Grid>
      <Grid
        item
        lg={5}
        sx={{
          display: "flex",
          justifyContent: "center",

          marginTop: 3,
        }}
      >
        <Grid
          item
          // sx={{ textAlign: "center !important" }}
          // xs={12}
          // sm={6}
          // md={12}

          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            alignItems: "left",
          }}
        >
          {/* <Box sx={{ display: "flex", justifyContent: "left" }}> */}
          <Grid
            item
            sx={{
              display: "flex",
              //   justifyContext: "flex-start",
              //   alignSelf: "flex-start",
            }}
          >
            {/* <Stack
                      direction="row"
                      sx={{ marginTop: 2, marginLeft: 2 }}
                      spacing={1}
                    > */}
            <Styles.AntSwitch
              defaultChecked
              inputProps={{ "aria-label": "ant design" }}
              sx={{ marginRight: 1 }}
            />
            <Typography>Switch</Typography>
            {/* </Stack> */}
          </Grid>

          <Grid item sx={{ alignSelf: "flex-start" }}>
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: grey[500],
                    "&.Mui-checked": {
                      color: deepOrange[600],
                    },
                  }}
                  defaultChecked
                />
              }
              label="Checkbox"
              color="deepOrange[700]"
            />
          </Grid>
          <Grid item sx={{ alignSelf: "flex-start" }}>
            <FormControlLabel
              value="end"
              control={
                <Radio
                  {...controlProps("a")}
                  sx={{
                    color: deepOrange[700],
                    "&.Mui-checked": {
                      color: deepOrange[700],
                    },
                  }}
                />
              }
              label="Radio Button"
            />
          </Grid>
          <Grid item sx={{ width: "100%" }}>
            <FormControl
              sx={{ m: 1, width: 1 }}
              //  sx={{ m: 1, width: "25ch" }}
              variant="outlined"
            >
              <TextField
                label="Full Name"
                defaultValue="Pamela Mclellan"
                sx={{
                  //   width: "25ch",
                  borderRadius: 2,
                  // backgroundColor: grey[50],
                  color: "black",
                }}
                variant="filled"
                InputProps={{
                  startAdornment: (
                    <InputAdornment
                      position="start"
                      sx={{ border: "none" }}
                    ></InputAdornment>
                  ),
                }}
              />{" "}
            </FormControl>
            {/* </FormControl> */}
            {/* </Grid>
          <Grid item sx={{ width: 1 }}> */}
            <FormControl
              sx={{ m: 1, width: 1 }}
              // sx={{ m: 1, width: "25ch" }}
              variant="outlined"
            >
              <TextField
                id="filled-select-currency"
                select
                label="Category"
                defaultValue="Clothes"
                // variant="standard"
                fullWidth
                sx={{
                  borderRadius: 2,
                  // backgroundColor: grey[50],
                  color: "black",
                  textAlign: "left",
                }}
                variant="filled"
              >
                {categories.map((option) => (
                  <MenuItem
                    sx={{ textAlign: "left" }}
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </FormControl>
          </Grid>
          {/* </Box> */}
        </Grid>
      </Grid>
    </Grid>
  );
}
