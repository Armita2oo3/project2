import * as React from "react";
import { CssBaseline, Toolbar, useScrollTrigger, Box } from "@mui/material";
import MenuDrawer from "./drawer";
type Props = {
  window?: () => Window;
  children: React.ReactElement;
};

function ElevationScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function MainHeader(props: Props) {
  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <MenuDrawer />
      </ElevationScroll>
    </React.Fragment>
  );
}
