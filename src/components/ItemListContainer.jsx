import {useEffect, useState} from "react";
import {useLocation, useNavigate, useParams} from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import Box from "@mui/material/Box";
import {Grow} from "@mui/material";
import Typography from '@mui/material/Typography';
import ItemList from "./ItemList";
import { ItemListLoader } from "../utils/CustomLoaders";
import Layout from "./Layout";
import { customTheme } from "../utils/theme";
import CustomMessage from "../utils/CustomMessage";

export default function ItemListContainer({ greeting }) {
    const db = getFirestore();
    const navigate = useNavigate();
    const params = useParams();
    const { state } = useLocation();
    const [items, setItems] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [message, setMessage] = useState(null);
    const [title, setTitle] = useState(greeting);

    useEffect(() => {
        const KEY_CODER_CATEGORIES = "KEY_CODER_CATEGORIES";
        const categoriesLS = JSON.parse(localStorage.getItem(KEY_CODER_CATEGORIES));
        const get = async () => {
            if (state?.emptyCart) {
                setMessage({
                    msg: 'El carrito está vacío',
                    severity: 'warning'
                });
            }
            setIsLoading(true);
            const productsRef = collection(db, "products");
            let q;
            if (params.id) {
                let cat = null;
                if (categoriesLS) {
                    cat = categoriesLS.find(category => (category.id === params.id));
                }
                if (cat) {
                    setTitle(`Ofertas de la categoría ${cat.name}`);
                    q = query(productsRef, where("category", "==", params.id));
                } else {
                    setMessage({
                        msg: 'No se encontró la categoría.',
                        severity: 'warning'
                    });
                    navigate("/");
                }
            } else {
               q = query(productsRef);
            }
            try {
                const response = await getDocs(q);
                if (response.size === 0) {
                    setMessage({
                        msg: 'No hay productos en esa categoría.',
                        severity: 'warning'
                    });
                    navigate("/");
                } else {
                    setItems(response.docs.map((product) => ({
                        ...product.data(),
                        id: product.id
                    })));
                }
            } catch(_erro) {
                setMessage({
                    msg: 'Ocurrió un error al buscar la categoría.',
                    severity: 'error'
                });
                navigate("/");
            }
        }
        get().then(() => setIsLoading(false));
    }, [params.id, state, db, navigate]);


    return (
      <Layout>
        <CustomMessage
            message={message?.msg} 
            isOpen={message !== null}
            onClose={() => setMessage(null)}
            severity={message?.severity}
        />
          {isLoading
              ? <ItemListLoader quantity={6} />
              : items && (
                  <>
                      <Grow
                          in={!isLoading}
                          style={{ transformOrigin: '0 0 0' }}
                          {...(!isLoading ? { timeout: 1000 } : {})}
                      >
                          <Box sx={{margin: "auto", justifyContent: 'space-evenly' }}>
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
                                      {title}
                                  </Typography>
                              </div>
                              <ItemList items={items} />
                          </Box>
                      </Grow>
                  </>
              )
          }
      </Layout>
    );
}