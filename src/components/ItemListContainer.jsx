import {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import {Grow} from "@mui/material";
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import ItemList from "./ItemList";
import { ItemListLoader } from "../utils/CustomLoaders";
import Layout from "./Layout";
import { customTheme } from "../utils/theme";
import CustomMessage from "../utils/CustomMessage";
import { categories, products } from "../utils/store";

export default function ItemListContainer({ greeting }) {
    const params = useParams();
    const [items, setItems] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [message, setMessage] = useState(null);
    const [title, setTitle] = useState(greeting);

    useEffect(() => {
        setIsLoading(true);
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