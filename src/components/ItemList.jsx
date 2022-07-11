import React from "react";
import Grid from "@mui/material/Grid";
import Item from "./Item";

export default function ItemList({ items }) {
    return (
        <Grid container spacing={2} direction="row" alignItems="flex-start">
            {items.map((item, index) => (
                <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                    <Item itemDetail={item} isDetail={false} />
                </Grid>
            ))}
        </Grid>
    )
}