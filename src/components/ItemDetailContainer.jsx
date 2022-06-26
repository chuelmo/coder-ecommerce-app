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

const products = [
    {
        id: 1,
        name: "Leon",
        pictureUrl: leones,
        description: 'Los Leones son unos animales maravillosos y majestuosos',
        stock: 5,
        price: 999
    },
    {
        id: 2,
        name: "Iguana",
        pictureUrl: iguana,
        description: 'Hola Iguana, no te preocupes, no voy a vender animales',
        stock: 3,
        price: 670
    },
    {
        id: 3,
        name: "Canguro",
        pictureUrl: canguro,
        description: 'Vivo en Australia y me desplazo saltando',
        stock: 5,
        price: 340
    },
    {
        id: 4,
        name: "Jirafa",
        pictureUrl: jirafa,
        description: 'Soy el animal más alto del mundo',
        stock: 2,
        price: 245
    },
    {
        id: 5,
        name: "Hipo",
        pictureUrl: hipo,
        description: 'Soy uno de los animales más grandes que existen y muy peligroso',
        stock: 4,
        price: 200
    }
];

export default function ItemDetailContainer({ greeting }) {
    const [items, setItems] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            new Promise((resolve, _reject) => {
                resolve(products);
            }).then(res => {
                setItems(res)
            }).then(() => setIsLoading(false));
        }, 2500);
    }, []);

    return (
      <Layout>
          {isLoading
              ? <ItemListLoader amount={6} />
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
                                      borderRadius: "8px"
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
                                      {greeting}
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