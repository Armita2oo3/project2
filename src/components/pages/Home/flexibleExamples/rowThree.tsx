import React from "react";
import { Grid, Button, Avatar, Tooltip, Rating } from "@mui/material";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { grey } from "@mui/material/colors";
import AvatarGroup from "@mui/material/AvatarGroup";
// rating

export default function RowThree() {
  const [ratingValue, setRatingValue] = React.useState<number | null>(5);
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: 5,
      }}
      rowSpacing={2}
    >
      <Grid item>
        {/* solo Avatar */}
        <Avatar
          sx={{
            marginRight: 3,
            width: 64,
            height: 64,
          }}
          alt="avatar solo"
          src="https://zone-ui.vercel.app/assets/images/avatar/avatar_5.jpg"
        />
      </Grid>
      {/* Avatar Group  */}
      <Grid item>
        <AvatarGroup
          total={8}
          sx={{
            marginTop: 1,
            "& .MuiAvatarGroup-avatar": {
              color: "#C95A47",
              backgroundColor: "#FEE9D1",
              fontSize: 12,
            },
          }}
        >
          <Avatar
            alt="Avatar1 "
            src="https://zone-ui.vercel.app/assets/images/avatar/avatar_1.jpg"
          />
          <Avatar
            alt="Avatar2"
            src="https://zone-ui.vercel.app/assets/images/avatar/avatar_2.jpg"
          />
          <Avatar
            alt="Avatar3"
            src="https://zone-ui.vercel.app/assets/images/avatar/avatar_3.jpg"
          />
        </AvatarGroup>
      </Grid>
      {/* Tooltip */}
      <Grid item>
        <Tooltip title="Add" disableFocusListener disableTouchListener arrow>
          <Button
            sx={{
              ":hover": { backgroundColor: grey[200] },
              color: "black",
              fontWeight: 600,
              fontSize: 11,
              paddingX: 1,
              height: "40px",
              marginTop: 1,
              marginX: 2,
            }}
          >
            Hover Me
          </Button>
        </Tooltip>
      </Grid>
      {/* rating */}
      <Grid item>
        <Rating
          name="simple-controlled"
          value={ratingValue}
          onChange={(event, newRatingValue) => {
            setRatingValue(newRatingValue);
          }}
          sx={{
            marginTop: 1,
            "& .MuiRating-iconFilled": {
              color: "#FAAF00",
            },
            "& .MuiRating-iconHover": {
              color: "#FAAF00",
            },
          }}
          size="large"
          icon={<StarRoundedIcon fontSize="large" />}
          emptyIcon={
            <StarRoundedIcon sx={{ color: " grey[50]" }} fontSize="large" />
          }
        />
      </Grid>
    </Grid>
  );
}
