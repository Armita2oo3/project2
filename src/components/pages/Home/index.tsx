import { Grid, Stack } from "@mui/material";
import WovenImageList from "./image";
import HomePage from "./homePage";
import UiKit from "./uiKit";
import Flexible from "./flexible";
import Highlights from "./features/highlights";
import Professional from "./professional/professional";
import PricingMain from "./pricing/pricingMain";
import Question from "./questions/question";
import Dashboard from "./DashboardTemplate/dashboard";
import Create from "./createWebsite/create";
import Logo from "./Logo/logo";
export default function Home() {
  return (
    <Stack sx={{ width: "100%" }}>
      <Grid
        container
        sx={{
          backgroundColor: "#FAFDFB",
          width: "100%",
          background: "transparent",
          backdropFilter: "blur(3px)",
        }}
      >
        <Grid item xs={12} md={6} sx={{ paddingY: "140px" }}>
          <HomePage />
        </Grid>
        <Grid
          item
          sx={{
            display: {
              xs: "none",
              md: "block",
            },
            position: "sticky",
          }}
          md={6}
        >
          <WovenImageList />
        </Grid>
      </Grid>

      <UiKit />
      <Flexible />
      <Highlights />
      <Professional />
      <PricingMain />
      <Question />
      <Dashboard />
      <Create />
      <Logo />
    </Stack>
  );
}
