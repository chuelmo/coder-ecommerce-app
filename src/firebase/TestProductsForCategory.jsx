import React, { useEffect, useMemo } from 'react';
import { collection, getFirestore, query, where, getDocs } from 'firebase/firestore';
import { getStorage, ref} from "firebase/storage";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import Layout from '../components/Layout';

export default function TestProductsForCategory() {
    const [products, setProducts] = React.useState(null);
    const storage = getStorage();
    const imagesRef = ref(storage, 'images');

    const publicUrl = useMemo(() => {
        return `https://firebasestorage.googleapis.com/v0/b/${imagesRef.bucket}/o/images%2F`;
    }, [imagesRef]);

    useEffect(() => {
        const db = getFirestore();
        const items = collection(db, "products");
        const q = query(items, where("category", "==", "xGmOb5KVfg4I7CgmIX3m"));
        getDocs(q).then(res => {
            if (res.size === 0) {
                console.log("No hay artículos en esa categoría");
            } else {
                console.log("Se encontraron artículos!!");
                setProducts(res.docs.map(doc => ({
                    id: doc.id, ...doc.data()
                })));
            }
        });
    }, []);

    return (
        <Layout>
            <div>Artículos por categoría (testing)</div>
            {products && (
                <Grid container spacing={2} direction="row" alignItems="flex-start">
                    {products.map((item, index) => (
                        <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                            <p>Product id: {item.id}<br />
                                Product name: {item.name}<br />
                                Product price: {item.price}
                            </p>
                            <Card>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={`${publicUrl}${item.pictureUrl}?alt=media`}
                                    alt={item.name}
                                />
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            )}
        </Layout>
    );
}

