import React, {useContext} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CardMedia from "@mui/material/CardMedia";
import IconButton from '@mui/material/IconButton';
import {AddCircleOutlined, DeleteForeverOutlined, RemoveCircleOutlined} from "@mui/icons-material";
import CartContext from "../context/CartContext";

export default function CartTableMobile(props) {
  const { addItem, removeItem, subtractItem } = useContext(CartContext);
  const { items, total } = props;

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
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 290 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Producto: detalles</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items?.map((i) => (
            <TableRow
              key={i.item.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="td" scope="row">
                <CardMedia
                  component="img"
                  sx={{
                      height: 40,
                      width: 50
                  }}
                  image={i.item.pictureUrl}
                  alt={i.item.name}
                />
                {i.item.name} x{i.quantity}<br />
                $ {i.item.price}<br />
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
              <TableCell align="right">$ {i.item.price * i.quantity}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell align="right">Sub-total</TableCell>
            <TableCell align="right">$ {Math.round(total)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right">IVA 22%</TableCell>
            <TableCell align="right">$ {Math.round(total * 0.22)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right">Total</TableCell>
            <TableCell align="right">$ {Math.round(total * 1.22)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

