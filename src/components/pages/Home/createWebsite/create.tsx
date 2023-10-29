import React from "react";

import * as Styles from "../styles";

export default function Create() {
  return (
    <Styles.CreateBackgroundImg sx={{ marginBottom: 0 }}>
      <Styles.CreateHeader sx={{ opacity: 0.48 }}>
        Start Now
      </Styles.CreateHeader>
      <Styles.CreateHeader sx={{ marginBottom: "64px" }}>
        Create Your <br /> Website Today
      </Styles.CreateHeader>
      <Styles.CreateButton variant="contained">
        Purchase Now
      </Styles.CreateButton>
    </Styles.CreateBackgroundImg>
  );
}
