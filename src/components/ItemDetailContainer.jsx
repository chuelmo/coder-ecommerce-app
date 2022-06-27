import {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import {Grow} from "@mui/material";
import Typography from '@mui/material/Typography';
import ItemList from "./ItemList";
import ItemListLoader from "./ItemListLoader";
import Layout from "./Layout";
import { customTheme } from "../utils/theme";
import { useParams } from 'react-router-dom';
import CustomMessage from "../utils/CustomMessage";
import ItemDetail from "./ItemDetail";

const products = [
    {
        id: 1,
        category: 1,
        name: "Leon",
        pictureUrl: "http://localhost:3000/leones.png",
        description: 'Los Leones son unos animales maravillosos y majestuosos',
        stock: 5,
        price: 999
    },
    {
        id: 2,
        category: 1,
        name: "Iguana",
        pictureUrl: "http://localhost:3000/reptile.jpg",
        description: 'Hola Iguana, no te preocupes, no voy a vender animales',
        stock: 3,
        price: 670
    },
    {
        id: 3,
        category: 2,
        name: "Canguro",
        pictureUrl: "http://localhost:3000/canguro.jpg",
        description: 'Vivo en Australia y me desplazo saltando',
        stock: 5,
        price: 340
    },
    {
        id: 4,
        category: 2,
        name: "Jirafa",
        pictureUrl: "http://localhost:3000/jirafa.jpg",
        description: 'Soy el animal más alto del mundo',
        stock: 2,
        price: 245
    },
    {
        id: 5,
        category: 2,
        name: "Hipo",
        pictureUrl: "http://localhost:3000/hipo.jpg",
        description: 'Soy uno de los animales más grandes que existen y muy peligroso',
        stock: 4,
        price: 200
    }
];

export default function ItemDetailContainer({ msgTitle }) {
    const params = useParams();
    const [items, setItems] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [message, setMessage] = useState(null);
    const [title, setTitle] = useState(msgTitle);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            new Promise((resolve, _reject) => {
                if (params.id) {
                    const idToInt = parseInt(params.id);
                    const article = products.find(p => p.id === idToInt);
                    if (article) {
                        setTitle(`Detalles del producto ${article.name}`);
                        resolve(products.filter(p => p.id === idToInt));
                    } else {
                        setMessage({
                            msg: `No existe un producto con el ID: ${params.id}`,
                            severity: 'warning'
                        });
                        setTitle("Ofertas de la semana");
                        resolve(products);
                    }
                } else {
                    setTitle("Ofertas de la semana");
                    resolve(products);
                }
            }).then(res => {
                setItems(res)
            }).then(() => setIsLoading(false));
        }, 2000);
    }, [params.id]);

    const itemExists = (title !== "Ofertas de la semana");

    return (
      <Layout>
          {isLoading
              ? <ItemListLoader amount={6} />
              : items && (
                  <>
                    <CustomMessage
                        message={message?.msg} 
                        isOpen={message !== null}
                        onClose={() => setMessage(null)}
                        severity={message?.severity}
                    />
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
                              {itemExists ? (
                                    <ItemDetail {...items[0]}/>
                                ) : (
                                    <ItemList items={items} />
                                )}    
                          </Box>
                      </Grow>
                  </>
              )
          }
      </Layout>
    );
}