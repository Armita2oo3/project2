import React from "react";
import {
  Box,
  Grid,
  Button,
  Container,
  Typography,
  ListItemIcon,
  Stack,
  Chip,
  Divider,
} from "@mui/material";
import * as Styles from "../styles";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
export default function Question() {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");
  const [expanded2, setExpanded2] = React.useState<string | false>("panel2");
  const [expanded3, setExpanded3] = React.useState<string | false>("panel3");
  const [expanded4, setExpanded4] = React.useState<string | false>("panel4");
  const [expanded5, setExpanded5] = React.useState<string | false>("panel5");
  const [expanded6, setExpanded6] = React.useState<string | false>("panel6");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  const handleChange2 =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded2(newExpanded ? panel : false);
    };
  const handleChange3 =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded3(newExpanded ? panel : false);
    };
  const handleChange4 =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded4(newExpanded ? panel : false);
    };
  const handleChange5 =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded5(newExpanded ? panel : false);
    };
  const handleChange6 =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded6(newExpanded ? panel : false);
    };
  return (
    <Grid
      container
      sx={{ display: "flex", justifyContent: "center", marginBottom: 8 }}
    >
      <Grid item>
        <Styles.ProfessionalTitle sx={{ marginY: "24px", textAlign: "center" }}>
          Frequently Asked Questions
        </Styles.ProfessionalTitle>
        <Accordion
          sx={{
            paddingLeft: "16px",

            paddingRight: "8px",
          }}
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={expanded === "panel1" ? <RemoveIcon /> : <AddIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              sx={{ fontWeight: 600, fontSize: "16px", lineHeight: "28px" }}
            >
              What's in the product packages?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Divider />
        <Accordion
          sx={{
            paddingLeft: "16px",
            paddingRight: "8px",
          }}
          expanded={expanded2 === "panel2"}
          onChange={handleChange2("panel2")}
        >
          <AccordionSummary
            expandIcon={expanded2 === "panel2" ? <RemoveIcon /> : <AddIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              sx={{ fontWeight: 600, fontSize: "16px", lineHeight: "28px" }}
            >
              How can i upgrade my product plan?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Divider />
        <Accordion
          sx={{
            paddingLeft: "16px",
            paddingRight: "8px",
          }}
          expanded={expanded3 === "panel3"}
          onChange={handleChange3("panel3")}
        >
          <AccordionSummary
            expandIcon={expanded3 === "panel3" ? <RemoveIcon /> : <AddIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              sx={{ fontWeight: 600, fontSize: "16px", lineHeight: "28px" }}
            >
              Are design assets(Figma,Sketch,Adobe XD) included?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>{" "}
        <Divider />
        <Accordion
          sx={{
            paddingLeft: "16px",
            paddingRight: "8px",
          }}
          expanded={expanded4 === "panel4"}
          onChange={handleChange4("panel4")}
        >
          <AccordionSummary
            expandIcon={expanded4 === "panel4" ? <RemoveIcon /> : <AddIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              sx={{ fontWeight: 600, fontSize: "16px", lineHeight: "28px" }}
            >
              Does this product support TypeScript
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>{" "}
        <Divider />
        <Accordion
          sx={{
            paddingLeft: "16px",
            paddingRight: "8px",
          }}
          expanded={expanded5 === "panel5"}
          onChange={handleChange5("panel5")}
        >
          <AccordionSummary
            expandIcon={expanded5 === "panel5" ? <RemoveIcon /> : <AddIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              sx={{ fontWeight: 600, fontSize: "16px", lineHeight: "28px" }}
            >
              Can I use this template in commercial projects like a Saas?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>{" "}
        <Divider />
        <Accordion
          sx={{
            paddingLeft: "16px",
            paddingRight: "8px",
          }}
          expanded={expanded6 === "panel6"}
          onChange={handleChange6("panel6")}
        >
          <AccordionSummary
            expandIcon={expanded6 === "panel6" ? <RemoveIcon /> : <AddIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              sx={{ fontWeight: 600, fontSize: "16px", lineHeight: "28px" }}
            >
              How can I request support?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>{" "}
        <Divider />
        <Grid container sx={{ display: "flex", justifyContent: "center" }}>
          <Styles.MoreQuestion
            sx={{
              marginTop: 8,
              border: "1px dashed grey",
              width: 1,
              textAlign: "center",
              borderRadius: 5,
            }}
          >
            Still Have Questions?
            <Typography
              sx={{
                fontSize: "16px",
                marginTop: "24px",
                marginBottom: "40px",
                fontWeight: 400,
                color: "#637381",
              }}
            >
              Please describe your case to receive the most accurate advice.
            </Typography>
            <Button
              variant="contained"
              sx={{
                fontSize: "15px",
                paddingY: "8px",
                paddingX: "16px",
                color: "white",
                backgroundColor: "black",
                textTransform: "none",
                minWidth: "64px",
                height: "48px",
                borderRadius: "8px",
                fontWeight: 700,
              }}
            >
              Contant Us
            </Button>
          </Styles.MoreQuestion>
        </Grid>
      </Grid>
    </Grid>
  );
}
