import React from "react";
import {
  Box,
  Typography,
  Grid,
  ListItemButton,
  ListItemIcon,
  ListItem,
  List,
  Button,
  Avatar,
  Stack,
  CircularProgress,
  Tabs,
  Tab,
  Chip,
  Tooltip,
  Rating,
  Slider,
  Alert,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  IconButton,
  CardActions,
  Badge,
  Switch,
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

import * as Styles from "./../styles";
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

//

export default function RowOne() {
  // Loading Icon
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Grid
      container
      rowSpacing={2}
      columnSpacing={2}
      sx={{ display: "flex", justifyContent: "space-evenly" }}
    >
      <Grid item>
        <Button
          sx={{
            borderRadius: 2,
            color: "white",
            fontWeight: 700,
            paddingY: "8px",
            paddingX: "16px",
            textTransform: "none",
            backgroundColor: "#FA541C",
            fontSize: "15px",
          }}
        >
          <AddIcon fontSize="small" />
          Add To Cart
        </Button>
      </Grid>
      <Grid item>
        <Button
          sx={{
            borderRadius: 10,
            color: "white",
            fontWeight: 600,
            paddingY: "8px",
            paddingX: "16px",
            textTransform: "none",
            backgroundColor: "black",

            fontSize: "14px",
          }}
        >
          <CloudUploadOutlinedIcon fontSize="small" />
          <span style={{ marginRight: "5px" }}> </span>
          Upload
        </Button>
      </Grid>
      <Grid item>
        <Button sx={{ padding: 0, margin: 0 }}>
          <Avatar
            sx={{
              color: "white",
              fontWeight: 700,

              backgroundColor: lightBlue[300],
              width: 56,
              height: 56,
            }}
          >
            <SubscriptionsOutlinedIcon
              fontSize="small"
              sx={{ color: "white" }}
            />
          </Avatar>
        </Button>
      </Grid>
      <Grid item>
        <Button sx={{ width: 40, height: 40 }}>
          <CircularProgress
            variant="determinate"
            value={progress}
            sx={{ color: "orange" }}
          />
        </Button>
      </Grid>
    </Grid>
  );
}
