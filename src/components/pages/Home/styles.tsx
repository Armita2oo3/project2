import {
  ListItemButton,
  styled,
  List,
  ListItem,
  Box,
  Menu,
  Grid,
  Typography,
  Button,
  ListItemIcon,
  ToggleButton,
  ToggleButtonGroup,
  Tab,
  TextField,
  Icon,
  Container,
} from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch, { SwitchProps } from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import { deepOrange } from "@mui/material/colors";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Barlow:wght@600&family=Poppins&family=Rubik:wght@300;400;500;700&display=swap');
</style>;

export const Header = styled(Typography)(({ theme }) => ({
  textAlign: "left",
  fontWeight: 700,
  // fontFamily: "Barlow, sans-serif",
  fontFamily:
    "__Barlow_92d964,__Barlow_Fallback_92d964,Helvetica,Arial,sans-serif",

  [theme.breakpoints.up("xs")]: {
    textAlign: "center",
    fontSize: "40px",
    lineHeight: "50px",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "53px",
    lineHeight: "65px",
    textAlign: "center",
    marginRight: "30px",
  },

  [theme.breakpoints.up("md")]: {
    textAlign: "left",
    fontSize: "59px",
    lineHeight: "73px",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "64px",
    lineHeight: "80px",
  },
}));
export const Description = styled(Typography)(({ theme }) => ({
  opacity: 0.7,
  textAlign: "center",
  marginBottom: "40px",
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
    paddingLeft: "3%",
  },
}));
export const FigmaBtn = styled(Button)(({ theme }) => ({
  color: "white",
  backgroundColor: "black",
  fontWeight: 600,
  textAlign: "left",
  [theme.breakpoints.up("lg")]: {
    textAlign: "left",
  },
  [theme.breakpoints.up("xs")]: {
    textAlign: "center",
  },
  paddingRight: 1,
}));
export const FigmaBtnBox = styled(Box)(({ theme }) => ({
  textAlign: "center",

  [theme.breakpoints.up("md")]: {
    textAlign: "left",
    paddingLeft: "3%",
  },
}));
export const WorkspaceLogos = styled(ListItemIcon)(({ theme }) => ({
  textAlign: "center",

  [theme.breakpoints.up("md")]: {
    justifyContent: "left",
    paddingLeft: "3%",
  },
  justifyContent: "center",
  display: "flex",
  paddingTop: 10,
}));
export const ZoneKit = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  paddingTop: "120px",
  paddingRight: "24px",
  paddingLeft: "24px",
  paddingBottom: "80px",
  // maxWidth: "1400px",
  // width: "1200px",
  // display: "flex",
  // justifyContent: "center",
  margin: "0px auto",
}));
export const ZoneKitHeader = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    fontSize: "32px",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "40px",
  },

  [theme.breakpoints.up("md")]: {
    fontSize: "44px",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "48px",
  },
}));
export const FlexibleHeader = styled(Typography)(({ theme }) => ({
  textAlign: "left",
  fontWeight: 700,
  fontFamily: "Barlow, sans-serif",

  [theme.breakpoints.up("xs")]: {
    textAlign: "center",
    fontSize: "32px",
    marginTop: "24px",
    marginBottom: "24px",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "40px",
  },

  [theme.breakpoints.up("md")]: {
    fontSize: "44px",
    textAlign: "left",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "48px",
    paddingLeft: "3%",
  },
}));
export const ComponentsBtnBox = styled(Box)(({ theme }) => ({
  textAlign: "center",

  [theme.breakpoints.up("md")]: {
    textAlign: "left",
    paddingLeft: "3%",
  },
}));

export const ToggleButtonClick = styled(ToggleButton)({
  "&:target": {
    backgroundColor: "red",
    color: "orange",
  },
});

export const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 30,
  height: 18,
  padding: 0,
  paddingTop: 0.7,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 13,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: deepOrange[700],
        // backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 13,
    height: 13,
    borderRadius: 6,
    marginTop: 1,

    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 18 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[600],
    boxSizing: "border-box",
  },
}));

export const StyledToggleButtonGroup = styled(ToggleButtonGroup)(
  ({ theme }) => ({
    "& .MuiToggleButtonGroup-grouped": {
      margin: theme.spacing(0.5),
      border: 0,
      "&.Mui-disabled": {
        border: 0,
      },
      "&:not(:first-of-type)": {
        borderRadius: theme.shape.borderRadius,
      },
      "&:first-of-type": {
        borderRadius: theme.shape.borderRadius,
      },
    },
  })
);
export const TabSize = styled(Tab)({
  width: "20%",
});
export const MainGridHome = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.between("xs", "sm")]: {
    // display: "flex",
    // justifyContent: "center",
    maxWidth: "600px",
    width: "100%",
  },
  [theme.breakpoints.between("sm", "md")]: {
    // display: "flex",
    // justifyContent: "center",
    maxWidth: "900px",
    width: "100%",
  },
  [theme.breakpoints.between("md", "lg")]: {
    maxWidth: "1200px",
    width: "100%",
  },
  [theme.breakpoints.between("lg", "xl")]: {
    maxWidth: "1536px",
    width: "100%",
  },
}));

export const TextFieldProps = styled(TextField)(({ theme }) => ({
  [theme.breakpoints.between("xs", "sm")]: {
    // display: "flex",
    // justifyContent: "center",
    maxWidth: "600px",
    width: "100%",
  },
  [theme.breakpoints.between("sm", "md")]: {
    // display: "flex",
    // justifyContent: "center",
    maxWidth: "900px",
    width: "100%",
  },
  [theme.breakpoints.between("md", "lg")]: {
    maxWidth: "1200px",
    width: "100%",
  },
  [theme.breakpoints.between("lg", "xl")]: {
    maxWidth: "1536px",
    width: "100%",
  },
}));

export const HightlightTitles = styled(Typography)({
  fontWeight: 600,
  fontSize: "14px",
  lineHeight: "22px",
  color: "#212b36",
  marginTop: 5,
  marginBottom: 5,
});
export const HightlightIcons = styled(Icon)({
  width: "32px",
  height: "32px",
  color: "#212b36",
  marginBottom: 8,
});
export const ProfessionalBackgroundImg = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  backgroundPosition: "center",
  color: "white",

  background:
    "linear-gradient(to bottom, rgba(22, 28, 36, 0.8), rgba(22, 28, 36, 0.8)),url(https://zone-ui.vercel.app/assets/images/home/for_designer.jpg)",

  textAlign: "center",
  backgroundSize: "100% 100%",
  backgroundRepeat: "no-repeat",
  paddingTop: "120px",
  paddingBottom: "120px",
  [theme.breakpoints.down("md")]: {
    paddingTop: "80px",
    paddingBottom: "80px",
  },
}));
export const ProfessionalTitle = styled(Typography)(({ theme }) => ({
  fontSize: "40px",
  lineHeight: "53px",
  fontWeight: 700,

  [theme.breakpoints.up("xs")]: {
    fontSize: "32px",
    lineHeight: "43px",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "40px",
    lineHeight: "53px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "44px",
    lineHeight: "59px",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "48px",
    lineHeight: "64px",
  },
}));
export const PricingBox = styled(Box)(({ theme }) => ({
  display: "block",
  // margin: "0px auto",
  textAlign: "center",
  marginTop: 8,
  [theme.breakpoints.up("xs")]: {
    paddingTop: "80px",
    paddingBottom: "40px",
  },
  [theme.breakpoints.up("sm")]: {
    paddingRight: "24px",
    paddingLeft: "24px",
  },
  [theme.breakpoints.up("md")]: {
    paddingTop: "120px",
    paddingBottom: "80px",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "48px",
    lineHeight: "64px",
  },
}));
export const PricingGridTitles = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: "#212b36",
  textAlign: "left",
  display: "flex",
  [theme.breakpoints.up("xs")]: {
    fontSize: "19px",
    lineHeight: "29px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "20px",
    lineHeight: "30px",
  },
}));
export const pricingCheckListInfo = styled(Typography)({
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "22px",
});
export const pricingUnCheckListInfo = styled(Typography)({
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "22px",
  color: "gray",
});
export const MoreQuestion = styled(Box)(({ theme }) => ({
  fontWeight: 700,
  [theme.breakpoints.up("xs")]: {
    fontSize: "24px",
    paddingTop: "48px",
    paddingBottom: "48px",
    paddingRight: "24px",
    paddingLeft: "24px",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "26px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "30px",
    paddingTop: "64px",
    paddingBottom: "64px",
    paddingRight: "64px",
    paddingLeft: "64px",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "32px",
  },
}));
export const Dashboard = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginTop: "24px",
  marginBottom: "24px",
  display: "block",
  color: "black",

  [theme.breakpoints.up("xs")]: {
    fontSize: "24px",
    textAlign: "center",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "26px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "30px",
    textAlign: "left",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "32px",
  },
}));
export const MainDashboard = styled(Container)(({ theme }) => ({
  width: "100%",
  display: "block",
  margin: "0px auto",
  paddingRight: "16px",
  paddingLeft: "16px",
  marginRight: "auto",
  marginLeft: "auto",
  [theme.breakpoints.up("xs")]: {
    paddingTop: "40px",
    paddingBottom: "80px",
    textAlign: "center",
  },
  [theme.breakpoints.up("sm")]: {
    paddingLeft: "24px",
    paddingRight: "24px",
  },
  [theme.breakpoints.up("md")]: {
    paddingTop: "80px",
    paddingBottom: "120px",
    textAlign: "left",
    paddingRight: "24px",
    paddingLeft: "24px",
  },
  [theme.breakpoints.up("lg")]: {
    maxWidth: "1200px",
  },
}));
export const MainBoxDashboard = styled(Box)(({ theme }) => ({
  borderRadius: "24px",
  boxSizing: "border-box",

  [theme.breakpoints.up("xs")]: {
    padding: "16px",
    backgroundColor: "transparent",
    textAlign: "center",
  },
  [theme.breakpoints.up("md")]: {
    padding: "80px",
    backgroundColor: "#F4F6F8",
    textAlign: "left",
  },
}));

export const DashboardMiniText = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: 400,
  color: "#637381",
  lineHeight: 1.5,
  [theme.breakpoints.up("xs")]: {
    textAlign: "center",
    maxWidth: "360px",
  },
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
  },
}));

export const DashboardStack = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    justifyContent: "center",
  },
  [theme.breakpoints.up("md")]: {
    justifyContent: "left",
  },
}));
export const CreateBackgroundImg = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  backgroundPosition: "center",
  color: "white",

  background:
    " linear-gradient(to bottom, rgba(22, 28, 36, 0.8), rgba(22, 28, 36, 0.8)),url(https://zone-ui.vercel.app/assets/images/home/advertisement.jpg)",

  textAlign: "center",
  // backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  paddingTop: "280px",
  paddingBottom: "280px",
  WebkitBackgroundSize: "cover",
  marginBottom: "64px",
  [theme.breakpoints.down("md")]: {
    paddingTop: "80px",
    paddingBottom: "80px",
  },
}));
export const CreateHeader = styled(Box)(({ theme }) => ({
  color: "white",

  textAlign: "center",
  fontWeight: 700,
  fontFamily: "sans-serif",
  [theme.breakpoints.up("xs")]: {
    fontSize: "40px",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "53px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "59px",
  },
}));

export const CreateButton = styled(Button)({
  border: 0,
  fontWeight: 700,
  lineHeight: 1.7,
  textTransform: "none",
  minWidth: "64px",
  paddingTop: "8px",
  paddingBottom: "8px",
  paddingRight: "22px",
  paddingLeft: "22px",
  borderRadius: "8px",
  backgroundColor: "#FA541C",
  fontSize: "15px",
});
export const LogoContainer = styled(Container)(({ theme }) => ({
  width: "100%",
  marginLeft: "auto",
  marginRight: "auto",
  display: "block",
  paddingLeft: "16px",
  paddingRight: "16px",
  paddingTop: "64px",
  paddingBottom: "64px",
  textAlign: "center",

  [theme.breakpoints.up("sm")]: {
    paddingLeft: "24px",
    padingRight: "24px",
  },
  [theme.breakpoints.up("lg")]: {
    maxWidth: "1200px",
  },
}));
