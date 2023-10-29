import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ListItem from "@mui/material/ListItem";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import * as Styled from "./styles";

const marketingItem = [
  "Landing",
  "Services",
  "Case Studies",
  "Case Study",
  "Blog Posts",
  "Blog Post",
  "About",
  "Contact",
];
const travelItem = [
  "Landing",
  "Tours",
  "Tour",
  "Checkout",
  "Order Completed",
  "Blog Posts",
  "Blog Post",
  "About",
  "Contact",
];
const careerItem = [
  "Landing",
  "Jobs",
  "Job",
  "Blog Posts",
  "Blog Post",
  "About",
  "Contact",
];
const eLearningItem = [
  "Landing",
  "Courses",
  "Course",
  "Blog Posts",
  "Blog Post",
  "About",
  "Contact",
];
const eCommerceItem = [
  "Landing",
  "Products",
  "Product",
  "Cart",
  "Checkout",
  "Order Completed",
  "Wishlist",
  "Compare",
  "Account Personal",
  "Account Wishlist",
  "Account Vouchers",
  "Account Orders",
  "Account Payment",
];

const commonItem = [
  "Login Cover",
  "Login Illustration",
  "Login Background",
  "Register Cover",
  "Register Illustration",
  "Register Background",
  "Forgot Password",
  "Verify Code",
  "404 Error",
  "500 Error",
  "Maintenance",
  "ComingSoon",
  "Pricing 01",
  "Pricing 02",
  "Payment",
  "Support",
];
interface Props {
  window?: () => Window;
}
function SideBarList(props: Props) {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        padding: 0,
      }}
      component="nav"
    >
      <ListItem sx={{ padding: 0, margin: 0, paddingLeft: 3 }}>
        <svg
          xmlns="http://www.w3.org/2000/svg "
          width="75"
          height="75"
          fill="none"
          viewBox="0 0 1080 288"
          color="black"
        >
          <ellipse cx="996" cy="204" fill="#FA541C" rx="60" ry="60"></ellipse>
          <path
            fill="currentColor"
            d="M712 264h-58.815l-98.37-148.034V264H496V24h58.815l98.37 148.718V24H712v240zM801.265 70.838v48.547H880v45.128h-78.735v52.649H888V264H744V24h144v46.838h-86.735zM344.333 264c-22 0-42.222-5.118-60.666-15.355-18.223-10.236-32.778-24.478-43.667-42.726-10.667-18.47-16-39.165-16-62.086s5.333-43.505 16-61.752c10.889-18.248 25.444-32.49 43.667-42.726C302.111 29.118 322.333 24 344.333 24s42.111 5.118 60.334 15.355C423.111 49.59 437.556 63.833 448 82.08c10.667 18.247 16 38.831 16 61.752s-5.333 43.616-16 62.086c-10.667 18.248-25.111 32.49-43.333 42.726C386.444 258.882 366.333 264 344.333 264zm0-52.072c18.667 0 33.556-6.231 44.667-18.693 11.333-12.462 17-28.929 17-49.402 0-20.695-5.667-37.163-17-49.402-11.111-12.462-26-18.692-44.667-18.692-18.889 0-34 6.12-45.333 18.358-11.111 12.24-16.667 28.818-16.667 49.736 0 20.696 5.556 37.274 16.667 49.736 11.333 12.239 26.444 18.359 45.333 18.359zM89.71 216.137H192V264H24v-44.444L125.613 71.863H24V24h168v44.444L89.71 216.137z"
          ></path>
        </svg>
      </ListItem>

      <ListItemButton sx={{ backgroundColor: "#eee1dd", paddingY: 0.7 }}>
        <ListItemText sx={{ pl: 2 }}>
          <Styled.HomeBtn>Home</Styled.HomeBtn>
        </ListItemText>
      </ListItemButton>
      <ListItemButton sx={{ paddingY: 0.7 }}>
        <ListItemText sx={{ pl: 2 }}>
          <Styled.TitleName> Components </Styled.TitleName>
        </ListItemText>
      </ListItemButton>

      <ListItemButton onClick={handleClick} sx={{ paddingY: 0.7 }}>
        <ListItemText sx={{ pl: 2 }}>
          <Styled.TitleName> Pages</Styled.TitleName>
        </ListItemText>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Styled.SideBar>
            <ListSubheader
              sx={{
                backgroundColor: "#ededee",
              }}
            >
              <Styled.Title>MARKETING</Styled.Title>
            </ListSubheader>
            {marketingItem.map((__, index) => (
              <ListItemButton
                sx={{ left: 18, fontSize: 14, fontFamily: "sans-serif" }}
                key={index}
              >
                {marketingItem[index]}
              </ListItemButton>
            ))}
            <ListSubheader
              sx={{
                backgroundColor: "#ededee",
              }}
            >
              <Styled.Title>TRAVEL</Styled.Title>
            </ListSubheader>
            {travelItem.map((__, index) => (
              <ListItemButton
                sx={{ left: 18, fontSize: 14, fontFamily: "sans-serif" }}
                key={index}
              >
                {travelItem[index]}
              </ListItemButton>
            ))}

            <ListSubheader
              sx={{
                backgroundColor: "#ededee",
              }}
            >
              <Styled.Title>CAREER</Styled.Title>
            </ListSubheader>

            {careerItem.map((__, index) => (
              <ListItemButton
                sx={{ left: 18, fontSize: 14, fontFamily: "sans-serif" }}
                key={index}
              >
                {" "}
                {careerItem[index]}
              </ListItemButton>
            ))}

            <ListSubheader
              sx={{
                backgroundColor: "#ededee",
              }}
            >
              <Styled.Title>E-LEARNING</Styled.Title>
            </ListSubheader>
            {eLearningItem.map((__, index) => (
              <ListItemButton
                sx={{ left: 18, fontSize: 14, fontFamily: "sans-serif" }}
                key={index}
              >
                {eLearningItem[index]}
              </ListItemButton>
            ))}
            <ListSubheader
              sx={{
                backgroundColor: "#ededee",
              }}
            >
              <Styled.Title>E-COMMERCE</Styled.Title>
            </ListSubheader>
            {eCommerceItem.map((__, index) => (
              <ListItemButton
                sx={{ left: 18, fontSize: 14, fontFamily: "sans-serif" }}
                key={index}
              >
                {eCommerceItem[index]}
              </ListItemButton>
            ))}

            <ListSubheader
              sx={{
                backgroundColor: "#ededee",
              }}
            >
              <Styled.Title>COMMON</Styled.Title>
            </ListSubheader>
            {commonItem.map((__, index) => (
              <ListItemButton
                sx={{ left: 18, fontSize: 14, fontFamily: "sans-serif" }}
                key={index}
              >
                {commonItem[index]}
              </ListItemButton>
            ))}
          </Styled.SideBar>
        </List>
      </Collapse>
      <ListItemButton sx={{ paddingY: 0.7 }}>
        <ListItemText sx={{ pl: 2 }}>
          <Styled.TitleName>Docs</Styled.TitleName>
        </ListItemText>
      </ListItemButton>
      <Styled.BuyBtn variant="contained">Buy Now</Styled.BuyBtn>
    </List>
  );
}
export default SideBarList;
