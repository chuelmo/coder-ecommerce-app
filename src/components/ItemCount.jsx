import React, {useState} from "react";
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';

export default function ItemCount({stock, initial, onAdd}) {
    const [count, setCount] = useState(initial);

    const addProduct = () => {
        if (count < stock) {
            setCount(prevState => prevState + 1);
        }
    }

    const removeProduct = () => {
        if (count > 0) {
            setCount(prevState => prevState - 1);
        }
    }

    return (
        <Grid container>
            <Grid item xs={12}>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    style={{ border: "1px solid grey" }}
                >
                    <IconButton onClick={removeProduct} aria-label="delete">
                        <RemoveCircleOutlineOutlinedIcon />
                    </IconButton>
                    {count}
                    <IconButton onClick={addProduct} aria-label="delete">
                        <AddCircleOutlineOutlinedIcon />
                    </IconButton>
                </Grid>
            </Grid>
            <Grid item mt={2} xs={12}
              container
              direction="row"
              justifyContent="center"
              alignItems="flex-end"
            >
                <Button onClick={() => onAdd(count)} variant="outlined">Agregar al Carrito</Button>
            </Grid>
        </Grid>
    );
}