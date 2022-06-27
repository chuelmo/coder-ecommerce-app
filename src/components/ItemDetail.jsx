import React, {useState} from "react";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import ItemCount from "./ItemCount";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import {AttachMoney} from "@mui/icons-material";
import Grid from "@mui/material/Grid";
import CustomMessage from "../utils/CustomMessage";

export default function ItemDetail({id, name, description, price, pictureUrl, stock}) {
    const [message, setMessage] = useState(null);

    const onAdd = (amount) => {
        if (id && amount > 0) {
            setMessage({
                msg: `Se ${amount === 1 ? 'agregó': 'agregaron'} ${amount} ${name} al carrito`,
                severity: 'success'
            });
        }
    };

    return (
        <>
            <Grid container spacing={2} direction="row" alignItems="flex-start">
                <Grid key="key99" item xs={12} sm={6} md={4} lg={3}>
                    <CustomMessage 
                        message={message?.msg} 
                        isOpen={message !== null}
                        onClose={() => setMessage(null)}
                        severity={message?.severity}
                    />
                    <Card sx={{ position: "relative", minHeight: 400, maxHeight: 450 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={pictureUrl}
                            alt={`${description}`}
                        />
                        <CardContent sx={{ minHeight: 120, maxHeight: 120 }}>
                            <Typography variant="body2" color="text.secondary">
                                {description}
                            </Typography>
                            <Chip
                                icon={<AttachMoney />}
                                label={price}
                                style={{
                                    marginTop: "13px"
                                }}
                            />
                        </CardContent>
                        <CardActions disableSpacing>
                            <ItemCount stock={stock} initial={0} onAdd={onAdd} />
                        </CardActions>
                    </Card> 
                </Grid>
            </Grid>
        </>
    );
}