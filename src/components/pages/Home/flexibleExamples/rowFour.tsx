import React from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  Avatar,
  Slider,
  Alert,
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
} from "@mui/material";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import AlignHorizontalLeftRoundedIcon from "@mui/icons-material/AlignHorizontalLeftRounded";
import AddIcon from "@mui/icons-material/Add";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import AlignHorizontalCenterRoundedIcon from "@mui/icons-material/AlignHorizontalCenterRounded";
import AlignHorizontalRightRoundedIcon from "@mui/icons-material/AlignHorizontalRightRounded";
import { deepOrange, red, grey, orange, lightBlue } from "@mui/material/colors";
import { alpha } from "@mui/material/styles";
import AvatarGroup from "@mui/material/AvatarGroup";
import TextsmsRoundedIcon from "@mui/icons-material/TextsmsRounded";


export default function RowFour(){
    return (
      <Grid
        container
        sx={{
          marginTop: 5,
          // display: "flex",
          justifyContent: "center",
        }}
        columnSpacing={2}
      >
        <Grid item xs={12} lg={6}>
          <Slider
            defaultValue={50}
            size="small"
            valueLabelDisplay="on"
            sx={{ color: orange[800] }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Alert
            sx={{ width: "217px", paddingY: "6px", paddingX: "16px" }}
            onClose={() => {}}
          >
            This is a success alert
          </Alert>
        </Grid>
      </Grid>
    );
}