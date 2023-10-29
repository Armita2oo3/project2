import { styled, Button } from "@mui/material";

export const SideBar = styled("span")(({ theme }) => ({
  textAlign: "left",
  fontSize: 14,
  marginBottom: 4,
  fontWeight: 500,
  color: " rgb(99, 115, 129)",
}));
export const Title = styled("span")(() => ({
  fontWeight: 700,
  fontSize: 12,
  opacity: 0.6,
  paddingLeft: 18,
}));
export const HomeBtn = styled("span")(() => ({
  color: "#FA541C",
  fontWeight: 600,
  fontSize: 14,
}));
export const TitleName = styled("span")(() => ({
  fontWeight: 600,
  color: "rgb(99,115,129)",
  fontSize: 14,
}));
export const BuyBtn = styled(Button)({
  color: "white",
  backgroundColor: "black",
  marginTop: 20,
  width: "80%",
  fontWeight: 600,
  borderRadius: 8,
});
