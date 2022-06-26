import {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import {Grow} from "@mui/material";
import Typography from '@mui/material/Typography';
import ItemList from "./ItemList";
import leones from "../assets/img/leones.png";
import iguana from "../assets/img/reptile.jpg";
import canguro from "../assets/img/canguro.jpg";
import jirafa from "../assets/img/jirafa.jpg";
import hipo from "../assets/img/hipo.jpg";
import ItemListLoader from "./ItemListLoader";
import Layout from "./Layout";
import { customTheme } from "../utils/theme";
import { useParams } from 'react-router-dom';
import CustomMessage from "../utils/CustomMessage";

const categories = [
    {
        id: 1,
        name: "Computadoras"
    },
    {
        id: 2,
        name: "Notebooks"
    }
]


const products = [
    {
        id: 1,
        category: 1,
        name: "Leon",
        pictureUrl: leones,
        description: 'Los Leones son unos animales maravillosos y majestuosos',
        stock: 5,
        price: 999
    },
    {
        id: 2,
        category: 1,
        name: "Iguana",
        pictureUrl: iguana,
        description: 'Hola Iguana, no te preocupes, no voy a vender animales',
        stock: 3,
        price: 670
    },
    {
        id: 3,
        category: 2,
        name: "Canguro",
        pictureUrl: canguro,
        description: 'Vivo en Australia y me desplazo saltando',
        stock: 5,
        price: 340
    },
    {
        id: 4,
        category: 2,
        name: "Jirafa",
        pictureUrl: jirafa,
        description: 'Soy el animal más alto del mundo',
        stock: 2,
        price: 245
    },
    {
        id: 5,
        category: 2,
        name: "Hipo",
        pictureUrl: hipo,
        description: 'Soy uno de los animales más grandes que existen y muy peligroso',
        stock: 4,
        price: 200
    }
];

export default function ItemListContainer({ greeting }) {
    const params = useParams();
    const [items, setItems] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [message, setMessage] = useState(null);
    const [title, setTitle] = useState(greeting);

    useEffect(() => {
        setTimeout(() => {
            new Promise((resolve, _reject) => {
                if (params.id) {
                    const idToInt = parseInt(params.id);
                    const category = categories.find(c => c.id === idToInt);
                    if (category) {
                        setTitle(`Ofertas de la categoría ${category.name}`);
                        resolve(products.filter(p => p.category === idToInt));
                    } else {
                        setMessage({
                            msg: `No existe una categoría con el ID: ${params.id}`,
                            severity: 'warning'
                        });
                        resolve(products);
                    }
                } else {
                    resolve(products);
                }
            }).then(res => {
                setItems(res)
            }).then(() => setIsLoading(false));
        }, 2000);
    }, [params.id]);

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
                              <ItemList items={items} />
                          </Box>
                      </Grow>
                  </>
              )
          }
      </Layout>
    );
}