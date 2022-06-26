import React, {useState} from "react";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import ItemCount from "./ItemCount";
import Card from "@mui/material/Card";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import {AttachMoney, InfoOutlined, InfoSharp} from "@mui/icons-material";

export default function ItemDetail({id, name, description, price, pictureUrl, stock}) {
    const [message, setMessage] = useState(null);

    const onAdd = (amount) => {
        if (id && amount > 0) {
            setMessage(`Se ${amount === 1 ? 'agregó': 'agregaron'} ${amount} ${name} al carrito`);
        }
    };

    return (
        <>
            {message && (
                <Snackbar anchorOrigin={{vertical: 'top', horizontal: 'right'}} open={true} autoHideDuration={4000} onClose={() => setMessage(null)}>
                    <Alert onClose={() => setMessage(null)} severity="success" sx={{ width: '100%' }}>
                        {message}
                    </Alert>
                </Snackbar>
            )}
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
                    <CustomIconDetail />
                </CardActions>
            </Card>
        </>
    );
}

function CustomIconDetail({ id }) {
    return (
        <>
            <div
                style={{
                    position: "absolute",
                    top: 10,
                    right: 10
                }}
            >
                <Tooltip title="Ver Detalles">
                    <IconButton onClick={() => console.log(`Detalle id: ${id}`)} aria-label="delete">
                        <InfoSharp sx={{color: "green", fontSize: "40px"}}/>
                    </IconButton>
                </Tooltip>
            </div>
            <div
                style={{
                    position: "absolute",
                    top: 10,
                    right: 10
                }}
            >
                <Tooltip title="Ver Detalles">
                    <IconButton onClick={() => console.log(`Detalle id: ${id}`)} aria-label="delete">
                        <InfoOutlined sx={{color: "white", fontSize: "40px"}}/>
                    </IconButton>
                </Tooltip>
            </div>
        </>
    );
}