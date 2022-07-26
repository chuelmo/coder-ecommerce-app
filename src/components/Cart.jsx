import React, {useContext, useEffect, useMemo, useState} from "react";
import {useNavigate} from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Grid";
import Layout from "./Layout";
import { customTheme } from "../utils/theme";
import CartContext from "../context/CartContext";
import CategoryContext from "../context/CategoryContext";
import CartRowDesktop from "./CartRowDesktop";
import CartTableMobile from "./CartTableMobile";

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

function CheckoutCart({handleClick}) {
    return (
        <div
            style={{
                position: "absolute",
                bottom: -30,
                right: 20
            }}
        >
            <Button variant="contained" color="success" onClick={handleClick}>Finalizar compra</Button>
        </div>
    );
}

function HeadTitle() {
    return (
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
    );
}

const Cart = () => {
    const navigate = useNavigate();
    const { items, clear } = useContext(CartContext);
    const { categories } = useContext(CategoryContext);
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 600;

    useEffect(() => {
        if (!items || (items && items.length === 0)) {
            navigate('/', { state: {emptyCart: true}});
        }
    }, [items, navigate]);

    useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResizeWindow);
        return () => {
            window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);

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

    if (width > breakpoint) {
        return (
            <Layout>
                <Box sx={{margin: "auto", justifyContent: 'space-evenly' }}>
                    <HeadTitle />
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
                                        <CartRowDesktop
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
                            <CheckoutCart handleClick={() => navigate("/checkout", { state: {total}})} />
                        </TableContainer>            
                    </div>
                </Box>
            </Layout>
        );
    }
    return (
        <Layout>
            <Box sx={{margin: "auto", justifyContent: 'space-evenly' }}>
                <HeadTitle />
                <div>
                    <CartTableMobile items={items} total={total} />
                    <Grid container spacing={1} mb={1} mt={1}>
                        <Grid item xs={12}>
                            <Button variant="contained" color="error" onClick={clear}>Vaciar el carrito</Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" color="success" onClick={() => navigate("/checkout", { state: {total}})}>Finalizar compra</Button>
                        </Grid>
                    </Grid>
                </div>
            </Box>
        </Layout>
    );
}

export default Cart;
