import React, { Component } from "react";
import Grid from "@mui/material/Grid";
import Styles from "../app-styles.js";
import { Typography } from "@mui/material";

export default function Footer() {

    return (
        <Grid container style={{ ...Styles.footer, ...Styles.highZ }} justifyItems={'center'} alignItems={'center'}>
            <Grid item>
            <Typography variant="subtitle2">
                © Uniquity pvt ltd, {new Date().getFullYear()}. All rights reserved
            </Typography>
            </Grid>
        </Grid>
    );
}

