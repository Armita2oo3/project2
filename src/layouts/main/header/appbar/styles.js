import {
  ListItemButton,
  styled,
  List,
  ListItem,
  Box,
  Menu,
  Grid,
  Typography,
} from "@mui/material";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Barlow:wght@600&family=Poppins&family=Rubik:wght@300;400;500;700&display=swap');
</style>;
import Paper from "@mui/material/Paper";
// export const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));
export const Title = styled(ListItemButton)({
  fontWeight: 700,
  fontSize: "0.8rem",
  lineHeight: 1.5,
  color: "black",
  padding: 0,
  "&:hover": {
    opacity: 0.5,
  },
});
export const Items = styled(ListItemButton)({
  opacity: 0.8,
  marginLeft: 0,
  marginRight: 0,
  fontSize: 14,

  "&:hover": {
    opacity: 1,
  },
  fontFamily: "inherit",
  width: "100%",
});
export const Boxes = styled(Grid)({
  backgroundColor: "#F4F6F8",
  width: "100vw",
  margin: 0,
  padding: 0,
});
export const TitleFull = styled(List)({
  fontWeight: 700,
  fontSize: "0.875rem",
  lineHeight: 1.5,
  color: "black",
  "&:hover": {
    opacity: 0.5,
  },
});

export const ListTitle = styled(ListItem)({
  fontFamily: "Barlow, sans-serif",
  fontWeight: 600,
  margin: 0,
  padding: 0,
  paddingTop: 20,
});
