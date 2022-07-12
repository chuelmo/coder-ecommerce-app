import React, { useEffect } from 'react';
import { collection, getFirestore, query, where, getDocs } from 'firebase/firestore';
import Layout from '../components/Layout';

export default function TestProductsForCategory() {
    const [products, setProducts] = React.useState(null);

    useEffect(() => {
        const db = getFirestore();
        const items = collection(db, "products");
        const q = query(items, where("category", "==", "xGmOb5KVfg4I7CgmIX3m"));
        getDocs(q).then(res => {
            res.forEach(i => console.log(i.data()));
        });
    }, []);

    return (
        <Layout>
            <div>Consultar todas las categorías</div>
        </Layout>
    );
}

