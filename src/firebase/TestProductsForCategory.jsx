import React, {useEffect} from 'react';
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore';
import {getDownloadURL, getStorage, ref} from "firebase/storage";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import Layout from '../components/Layout';

export default function TestProductsForCategory() {
    const [products, setProducts] = React.useState(null);
    const storage = getStorage();

    useEffect(() => {
        const db = getFirestore();
        const items = collection(db, "products");
        const q = query(items, where("category", "==", "xGmOb5KVfg4I7CgmIX3m"));
        getDocs(q).then(async res => {
            if (res.size === 0) {
                console.log("No hay artículos en esa categoría");
            } else {
                const products = await Promise.all(
                    res.docs.map(async (doc) => {
                        const pictureRef = ref(storage, `images/${doc.data().pictureUrl}`);
                        try {
                            const image = await getDownloadURL(pictureRef);
                            const articleImages = await Promise.all(
                                 doc.data().articleImages.map(async (image) => {
                                    const originalRef = ref(storage, `images/${image.original}`);
                                    const thumbnailRef = ref(storage, `images/${image.thumbnail}`);
                                    try {
                                        const original = await getDownloadURL(originalRef);
                                        const thumbnail = await getDownloadURL(thumbnailRef);
                                        return { original, thumbnail };
                                    } catch (_err) {
                                        return null;
                                    }
                                })
                            );
                            return { ...doc.data(), id: doc.id, pictureUrl: image, articleImages };
                        } catch (_err) {
                            return { ...doc.data(), id: doc.id };
                        }
                    })
                );
                setProducts(products);
            }
        });
    }, [storage]);

    console.log(products);

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
                                    image={item.pictureUrl}
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