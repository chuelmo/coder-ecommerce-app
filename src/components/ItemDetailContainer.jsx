import {useEffect, useState} from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import Box from "@mui/material/Box";
import {Grow} from "@mui/material";
import Typography from '@mui/material/Typography';
import Layout from "./Layout";
import { customTheme } from "../utils/theme";
import CustomMessage from "../utils/CustomMessage";
import ItemDetail from "./ItemDetail";
import { ItemDetailLoader } from "../utils/CustomLoaders";

export default function ItemDetailContainer() {
    const params = useParams();
    const navigate = useNavigate();
    const [item, setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [message, setMessage] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        if (params.id) {
            const db = getFirestore();
            const prodRef = doc(db, "products", params.id);
            getDoc(prodRef).then((response) => {
                if (response.exists()) {
                    setItem({ id: response.id, ...response.data() });
                } else {
                    navigate("/");
                }
                setIsLoading(false);
            });
        } else {
            setIsLoading(false);
        }
    }, [params.id, navigate]);

    return (
      <Layout>
          {isLoading
              ? <ItemDetailLoader />
              : item && (
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
                                      {`Detalles del producto ${item.name}`}
                                  </Typography>
                              </div>
                              <ItemDetail item={item} />
                          </Box>
                      </Grow>
                  </>
              )
          }
      </Layout>
    );
}