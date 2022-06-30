import React from "react";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";

export function ItemListLoader({ quantity }) {
    return (
        <Grid container spacing={2} direction="row" alignItems="flex-start" style={{ padding: "30px" }}>
            {Array.from(new Array(quantity)).map((_item, index) => (
                <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                    <Skeleton variant="text" />
                    <Skeleton variant="rectangular" height={118} />
                    <Skeleton variant="text" />
                    <Skeleton variant="text" />
                </Grid>
            ))}
        </Grid>
    )
}

export function ItemDetailLoader() {
    return (
        <Grid container spacing={2} direction="row" alignItems="flex-start" style={{ padding: "30px" }}>
            <Grid item xs={12}>
                <Skeleton variant="rectangular" height={20} />
            </Grid>
            <Grid item xs={6}>
                <Skeleton variant="rectangular" height={150} />
            </Grid>
            <Grid item xs={6}>
                {Array.from(new Array(7)).map((_item, index) => (
                    <React.Fragment key={index}>
                        <Skeleton variant="text" height={20} />
                    </React.Fragment>
                ))}
            </Grid>
        </Grid>
    )
}

