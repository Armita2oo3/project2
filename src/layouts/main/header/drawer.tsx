import * as React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Grid,
  ListItemButton,
} from "@mui/material";
import { useOffSetTop } from "./scroll";

import MenuIcon from "@mui/icons-material/Menu";
import styles from "@/styles/navbar.module.css";
// import NestedList from "./sidebar/nestedList";
const drawerWidth = 260;
import { Buttons } from "./appbar/buttons";
import { TopbarItems } from "./appbar/topbar";
import SideBarList from "./sidebar/sidebarList";
interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}
function MenuDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box sx={{ textAlign: "center", display: "flex" }}>
      <Divider />

      {/* <NestedList /> */}
      <SideBarList />
    </Box>
  );
  const isOffset = useOffSetTop(1);

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <Grid container>
        <AppBar
          sx={{
            backgroundColor: "transparent",
            color: "black",
            boxShadow: "none",
            height: 70,
            width: "100%",
          }}
          component="nav"
        >
          <Toolbar
            sx={{
              ...(isOffset && {
                backdropFilter: "blur(5px)",
                backgroundColor: "rgba(249,247,253,0.8)",
              }),
            }}
          >
            <Grid item xs={1} sx={{ paddingLeft: 5 }}>
              <svg
                xmlns="http://www.w3.org/2000/svg "
                width="75"
                height="75"
                fill="none"
                viewBox="0 0 1080 288"
                color="black"
              >
                <ellipse
                  cx="996"
                  cy="204"
                  fill="#FA541C"
                  rx="60"
                  ry="60"
                ></ellipse>
                <path
                  fill="currentColor"
                  d="M712 264h-58.815l-98.37-148.034V264H496V24h58.815l98.37 148.718V24H712v240zM801.265 70.838v48.547H880v45.128h-78.735v52.649H888V264H744V24h144v46.838h-86.735zM344.333 264c-22 0-42.222-5.118-60.666-15.355-18.223-10.236-32.778-24.478-43.667-42.726-10.667-18.47-16-39.165-16-62.086s5.333-43.505 16-61.752c10.889-18.248 25.444-32.49 43.667-42.726C302.111 29.118 322.333 24 344.333 24s42.111 5.118 60.334 15.355C423.111 49.59 437.556 63.833 448 82.08c10.667 18.247 16 38.831 16 61.752s-5.333 43.616-16 62.086c-10.667 18.248-25.111 32.49-43.333 42.726C386.444 258.882 366.333 264 344.333 264zm0-52.072c18.667 0 33.556-6.231 44.667-18.693 11.333-12.462 17-28.929 17-49.402 0-20.695-5.667-37.163-17-49.402-11.111-12.462-26-18.692-44.667-18.692-18.889 0-34 6.12-45.333 18.358-11.111 12.24-16.667 28.818-16.667 49.736 0 20.696 5.556 37.274 16.667 49.736 11.333 12.239 26.444 18.359 45.333 18.359zM89.71 216.137H192V264H24v-44.444L125.613 71.863H24V24h168v44.444L89.71 216.137z"
                ></path>
              </svg>
            </Grid>

            <Grid item xs={9} lg={9}>
              <TopbarItems />
            </Grid>
            <Grid item xs={2} md={3} lg={2}>
              <Buttons />
            </Grid>
            <IconButton
              sx={{
                marginRight: 0,

                display: { xs: "block", md: "none" },
              }}
            >
              <IconButton>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="black"
                    d="m228.24 219.76l-51.38-51.38a86.15 86.15 0 1 0-8.48 8.48l51.38 51.38a6 6 0 0 0 8.48-8.48ZM38 112a74 74 0 1 1 74 74a74.09 74.09 0 0 1-74-74Z"
                  />
                </svg>
              </IconButton>
              <IconButton>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  className={styles.settingIcon}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M19.9 12.66a1 1 0 0 1 0-1.32l1.28-1.44a1 1 0 0 0 .12-1.17l-2-3.46a1 1 0 0 0-1.07-.48l-1.88.38a1 1 0 0 1-1.15-.66l-.61-1.83a1 1 0 0 0-.95-.68h-4a1 1 0 0 0-1 .68l-.56 1.83a1 1 0 0 1-1.15.66L5 4.79a1 1 0 0 0-1 .48L2 8.73a1 1 0 0 0 .1 1.17l1.27 1.44a1 1 0 0 1 0 1.32L2.1 14.1a1 1 0 0 0-.1 1.17l2 3.46a1 1 0 0 0 1.07.48l1.88-.38a1 1 0 0 1 1.15.66l.61 1.83a1 1 0 0 0 1 .68h4a1 1 0 0 0 .95-.68l.61-1.83a1 1 0 0 1 1.15-.66l1.88.38a1 1 0 0 0 1.07-.48l2-3.46a1 1 0 0 0-.12-1.17ZM18.41 14l.8.9l-1.28 2.22l-1.18-.24a3 3 0 0 0-3.45 2L12.92 20h-2.56L10 18.86a3 3 0 0 0-3.45-2l-1.18.24l-1.3-2.21l.8-.9a3 3 0 0 0 0-4l-.8-.9l1.28-2.2l1.18.24a3 3 0 0 0 3.45-2L10.36 4h2.56l.38 1.14a3 3 0 0 0 3.45 2l1.18-.24l1.28 2.22l-.8.9a3 3 0 0 0 0 3.98Zm-6.77-6a4 4 0 1 0 4 4a4 4 0 0 0-4-4Zm0 6a2 2 0 1 1 2-2a2 2 0 0 1-2 2Z"
                  />
                </svg>
              </IconButton>
            </IconButton>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                mr: 2,

                pt: 1.7,
                display: { xs: "block", md: "none" },
                color: "black",
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Grid>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          //   onClose={handleClick}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#ededee",
            },
          }}
        >
          <span>{drawer}</span>
        </Drawer>
      </nav>
    </Box>
  );
}

MenuDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default MenuDrawer;
