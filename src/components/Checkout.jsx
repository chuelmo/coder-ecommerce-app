import React, {useContext, useEffect, useState} from "react";
import {getFirestore, addDoc, collection} from "firebase/firestore";
import {useLocation, useNavigate} from "react-router-dom";
import {useForm, Controller} from "react-hook-form";
import Typography from '@mui/material/Typography';
import {Alert, LinearProgress, TextField} from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Layout from "./Layout";
import CartContext from "../context/CartContext";
import {customTheme} from "../utils/theme";

const Checkout = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const { control, handleSubmit, watch, formState: { errors } } = useForm();
    const { items, clear } = useContext(CartContext);
    const [message, setMessage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [successOperation, setSuccessOperation] = useState(false);

    useEffect(() => {
        if ((!items && !successOperation) || (items && items.length === 0 && !successOperation)) {
            navigate('/', { state: {emptyCart: true}});
        }
    }, [items, navigate, successOperation]);

    const onSubmit = async (data) => {
        setLoading(true);
        const db = getFirestore();
        const { email, phone, name } = data;
        const orderCollection = collection(db, "orders");
        const productsWrapper = items.map(item => ({
            id: item.item.id,
            price: item.item.price,
            name: item.item.name,
            quantity: item.quantity
        }))
        if (state?.total) {
            try {
                const order = await addDoc(orderCollection, {
                    buyer: {
                        name,
                        email,
                        phone
                    },
                    items: productsWrapper,
                    total: state.total,
                    date: new Date().toISOString()
                });
                const { id } = order;
                setMessage({
                    type: "success",
                    message: `Su orden de compra se generó correctamente. ID de orden: ${id}`
                })
                setSuccessOperation(true);
                clear();
            } catch(_err) {
                setMessage({
                    type: "error",
                    message: `Ocurrió un error al realizar la compra, intente más tarde por favor.`
                })
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <Layout>
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
                    Orden de compra
                </Typography>
            </div>
            <Box
                sx={{
                    backgroundColor: "#ffffff",
                    padding: "15px",
                }}
            >
                {loading && (
                    <LinearProgress />
                )}
                {message && (
                    <Alert variant="outlined" severity={message.type}>
                        {message.message}
                    </Alert>
                )}
                {!successOperation && (
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid container spacing={1} mb={1} mt={1}>
                            <Grid item sm={12}>
                                <Controller
                                    name="name"
                                    control={control}
                                    defaultValue={''}
                                    rules={{ required: { value: true, message: "Ingrese su nombre."} }}
                                    render={({ field }) => <TextField fullWidth label="Nombre" variant="standard" {...field} />}
                                />
                                {errors?.name && (
                                    <Alert variant="outlined" severity="error">
                                        {errors.name.message}
                                    </Alert>
                                )}
                            </Grid>
                            <Grid item sm={12}>
                                <Controller
                                    name="phone"
                                    control={control}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: "Ingrese su teléfono."
                                        },
                                    }}
                                    defaultValue={''}
                                    render={({ field }) => <TextField fullWidth label="Teléfono" variant="standard" {...field} />}
                                />
                                {errors?.phone && (
                                    <Alert variant="outlined" severity="error">
                                        {errors.phone.message}
                                    </Alert>
                                )}
                            </Grid>
                            <Grid item sm={12}>
                                <Controller
                                    name="email"
                                    control={control}
                                    defaultValue={''}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: "Ingrese su email."
                                        },
                                        pattern: {
                                            value: /^(([^<>()[\]\\.,;:\s@"]+(.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+.)+[a-zA-Z]{2,}))$/i,
                                            message: "El email es incorrecto."
                                        }
                                    }}
                                    render={({ field }) => <TextField fullWidth label="Email" variant="standard" {...field} />}
                                />
                                {errors?.email && (
                                    <Alert variant="outlined" severity="error">
                                        {errors.email.message}
                                    </Alert>
                                )}
                            </Grid>
                            <Grid item sm={12}>
                                <Controller
                                    name="confirmEmail"
                                    control={control}
                                    defaultValue={''}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: "Debe confirmar el email."
                                        },
                                        pattern: {
                                            value: /^(([^<>()[\]\\.,;:\s@"]+(.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+.)+[a-zA-Z]{2,}))$/i,
                                            message: "El email es incorrecto."
                                        },
                                        validate: (val) => {
                                            if (watch('email') !== val) {
                                                return "El email no coincide.";
                                            }
                                        },
                                    }}
                                    render={({ field }) => <TextField fullWidth label="Confirmación de Email" variant="standard" {...field} />}
                                />
                                {errors?.confirmEmail && (
                                    <Alert variant="outlined" severity="error">
                                        {errors.confirmEmail.message}
                                    </Alert>
                                )}
                            </Grid>
                        </Grid>
                        <Button type="submit" disabled={loading} variant="contained">Enviar</Button>
                    </form>
                )}
            </Box>
        </Layout>
    );
}

export default Checkout;
