import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import Layout from "../components/Layout";

import { getStorage, ref} from "firebase/storage";
import { useMemo } from 'react';

export default function TestConsulta() {
    const [product, setProduct] = React.useState(null);
    const storage = getStorage();
    const imagesRef = ref(storage, 'images');

    const publicUrl = useMemo(() => {
        return `https://firebasestorage.googleapis.com/v0/b/${imagesRef.bucket}/o/images%2F`;
    }, [imagesRef]);

    useEffect(() => {
        const db = getFirestore();

        const lenovo = doc(db, "products", "wAjUPqkcTtuedSlGpxyt");
        getDoc(lenovo).then((response) => {
            if (response.exists()) {
                setProduct({ id: response.id, ...response.data() });
            }
        });
    }, []);

    return (
        <Layout>
            <div>Consultar un solo producto (testing)</div>
            {product && (
                <div>
                    <p>id: {product.id}</p>
                    <p>name: {product.name}</p>
                    <p>price: {product.price}</p>
                    
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={`${publicUrl}${product.pictureUrl}?alt=media`}
                            alt={product.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </div>
                
            )}
            
        </Layout>
    );
}
