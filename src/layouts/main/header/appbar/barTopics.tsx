import React, { useState } from "react";
import {
  MarketingImg,
  Travel,
  Career,
  Learning,
  Commerce,
} from "./marketingImg";
import { Grid, MenuItem, Avatar, ListItemAvatar, Box } from "@mui/material";
import * as Styles from "./styles";
export default function BarTopics() {
  return (
    <Grid container>
      <Styles.Boxes container xs={10} sx={{ padding: 1 }}>
        <Grid item sx={{ textAlign: "left" }} xs={2.3}>
          <Styles.ListTitle
            sx={{
              fontSize: "1.125rem",
              paddingLeft: 3,
            }}
          >
            Maketing
          </Styles.ListTitle>
          <MenuItem>
            <Grid item xs={12}>
              <Styles.Items>
                <MarketingImg />
              </Styles.Items>
              <Styles.Items>Landing</Styles.Items>
              <Styles.Items>Services</Styles.Items>
              <Styles.Items>Case Studies</Styles.Items>
              <Styles.Items>Case Study</Styles.Items>
              <Styles.Items>Blog Posts</Styles.Items>
              <Styles.Items>Blog Post</Styles.Items>
              <Styles.Items>About</Styles.Items>
              <Styles.Items>Contact</Styles.Items>
            </Grid>
          </MenuItem>
        </Grid>

        <Grid item sx={{ textAlign: "left" }} xs={2.3}>
          <Styles.ListTitle
            sx={{
              fontSize: "1.125rem",
              paddingLeft: 3,
            }}
          >
            Travel
          </Styles.ListTitle>

          <MenuItem>
            <Grid item xs={12}>
              <Styles.Items>
                <Travel />
              </Styles.Items>
              <Styles.Items>Landing</Styles.Items>
              <Styles.Items>Tours</Styles.Items>
              <Styles.Items>Tour</Styles.Items>
              <Styles.Items>Checkout</Styles.Items>
              <Styles.Items>Order Completed</Styles.Items>
              <Styles.Items>Blog Posts</Styles.Items>
              <Styles.Items>Blog Post</Styles.Items>
              <Styles.Items>About</Styles.Items>
              <Styles.Items>Contact</Styles.Items>
            </Grid>
          </MenuItem>
        </Grid>
        <Grid item sx={{ textAlign: "left" }} xs={2.3}>
          <Styles.ListTitle
            sx={{
              fontSize: "1.125rem",
              paddingLeft: 3,
            }}
          >
            Career
          </Styles.ListTitle>

          <MenuItem>
            <Grid item xs={12}>
              <Styles.Items>
                <Career />
              </Styles.Items>
              <Styles.Items>Landing</Styles.Items>
              <Styles.Items>Jobs</Styles.Items>
              <Styles.Items>Job</Styles.Items>
              <Styles.Items>Blog Posts</Styles.Items>
              <Styles.Items>Blog Post</Styles.Items>
              <Styles.Items>About</Styles.Items>
              <Styles.Items>Contact</Styles.Items>
            </Grid>
          </MenuItem>
        </Grid>

        <Grid item sx={{ textAlign: "left" }} xs={2.3}>
          <Styles.ListTitle
            sx={{
              fontSize: "1.125rem",
              paddingLeft: 3,
            }}
          >
            E-learning
          </Styles.ListTitle>

          <MenuItem>
            <Grid item xs={12}>
              <Styles.Items>
                <Learning />
              </Styles.Items>
              <Styles.Items>Landing</Styles.Items>
              <Styles.Items>Courses</Styles.Items>
              <Styles.Items>Course</Styles.Items>
              <Styles.Items>Blog Posts</Styles.Items>
              <Styles.Items>Blog Post</Styles.Items>
              <Styles.Items>About</Styles.Items>
              <Styles.Items>Contact</Styles.Items>
            </Grid>
          </MenuItem>
        </Grid>
        <Grid item sx={{ textAlign: "left" }} xs={2.3}>
          <Styles.ListTitle
            sx={{
              fontSize: "1.125rem",
              paddingLeft: 3,
            }}
          >
            E-commerce
          </Styles.ListTitle>

          <MenuItem>
            <Grid item xs={12}>
              <Styles.Items>
                <Commerce />
              </Styles.Items>
              <Styles.Items>Landing</Styles.Items>
              <Styles.Items>Products</Styles.Items>
              <Styles.Items>Product</Styles.Items>
              <Styles.Items>Cart</Styles.Items>
              <Styles.Items>Checkout</Styles.Items>
              <Styles.Items>Order Completed</Styles.Items>
              <Styles.Items>Wishlist</Styles.Items>
              <Styles.Items>Compare</Styles.Items>
              <Styles.Items>Account Personal</Styles.Items>
              <Styles.Items>Account Wishlist</Styles.Items>
              <Styles.Items>Account Vouchers</Styles.Items>
              <Styles.Items>Account Orders</Styles.Items>
              <Styles.Items>Account Payment</Styles.Items>
            </Grid>
          </MenuItem>
        </Grid>
      </Styles.Boxes>
      <Grid item md={2} sx={{ backgroundColor: "white", textAlign: "left" }}>
        <Styles.ListTitle
          sx={{
            fontSize: "1.125rem",
            paddingLeft: 3,
          }}
        >
          Common
        </Styles.ListTitle>
        <MenuItem>
          <Grid item xs={12}>
            <Styles.Items>Login Cover</Styles.Items>
            <Styles.Items>Login Illustration</Styles.Items>
            <Styles.Items>Login Background</Styles.Items>
            <Styles.Items>Register Cover</Styles.Items>
            <Styles.Items>Register Illustration</Styles.Items>
            <Styles.Items>Register Background</Styles.Items>
            <Styles.Items>Forgot Password</Styles.Items>
            <Styles.Items>Verify Code</Styles.Items>
            <Styles.Items>404 Error</Styles.Items>
            <Styles.Items>500 Error</Styles.Items>
            <Styles.Items>Maintenance</Styles.Items>
            <Styles.Items>Coming Soon</Styles.Items>
            <Styles.Items>Pricing 01</Styles.Items>
            <Styles.Items>Pricing 02</Styles.Items>
            <Styles.Items>Payment</Styles.Items>
            <Styles.Items>Support</Styles.Items>
          </Grid>
        </MenuItem>
      </Grid>
    </Grid>
  );
}
