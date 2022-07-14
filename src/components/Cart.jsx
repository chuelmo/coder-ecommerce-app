import React, {useContext, useEffect, useMemo} from "react";
import {useNavigate} from "react-router-dom";
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CardMedia from "@mui/material/CardMedia";
import {AddCircleOutlined, DeleteForeverOutlined, RemoveCircleOutlined} from "@mui/icons-material";
import Layout from "./Layout";
import { customTheme } from "../utils/theme";
import CartContext from "../context/CartContext";
import CategoryContext from "../context/CategoryContext";

function Row(props) {
    const { addItem, removeItem, subtractItem } = useContext(CartContext);
    const { category, items } = props;
    const [open, setOpen] = React.useState(false);

    const itemsFromCategory = useMemo(() => {
        return items?.filter(i => i.item.category === category.id);
    }, [category.id, items]);

    const totalItemsFromCategory = useMemo(() => {
        let count = 0;
        itemsFromCategory?.forEach(i => {
            count = count + i.quantity;
        })
        return count;
    }, [itemsFromCategory]);

    const totalForCategory = useMemo(() => {
        let result = 0;
        itemsFromCategory?.forEach(i => {
            result = result + (i.quantity * i.item.price);
        });
        return result;
    }, [itemsFromCategory]);

    const add = (itemWithQuantity) => {
        const totalQuantity = 1 + itemWithQuantity.quantity;
        if (totalQuantity <= itemWithQuantity.item.stock) {
            addItem(itemWithQuantity.item, totalQuantity);
        }
    };

    const subtract = (itemWithQuantity) => {
        if (itemWithQuantity.quantity === 1) {
            removeItem(itemWithQuantity.item.id);
        } else {
            subtractItem(itemWithQuantity.item.id);
        }
    };

    return (
        <>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {category.name}
                </TableCell>
                <TableCell>{totalItemsFromCategory}</TableCell>
                <TableCell align="right">$ {Math.round(totalForCategory)}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                {category.name}
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell />
                                        <TableCell>Producto</TableCell>
                                        <TableCell>Cantidad</TableCell>
                                        <TableCell>Precio</TableCell>
                                        <TableCell>Total</TableCell>
                                        <TableCell />
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {itemsFromCategory?.map((i) => (
                                        <TableRow key={i.item.id}>
                                            <TableCell>
                                                <CardMedia
                                                    component="img"
                                                    sx={{
                                                        height: 40,
                                                        width: 50
                                                    }}
                                                    image={i.item.pictureUrl}
                                                    alt={i.item.description}
                                                />
                                            </TableCell>
                                            <TableCell>
                                                {i.item.name}
                                            </TableCell>
                                            <TableCell>
                                                {i.quantity}
                                            </TableCell>
                                            <TableCell>
                                                $ {i.item.price}
                                            </TableCell>
                                            <TableCell>
                                                $ {i.item.price * i.quantity}
                                            </TableCell>
                                            <TableCell align="right">
                                                <IconButton onClick={() => add(i)} aria-label="add" size="small">
                                                    <AddCircleOutlined color="success" />
                                                </IconButton>
                                                <IconButton onClick={() => subtract(i)} aria-label="minus" size="small">
                                                    <RemoveCircleOutlined color="warning" />
                                                </IconButton>
                                                <IconButton onClick={() => removeItem(i.item.id)} aria-label="remove" size="small">
                                                    <DeleteForeverOutlined color="error" />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
}

function ClearCart({handleClick}) {
    return (
        <div
            style={{
                position: "absolute",
                top: -20,
                right: 20
            }}
        >
            <Button variant="contained" color="error" onClick={handleClick}>Vaciar el carrito</Button>
        </div>
    );
}

const Cart = () => {
    const navigate = useNavigate();
    const { items, clear } = useContext(CartContext);
    const { categories } = useContext(CategoryContext);

    useEffect(() => {
        if (!items || (items && items.length === 0)) {
            navigate('/', { state: {emptyCart: true}});
        }
    }, [items, navigate]);

    const filterCategories = useMemo(() => {
        const categoriesIds = new Set();
        items?.forEach((i) => {
            categoriesIds.add(i.item.category);
        })
        return categories.filter(c => categoriesIds.has(c.id));
    }, [items, categories]);

    const total = useMemo(() => {
        let result = 0;
        items?.forEach(i => {
            result = result + (i.quantity * i.item.price);
        });
        return result;
    }, [items]);

    return (
        <Layout>
            <Box sx={{margin: "auto", justifyContent: 'space-evenly' }}>
                <div
                    style={{
                        backgroundColor: customTheme.palette.primary.main,
                        padding: "10px",
                        margin: "10px 0",
                        textAlign: "center",
                        borderRadius: "8px",
                        color: "white"
                    }}
                >
                    <Typography
                        variant="h4"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.1rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            textAlign: "center"
                        }}
                    >
                        Estas son sus compras
                    </Typography>
                </div>
                <div style={{ position: 'relative', marginTop: 25 }}>
                    <TableContainer component={Paper}>
                        <ClearCart handleClick={clear} />
                        <Table aria-label="collapsible table">
                            <TableHead>
                                <TableRow>
                                    <TableCell />
                                    <TableCell>Categoría</TableCell>
                                    <TableCell>Cantidad de Productos</TableCell>
                                    <TableCell align="right">Total</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {filterCategories.map((category) => (
                                    <Row
                                        key={category.id}
                                        category={category}
                                        items={items}
                                    />
                                ))}
                                <TableRow>
                                    <TableCell colSpan={2} />
                                    <TableCell colSpan={1}><strong>Subtotal</strong></TableCell>
                                    <TableCell align="right">$ {Math.round(total)}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={2} />
                                    <TableCell colSpan={1} ><strong>IVA 22 %</strong></TableCell>
                                    <TableCell align="right">$ {Math.round(total * 0.22)}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={2} />
                                    <TableCell colSpan={1}><strong>Total</strong></TableCell>
                                    <TableCell align="right">$ {Math.round(total * 1.22)}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>            
                </div>
            </Box>
        </Layout>
    );
}

export default Cart;
