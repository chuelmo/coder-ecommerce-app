import React, {useState} from "react";
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';

export default function ItemCount({stock, onAdd}) {
    const [count, setCount] = useState(0);

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
        <>
            <IconButton onClick={removeProduct} aria-label="delete">
                <RemoveCircleOutlineOutlinedIcon />
            </IconButton>
            {count}
            <IconButton onClick={addProduct} aria-label="delete">
                <AddCircleOutlineOutlinedIcon />
            </IconButton>
            <Button onClick={() => onAdd(count)} variant="contained">Agregar al Carrito</Button>
        </>
    );
}