import React, {useContext, useMemo} from "react";
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CardMedia from "@mui/material/CardMedia";
import {AddCircleOutlined, DeleteForeverOutlined, RemoveCircleOutlined} from "@mui/icons-material";
import CartContext from "../context/CartContext";

export default function CartRowDesktop(props) {
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
                                                    alt={i.item.name}
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
