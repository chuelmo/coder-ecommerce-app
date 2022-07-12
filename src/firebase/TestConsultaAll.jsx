import React, { useEffect } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import Grid from "@mui/material/Grid";
import Layout from "../components/Layout";

export default function TestConsultaAll() {
    const [categories, setCategories] = React.useState(null);

    useEffect(() => {
        const db = getFirestore();

        const items = collection(db, "categories");
        getDocs(items).then((response) => {
            setCategories(response.docs.map((category) => (
                { id: category.id, ...category.data() }
            )));
            console.log(response.docs);
        });
    }, []);

    return (
        <Layout>
            <div>Consultar todas las categorías (testing)</div>
            {categories && (
                <Grid container spacing={2} direction="row" alignItems="flex-start">
                    {categories.map((item, index) => (
                        <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                            <p>Category id: {item.id}<br />
                                Category name: {item.name}<br />
                                Category key: {item.key}
                            </p>
                        </Grid>
                    ))}
                </Grid>
            )}
        </Layout>
    );
}

