import React, {useState, useEffect} from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function CustomMessage({ message, isOpen, onClose, severity }) {
    const [open, setOpen] = useState();

    useEffect(() => {
        setOpen(isOpen);
    }, [isOpen]);

    const handleClose = () => {
        setOpen(false);
        if (onClose) onClose();
    }

    return (
        <Snackbar anchorOrigin={{vertical: 'top', horizontal: 'right'}} open={open} autoHideDuration={4000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={severity ?? 'success'} sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
    );
}