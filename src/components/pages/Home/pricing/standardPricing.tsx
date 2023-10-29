import React from "react";
import {
  Typography,
  Stack,
  Divider,
} from "@mui/material";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import * as Styles from "../styles";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

export default function StandardPricing() {
  return (
    <Stack spacing={3}>
      <Stack direction="row" sx={{ justifyContent: "space-between" }}>
        <Styles.PricingGridTitles>STANDARD</Styles.PricingGridTitles>

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
            59
          </Typography>
        </Typography>
      </Stack>
      <Stack direction="row">
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
        <CancelOutlinedIcon
          sx={{ width: "20px", height: "20px", color: "gray" }}
        />
        <Styles.pricingUnCheckListInfo>
          TypeScript version
        </Styles.pricingUnCheckListInfo>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={1}>
        <CancelOutlinedIcon
          sx={{ width: "20px", height: "20px", color: "gray" }}
        />
        <Styles.pricingUnCheckListInfo>
          Design resources
        </Styles.pricingUnCheckListInfo>
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
