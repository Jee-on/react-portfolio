import React from 'react';
import {Box, Card, Grid} from "@mui/material";

export function CareerCard(): JSX.Element {
    return (
        <Card sx={{pb: 5, maxWidth: 1100, boxShadow: 10, borderRadius: 4}}>
            <Grid container>
                <Grid item></Grid>
                <Grid item></Grid>
                <Grid item></Grid>
                <Grid item></Grid>
            </Grid>
        </Card>
    )
}