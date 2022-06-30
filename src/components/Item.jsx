import React, {useState, useContext, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Button from '@mui/material/Button';
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Grid from "@mui/material/Grid";
import {Rating} from "@mui/material";
import Box from "@mui/material/Box";
import {AttachMoney, InfoOutlined, InfoSharp} from "@mui/icons-material";
import CustomMessage from "../utils/CustomMessage";
import ItemCount from "./ItemCount";
import CartContext from "../context/CartContext";

export default function Item({id, name, description, price, pictureUrl, stock, isDetail = true, rating }) {
    const navigate = useNavigate();
    const { addItem, getItem } = useContext(CartContext);
    const [message, setMessage] = useState(null);
    const [realQuantity, setRealQuantity] = useState();

    useEffect(() => {
        setRealQuantity(getItem(id)?.quantity);
    }, [getItem, id]);

    const onAdd = (quantity) => {
        if (id && quantity > 0) {
            const item = getItem(id);
            if (item) {
                const totalQuantity = quantity + item.quantity;
                if (totalQuantity <= stock) {
                    addItem({ id, name, price, pictureUrl }, totalQuantity);
                    setRealQuantity(totalQuantity);
                    setMessage({
                        msg: `Se ${quantity === 1 ? 'agregó': 'agregaron'} ${quantity} ${name} al carrito`,
                        severity: 'success'
                    });
                } else {
                    setMessage({
                        msg: `Ya hay ${item.quantity} ${name} en el carrito, no hay suficiente stock para agregar más`,
                        severity: 'error'
                    });
                }
            } else {
                addItem({ id, name, price, pictureUrl }, quantity);
                setRealQuantity(quantity);
                setMessage({
                    msg: `Se ${quantity === 1 ? 'agregó': 'agregaron'} ${quantity} ${name} al carrito`,
                    severity: 'success'
                });
            }
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
                            {realQuantity && (
                                <small>{`Hay en el carrito ${realQuantity} ${name}`}</small>
                            )}
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
                    <Grid container>
                        <Grid item xs={12}>
                            <ItemCount disabled={realQuantity === stock} stock={stock} initial={1} onAdd={onAdd} />    
                        </Grid>   
                        {isDetail && (
                            <Grid item mt={1} xs={12}>
                                <Button onClick={() => navigate('/cart')} fullWidth variant="contained">COMPRAR</Button>
                            </Grid>
                        )}
                    </Grid>
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