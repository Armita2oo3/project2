import React from "react";

import { useState } from "react";
import { ListItemButton, List, ListItem, Grid, Button } from "@mui/material";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuList from "@mui/material/MenuList";
import * as Styles from "./styles";
import BarTopics from "./barTopics";
export const TopbarItems = () => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
    setActive3(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  //
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);

  const handleClick2 = () => {
    setActive2(true);
  };
  const handleClick3 = () => {
    setActive3(true);
  };
  const handleClick4 = () => {
    setActive4(true);
  };
  const handleMove = () => {
    setActive3(false);
    setActive2(false);
    setActive4(false);
  };

  return (
    <Grid container>
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
        <List
          sx={{
            display: {
              xs: "none",

              md: "block",
            },
          }}
        >
          <ListItem>
            <Styles.TitleFull>
              <ListItemButton>
                <span
                  style={{
                    paddingRight: 3,
                    paddingBottom: 2.5,

                    color: "#FA541C",
                  }}
                >
                  ●{" "}
                </span>
                Home
              </ListItemButton>
            </Styles.TitleFull>
            <Styles.TitleFull>
              <ListItemButton
                onMouseMove={handleClick2}
                onMouseLeave={handleMove}
              >
                <span
                  style={{
                    display: active2 ? "block" : "none",
                    paddingRight: 3,
                    paddingBottom: 2.5,
                    color: active2 ? "#FA541C" : "none",
                  }}
                >
                  ●{" "}
                </span>
                Components
              </ListItemButton>
            </Styles.TitleFull>

            <Button
              ref={anchorRef}
              id="composition-button"
              aria-controls={open ? "composition-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onMouseOver={handleToggle}
              sx={{
                fontWeight: 700,
                fontSize: "0.7rem",
                lineHeight: 1.5,
                color: "black",
                padding: 0,
                "&:hover": {
                  opacity: 0.5,
                },
              }}
            >
              <ListItemButton
                onMouseMove={handleClick3}
                onMouseLeave={handleClose}
                sx={{ textTransform: "none" }}
              >
                <span
                  style={{
                    display: active3 ? "block" : "none",
                    color: active3 ? "#FA541C" : "none",
                    paddingRight: 3,
                    paddingBottom: 2.5,
                  }}
                >
                  ●{" "}
                </span>
                Pages
                <svg
                  aria-hidden="true"
                  role="img"
                  className="component-iconify MuiBox-root css-claira iconify iconify--eva"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <g id="iconifyReact861">
                    <g id="iconifyReact862">
                      <path
                        id="iconifyReact863"
                        fill="currentColor"
                        d="M12 16a1 1 0 0 1-.64-.23l-6-5a1 1 0 1 1 1.28-1.54L12 13.71l5.36-4.32a1 1 0 0 1 1.41.15a1 1 0 0 1-.14 1.46l-6 4.83A1 1 0 0 1 12 16Z"
                      ></path>
                    </g>
                  </g>
                </svg>
              </ListItemButton>
            </Button>

            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              placement="bottom-start"
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom-start" ? "left top" : "left bottom",
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        autoFocusItem={open}
                        id="composition-menu"
                        aria-labelledby="composition-button"
                        onKeyDown={handleListKeyDown}
                      >
                        <MenuList onClick={handleClose}>
                          <BarTopics />
                        </MenuList>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
            <Styles.TitleFull>
              <ListItemButton
                onMouseMove={handleClick4}
                onMouseLeave={handleMove}
              >
                <span
                  style={{
                    display: active4 ? "block" : "none",
                    color: active4 ? "#FA541C" : "none",
                    paddingRight: 3,
                    paddingBottom: 2.5,
                  }}
                >
                  ●{" "}
                </span>
                Docs
              </ListItemButton>
            </Styles.TitleFull>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
};
