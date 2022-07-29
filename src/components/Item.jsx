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

export default function Item({ itemDetail, isDetail = true }) {
    const navigate = useNavigate();
    const { addItem, getItem, totalItems } = useContext(CartContext);
    const [message, setMessage] = useState(null);
    const [realQuantity, setRealQuantity] = useState();

    useEffect(() => {
        setRealQuantity(getItem(itemDetail.id)?.quantity);
    }, [getItem, itemDetail.id]);

    const comprar = () => {
        if (totalItems === 0) {
            addItem(itemDetail, 1);
            setRealQuantity(1);
        }
        navigate('/cart');
    };

    const onAdd = (quantity) => {
        if (itemDetail.id && quantity > 0) {
            const item = getItem(itemDetail.id);
            if (item) {
                const totalQuantity = quantity + item.quantity;
                if (totalQuantity <= itemDetail.stock) {
                    addItem(itemDetail, totalQuantity);
                    setRealQuantity(totalQuantity);
                    setMessage({
                        msg: `Se ${quantity === 1 ? 'agregó': 'agregaron'} ${quantity} ${itemDetail.name} al carrito`,
                        severity: 'success'
                    });
                } else {
                    setMessage({
                        msg: `Ya hay ${item.quantity} ${itemDetail.name} en el carrito, no hay suficiente stock para agregar más`,
                        severity: 'error'
                    });
                }
            } else {
                addItem(itemDetail, quantity);
                setRealQuantity(quantity);
                setMessage({
                    msg: `Se ${quantity === 1 ? 'agregó': 'agregaron'} ${quantity} ${itemDetail.name} al carrito`,
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
                {!isDetail ? (
                    <CardMedia
                        component="img"
                        height="140"
                        image={itemDetail.pictureUrl}
                        alt={`${itemDetail.description}`}
                    />
                ) : (
                    <>
                        <Typography
                            variant="h4"
                            color="text.secondary"
                            style={{ marginTop: "10px" }}
                        >
                            {itemDetail.name}
                        </Typography>
                        <Typography
                            variant="h6"
                            color="text.secondary"
                            style={{ marginTop: "10px" }}
                        >
                            {`Hay ${itemDetail.stock} ${itemDetail.name} en stock`}
                            </Typography>
                            {realQuantity && (
                                <small>{`Hay en el carrito ${realQuantity} ${itemDetail.name}`}</small>
                            )}
                    </>
                )}

                <CardContent sx={{ minHeight: 120, maxHeight: 120 }}>
                    <Typography variant="body2" color="text.secondary">
                        {itemDetail.description}
                    </Typography>
                    <Chip
                        icon={<AttachMoney />}
                        label={itemDetail.price}
                        style={{
                            marginTop: "13px"
                        }}
                    />
                    {isDetail && (
                        <Box
                            component="fieldset"
                            mb={3}
                            borderColor="transparent"
                        >
                            <Rating precision={0.5} name="read-only" value={itemDetail.rating} readOnly />
                        </Box>
                    )}
                </CardContent>
                <CardActions disableSpacing>
                    <Grid container>
                        <Grid item xs={12}>
                            <ItemCount disabled={realQuantity === itemDetail.stock} stock={itemDetail.stock} initial={1} onAdd={onAdd} />
                        </Grid>   
                        {isDetail && (
                            <Grid item mt={1} xs={12}>
                                <Button onClick={() => comprar()} fullWidth variant="contained">COMPRAR</Button>
                            </Grid>
                        )}
                    </Grid>
                    {!isDetail && (
                        <CustomIconDetail id={itemDetail.id} />
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