import MainHeader from "./header";
import { MainFooter } from "./footer";
import { Stack, Box, styled } from "@mui/material";
import * as Styles from "@/components/pages/Home/styles";
export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <CenterLayout>
      <MainHeader />
      {children}
      {/* <MainFooter /> */}
    </CenterLayout>
  );
}
export const CenterLayout = styled("div")({
  display: "flex",
  width: "100%",
});
