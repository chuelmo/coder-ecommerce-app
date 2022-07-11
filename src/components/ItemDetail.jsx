import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ImageGallery from "react-image-gallery";
import Item from "./Item";

export default function ItemDetail({item}) {
    return (
        <>
            <Grid container style={{ backgroundColor: "white" }}>
                <Grid item xs={12} md={6}>
                    <ImageGallery
                        items={item.articleImages}
                        thumbnailPosition="left"
                        showNav={false}
                        showFullscreenButton={false}
                        showPlayButton={false}
                        showBullets
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box>
                        <Item
                            itemDetail={item}
                            isDetail={true}
                        />
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}