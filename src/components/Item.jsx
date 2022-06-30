import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import {Rating} from "@mui/material";
import Box from "@mui/material/Box";
import {AttachMoney, InfoOutlined, InfoSharp} from "@mui/icons-material";
import CustomMessage from "../utils/CustomMessage";
import ItemCount from "./ItemCount";

export default function Item({id, name, description, price, pictureUrl, stock, isDetail = true, rating }) {
    const [message, setMessage] = useState(null);

    const onAdd = (quantity) => {
        if (id && quantity > 0) {
            setMessage({
                msg: `Se ${quantity === 1 ? 'agregó': 'agregaron'} ${quantity} ${name} al carrito`,
                severity: 'success'
            });
        }
    };

    return (
        <>
            <CustomMessage 
                message={message?.msg} 
                isOpen={message !== null}
                onClose={() => setMessage(null)}
                severity={message?.severity}
            />
            <Card className={isDetail ? "cardDetail" : "card"}>
                {pictureUrl ? (
                    <CardMedia
                        component="img"
                        height="140"
                        image={pictureUrl}
                        alt={`${description}`}
                    />
                ) : (
                    <>
                        <Typography
                            variant="h4"
                            color="text.secondary"
                            style={{ marginTop: "10px" }}
                        >
                            {name}
                        </Typography>
                        <Typography
                            variant="h6"
                            color="text.secondary"
                            style={{ marginTop: "10px" }}
                        >
                            {`Hay ${stock} ${name} en stock`}
                        </Typography>
                    </>
                )}

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
                    {rating && (
                        <Box
                            component="fieldset"
                            mb={3}
                            borderColor="transparent"
                        >
                            <Rating precision={0.5} name="read-only" value={rating} readOnly />
                        </Box>
                    )}
                </CardContent>
                <CardActions disableSpacing>
                    <ItemCount stock={stock} initial={0} onAdd={onAdd} />
                    {!isDetail && (
                        <CustomIconDetail id={id} />
                    )}
                </CardActions>
            </Card>
        </>
    );
}

function CustomIconDetail({ id }) {
    const navigate = useNavigate();

    const navigateToDetail = (id) => {
        navigate('/item/' + id);
    };
    
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
                    <IconButton onClick={() => navigateToDetail(id)} aria-label="delete">
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
                    <IconButton onClick={() => navigateToDetail(id)} aria-label="delete">
                        <InfoOutlined sx={{color: "white", fontSize: "40px"}}/>
                    </IconButton>
                </Tooltip>
            </div>
        </>
    );
}