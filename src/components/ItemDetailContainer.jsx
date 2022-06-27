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
        category: 2,
        name: "Lenovo",
        pictureUrl: "http://localhost:3000/images/lenovo_1.webp",
        description: 'Notebook Lenovo IdeaPad 15ITL05 platinum grey 15.6", Intel Core i3 1115G4 8GB de RAM 256GB SSD, Intel UHD Graphics Xe G4 48EUs 1366x768px Windows 11 Home',
        stock: 5,
        price: 612
    },
    {
        id: 2,
        category: 2,
        name: "Asus",
        pictureUrl: "http://localhost:3000/images/asus_1.webp",
        description: 'Notebook Asus VivoBook E410MA rosa 14", Intel Celeron N4020 4GB de RAM 128GB SSD, Intel UHD Graphics 600 1366x768px Windows 10 Home',
        stock: 3,
        price: 519
    },
    {
        id: 3,
        category: 2,
        name: "Canguro",
        pictureUrl: "http://localhost:3000/images/hp_1.webp",
        description: 'Notebook HP 14-dk1022wm natural silver 14", AMD Ryzen 3 3250U 4GB de RAM 128GB SSD, AMD Radeon Vega 3 1366x768px Windows 10 Home',
        stock: 5,
        price: 477
    },
    {
        id: 4,
        category: 2,
        name: "Dell",
        pictureUrl: "http://localhost:3000/images/dell_1.webp",
        description: 'Notebook Dell Inspiron 3501 plata 15.55", Intel Core i3 1005G1 4GB de RAM 1000GB HDD, Intel UHD Graphics G1 (Ice Lake 32 EU) 60 Hz 1366x768px Windows 10 Home',
        stock: 2,
        price: 684
    },
    {
        id: 5,
        category: 2,
        name: "MSI Gamer",
        pictureUrl: "http://localhost:3000/images/msi_1.webp",
        description: 'Notebook Msi Gf65 15.6" Core I5 Fhd 512 Gb 8 Gb Rtx3060 Amv',
        stock: 4,
        price: 1499
    },
    {
        id: 6,
        category: 1,
        name: "Torre i5",
        pictureUrl: "http://localhost:3000/images/i5_1.webp",
        description: 'Torre Pc Computadora Nueva Intel Core I5 8gb Ram 500gb Wifi',
        stock: 4,
        price: 349
    },
    {
        id: 7,
        category: 1,
        name: "Torre HP",
        pictureUrl: "http://localhost:3000/images/torrehp_1.webp",
        description: 'Torre Computadora Pc Equipo Intel Core I5 16gb 1tb Windows10 (Reacondicionado)',
        stock: 4,
        price: 299
    },
    {
        id: 8,
        category: 1,
        name: "PC Gamer",
        pictureUrl: "http://localhost:3000/images/pcgamer_1.webp",
        description: 'Pc Torre Computadora Gamer I7 3.4ghz 12gb 500gb Rx550 4gb',
        stock: 4,
        price: 299
    },
    {
        id: 9,
        category: 1,
        name: "PC Desktop",
        pictureUrl: "http://localhost:3000/images/pcelite_1.webp",
        description: 'Pc Computadora Gamer Hp Amd Quad Core 16gb 240gb Ssd Radeon (Reacondicionado)',
        stock: 7,
        price: 399
    },
    {
        id: 10,
        category: 1,
        name: "PC Warrior Gamer",
        pictureUrl: "http://localhost:3000/images/pcwarrior_1.webp",
        description: 'Computadora Pc Gamer Nueva Core I5 16gb 240g Ssd + Video 4gb',
        stock: 7,
        price: 720
    },
    {
        id: 11,
        category: 1,
        name: "Monitor Lg",
        pictureUrl: "http://localhost:3000/images/monitorlg_1.webp",
        description: 'Monitor gamer LG 27MK400H led 27 " negro 100V/240V',
        stock: 3,
        price: 199
    },
    {
        id: 12,
        category: 3,
        name: "Monitor Acer Nitro",
        pictureUrl: "http://localhost:3000/images/acernitro_1.webp",
        description: 'Monitor gamer Acer Nitro VG0 VG240Y led 23.8 " negro 100V/240V',
        stock: 9,
        price: 370
    },
    {
        id: 13,
        category: 3,
        name: "Monitor Samsung",
        pictureUrl: "http://localhost:3000/images/msamsung_1.webp",
        description: 'Monitor gamer Samsung F24T35 led 24 " azul y gris oscuro 100V/240V',
        stock: 9,
        price: 221
    },
    {
        id: 14,
        category: 3,
        name: "Monitor Aiwa",
        pictureUrl: "http://localhost:3000/images/aiwa_1.webp",
        description: 'Monitor Aiwa AW24FHDM4 LCD 23.8" negro',
        stock: 9,
        price: 214
    },
    {
        id: 15,
        category: 3,
        name: "Monitor ViewSonic",
        pictureUrl: "http://localhost:3000/images/viewsonic_1.webp",
        description: 'Monitor Led Viewsonic Va3456-mhdj 34 Ips Ultrawide 2xhdmi',
        stock: 9,
        price: 639
    },
    {
        id: 16,
        category: 4,
        name: "Celular Samsung",
        pictureUrl: "http://localhost:3000/images/galaxya32_1.webp",
        description: 'Samsung Galaxy A32 128 GB awesome violet 4 GB RAM',
        stock: 9,
        price: 297
    },
    {
        id: 17,
        category: 4,
        name: "Celular iPhone 11",
        pictureUrl: "http://localhost:3000/images/iphone_1.webp",
        description: 'Celular Apple iPhone 11 (64 GB) - Negro',
        stock: 9,
        price: 759
    },
    {
        id: 18,
        category: 4,
        name: "Celular Caterpillar",
        pictureUrl: "http://localhost:3000/images/cat_1.webp",
        description: 'Celular caterpillar CAT S48c 64 GB negro 4 GB RAM',
        stock: 11,
        price: 480
    },
    {
        id: 19,
        category: 4,
        name: "Celular Motorola",
        pictureUrl: "http://localhost:3000/images/moto_1.webp",
        description: 'Celular Motorola Moto E7i Power Dual SIM 32 GB azul 2 GB RAM',
        stock: 20,
        price: 156
    },
    {
        id: 20,
        category: 4,
        name: "Celular Xiaomi",
        pictureUrl: "http://localhost:3000/images/xiaomi_1.webp",
        description: 'Celular Xiaomi Redmi Note 10S Dual SIM 128 GB gris ónix 6 GB RAM',
        stock: 17,
        price: 292
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