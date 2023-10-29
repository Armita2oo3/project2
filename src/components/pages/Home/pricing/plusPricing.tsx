import React from "react";
import { Typography, Stack, Divider } from "@mui/material";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import * as Styles from "../styles";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

export default function PlusPricing() {
  return (
    <Stack spacing={3}>
      <Stack direction="row" sx={{ justifyContent: "space-between" }}>
        <Styles.PricingGridTitles>PLUS</Styles.PricingGridTitles>

        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "20px",
            lineHeight: "36px",
            textAlign: "right",
            display: "flex",
          }}
        >
          $
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "32px",
              lineHeight: "48px",
              display: "flex",
            }}
          >
            99
          </Typography>
        </Typography>
      </Stack>
      <Stack direction="row" spacing={2}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.08958 3.82489H10.3447V15.1605C10.3447 16.7499 9.90924 18.0244 9.03825 18.9841C8.16725 19.9437 7.04529 20.4235 5.67237 20.4235C4.19611 20.4235 3.04831 19.9774 2.22899 19.0853C1.40966 18.1931 1 16.9523 1 15.363H4.26623C4.26623 16.9074 4.73494 17.6796 5.67237 17.6796C6.61718 17.6796 7.08958 16.7874 7.08958 15.0031V3.82489Z"
            fill="#FFAB00"
          ></path>
          <path
            d="M19.7116 15.9027C19.7116 15.2355 19.5419 14.7332 19.2023 14.3958C18.8702 14.051 18.2612 13.6948 17.3754 13.3275C15.7589 12.7052 14.5964 11.978 13.8878 11.1458C13.1792 10.3061 12.8249 9.31653 12.8249 8.17697C12.8249 6.7975 13.3046 5.69167 14.2642 4.85949C15.2312 4.01981 16.4565 3.59998 17.9401 3.59998C18.9292 3.59998 19.8113 3.81364 20.5863 4.24098C21.3613 4.66082 21.9555 5.25684 22.3689 6.02904C22.7896 6.80124 23 7.67841 23 8.66053H19.7559C19.7559 7.89582 19.5935 7.3148 19.2687 6.91745C18.9514 6.51261 18.49 6.31018 17.8848 6.31018C17.3164 6.31018 16.8735 6.48262 16.5561 6.82748C16.2387 7.16485 16.08 7.62218 16.08 8.19946C16.08 8.64928 16.2572 9.05788 16.6115 9.42524C16.9658 9.7851 17.5932 10.16 18.4937 10.5498C20.0659 11.1271 21.2063 11.8356 21.9149 12.6752C22.6309 13.5149 22.9889 14.5833 22.9889 15.8803C22.9889 17.3047 22.5424 18.418 21.6492 19.2202C20.7561 20.0224 19.5419 20.4235 18.0065 20.4235C16.9658 20.4235 16.0173 20.2061 15.161 19.7713C14.3048 19.3364 13.6331 18.7142 13.1459 17.9045C12.6662 17.0948 12.4263 16.1389 12.4263 15.0368H15.6925C15.6925 15.9815 15.8733 16.6675 16.235 17.0948C16.5967 17.5221 17.1872 17.7358 18.0065 17.7358C19.1433 17.7358 19.7116 17.1248 19.7116 15.9027Z"
            fill="#FFAB00"
          ></path>
        </svg>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.703 6.58008H7.88428V20.1986H4.75506V6.58008H1V3.82489H11.703V6.58008Z"
            fill="#006C9C"
          ></path>
          <path
            d="M19.8496 15.9027C19.8496 15.2355 19.6869 14.7332 19.3616 14.3958C19.0434 14.051 18.46 13.6948 17.6114 13.3275C16.0627 12.7052 14.9489 11.978 14.27 11.1458C13.5911 10.3061 13.2517 9.31653 13.2517 8.17697C13.2517 6.7975 13.7113 5.69167 14.6307 4.85949C15.5571 4.01981 16.731 3.59998 18.1524 3.59998C19.1 3.59998 19.945 3.81364 20.6876 4.24098C21.4301 4.66082 21.9994 5.25684 22.3954 6.02904C22.7985 6.80124 23 7.67841 23 8.66053H19.892C19.892 7.89582 19.7364 7.3148 19.4253 6.91745C19.1212 6.51261 18.6792 6.31018 18.0993 6.31018C17.5548 6.31018 17.1305 6.48262 16.8264 6.82748C16.5223 7.16485 16.3703 7.62218 16.3703 8.19946C16.3703 8.64928 16.54 9.05788 16.8795 9.42524C17.2189 9.7851 17.82 10.16 18.6827 10.5498C20.189 11.1271 21.2816 11.8356 21.9605 12.6752C22.6464 13.5149 22.9894 14.5833 22.9894 15.8803C22.9894 17.3047 22.5616 18.418 21.7059 19.2202C20.8502 20.0224 19.6869 20.4235 18.216 20.4235C17.2189 20.4235 16.3102 20.2061 15.4899 19.7713C14.6696 19.3364 14.026 18.7142 13.5593 17.9045C13.0996 17.0948 12.8698 16.1389 12.8698 15.0368H15.999C15.999 15.9815 16.1723 16.6675 16.5188 17.0948C16.8653 17.5221 17.4311 17.7358 18.216 17.7358C19.305 17.7358 19.8496 17.1248 19.8496 15.9027Z"
            fill="#006C9C"
          ></path>
        </svg>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.33329 23C10.3573 23 12 21.3573 12 19.3333V15.6666H8.33329C6.30929 15.6666 4.66663 17.3093 4.66663 19.3333C4.66663 21.3573 6.30929 23 8.33329 23Z"
            fill="#0ACF83"
          ></path>
          <path
            d="M4.66663 12C4.66663 9.97604 6.30929 8.33337 8.33329 8.33337H12V15.6667H8.33329C6.30929 15.6667 4.66663 14.024 4.66663 12Z"
            fill="#A259FF"
          ></path>
          <path
            d="M4.66663 4.66667C4.66663 2.64267 6.30929 1 8.33329 1H12V8.33333H8.33329C6.30929 8.33333 4.66663 6.69067 4.66663 4.66667Z"
            fill="#F24E1E"
          ></path>
          <path
            d="M12 1H15.6667C17.6907 1 19.3333 2.64267 19.3333 4.66667C19.3333 6.69067 17.6907 8.33333 15.6667 8.33333H12V1Z"
            fill="#FF7262"
          ></path>
          <path
            d="M19.3333 12C19.3333 14.024 17.6907 15.6667 15.6667 15.6667C13.6427 15.6667 12 14.024 12 12C12 9.97604 13.6427 8.33337 15.6667 8.33337C17.6907 8.33337 19.3333 9.97604 19.3333 12Z"
            fill="#1ABCFE"
          ></path>
        </svg>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={1}>
        <CheckCircleOutlineRoundedIcon
          sx={{ width: "20px", height: "20px", color: "red" }}
        />
        <Styles.pricingCheckListInfo>
          One end products
        </Styles.pricingCheckListInfo>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={1}>
        <CheckCircleOutlineRoundedIcon
          sx={{ width: "20px", height: "20px", color: "red" }}
        />
        <Styles.pricingCheckListInfo>
          12 months updates
        </Styles.pricingCheckListInfo>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={1}>
        <CheckCircleOutlineRoundedIcon
          sx={{ width: "20px", height: "20px", color: "red" }}
        />
        <Styles.pricingCheckListInfo>
          6 months of support
        </Styles.pricingCheckListInfo>
      </Stack>
      <Divider />
      <Stack direction="row" alignItems="center" spacing={1}>
        <CheckCircleOutlineRoundedIcon
          sx={{ width: "20px", height: "20px", color: "red" }}
        />
        <Styles.pricingCheckListInfo>
          JavaScript version
        </Styles.pricingCheckListInfo>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={1}>
        <CheckCircleOutlineRoundedIcon
          sx={{ width: "20px", height: "20px", color: "red" }}
        />
        <Styles.pricingCheckListInfo>
          TypeScript version
        </Styles.pricingCheckListInfo>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={1}>
        <CheckCircleOutlineRoundedIcon
          sx={{ width: "20px", height: "20px", color: "red" }}
        />
        <Styles.pricingCheckListInfo>
          Design resources
        </Styles.pricingCheckListInfo>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={1}>
        <CancelOutlinedIcon
          sx={{ width: "20px", height: "20px", color: "gray" }}
        />
        <Styles.pricingUnCheckListInfo>
          Commercial applications
        </Styles.pricingUnCheckListInfo>
      </Stack>
    </Stack>
  );
}
