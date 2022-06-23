import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";

export default function ItemListLoader({ amount }) {
    return (
        <Grid container spacing={2} direction="row" alignItems="flex-start" style={{ padding: "30px" }}>
            {Array.from(new Array(amount)).map((_item, index) => (
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