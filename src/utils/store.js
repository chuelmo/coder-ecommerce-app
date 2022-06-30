export const categories = [{
    id: 1,
    name: 'Computadoras'
  },
  {
    id: 2,
    name: 'Notebooks'
  },
  {
    id: 3,
    name: 'Monitores'
  },
  {
    id: 4,
    name: 'Celulares'
  }
];

export const products = [
    {
        id: 1,
        category: 2,
        name: "Lenovo",
        pictureUrl: `${process.env.REACT_APP_URL_API_MS}/images/lenovo_1.webp`,
        description: 'Notebook Lenovo IdeaPad 15ITL05 platinum grey 15.6", Intel Core i3 1115G4 8GB de RAM 256GB SSD, Intel UHD Graphics Xe G4 48EUs 1366x768px Windows 11 Home',
        stock: 5,
        price: 612,
        rating: 3.5,
        articleImages: [
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/lenovo_1.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/lenovo_i_1.webp`
            },
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/lenovo_2.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/lenovo_i_2.webp`
            },
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/lenovo_3.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/lenovo_i_3.webp`
            },
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/lenovo_4.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/lenovo_i_4.webp`
            }
        ]
    },
    {
        id: 2,
        category: 2,
        name: "Asus",
        pictureUrl: `${process.env.REACT_APP_URL_API_MS}/images/asus_1.webp`,
        description: 'Notebook Asus VivoBook E410MA rosa 14", Intel Celeron N4020 4GB de RAM 128GB SSD, Intel UHD Graphics 600 1366x768px Windows 10 Home',
        stock: 3,
        price: 519,
        rating: 4,
        articleImages: [
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/asus_1.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/asus_i_1.webp`
            },
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/asus_2.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/asus_i_2.webp`
            },
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/asus_3.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/asus_i_3.webp`
            },
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/asus_4.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/asus_i_4.webp`
            }
        ]
    },
    {
        id: 3,
        category: 2,
        name: "Notebook HP",
        pictureUrl: `${process.env.REACT_APP_URL_API_MS}/images/hp_1.webp`,
        description: 'Notebook HP 14-dk1022wm natural silver 14", AMD Ryzen 3 3250U 4GB de RAM 128GB SSD, AMD Radeon Vega 3 1366x768px Windows 10 Home',
        stock: 5,
        price: 477,
        rating: 2.5,
        articleImages: [
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/hp_1.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/hp_i_1.webp`
            },
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/hp_2.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/hp_i_2.webp`
            },
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/hp_3.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/hp_i_3.webp`
            },
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/hp_4.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/hp_i_4.webp`
            }
        ]
    },
    {
        id: 4,
        category: 2,
        name: "Dell",
        pictureUrl: `${process.env.REACT_APP_URL_API_MS}/images/dell_1.webp`,
        description: 'Notebook Dell Inspiron 3501 plata 15.55", Intel Core i3 1005G1 4GB de RAM 1000GB HDD, Intel UHD Graphics G1 (Ice Lake 32 EU) 60 Hz 1366x768px Windows 10 Home',
        stock: 2,
        price: 684,
        rating: 1,
        articleImages: [
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/dell_1.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/dell_i_1.webp`
            },
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/dell_2.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/dell_i_2.webp`
            },
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/dell_3.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/dell_i_3.webp`
            },
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/dell_4.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/dell_i_4.webp`
            }
        ]
    },
    {
        id: 5,
        category: 2,
        name: "MSI Gamer",
        pictureUrl: `${process.env.REACT_APP_URL_API_MS}/images/msi_1.webp`,
        description: 'Notebook Msi Gf65 15.6" Core I5 Fhd 512 Gb 8 Gb Rtx3060 Amv',
        stock: 4,
        price: 1499,
        rating: 5,
        articleImages: [
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/msi_1.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/msi_i_1.webp`
            },
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/msi_2.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/msi_i_2.webp`
            },
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/msi_3.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/msi_i_3.webp`
            },
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/msi_4.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/msi_i_4.webp`
            }
        ]
    },
    {
        id: 6,
        category: 1,
        name: "Torre i5",
        pictureUrl: `${process.env.REACT_APP_URL_API_MS}/images/i5_1.webp`,
        description: 'Torre Pc Computadora Nueva Intel Core I5 8gb Ram 500gb Wifi',
        stock: 4,
        price: 349,
        rating: 4,
        articleImages: [
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/i5_1.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/i5_i_1.webp`
            },
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/i5_2.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/i5_i_2.webp`
            },
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/i5_3.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/i5_i_3.webp`
            },
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/i5_4.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/i5_i_4.webp`
            }
        ]
    },
    {
        id: 7,
        category: 1,
        name: "Torre HP",
        pictureUrl: `${process.env.REACT_APP_URL_API_MS}/images/torrehp_1.webp`,
        description: 'Torre Computadora Pc Equipo Intel Core I5 16gb 1tb Windows10 (Reacondicionado)',
        stock: 4,
        price: 299,
        rating: 4.5,
        articleImages: [
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/torrehp_1.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/torrehp_i_1.webp`
            },
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/torrehp_2.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/torrehp_i_2.webp`
            },
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/torrehp_3.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/torrehp_i_3.webp`
            },
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/torrehp_4.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/torrehp_i_4.webp`
            }
        ]
    },
    {
        id: 8,
        category: 1,
        name: "PC Gamer",
        pictureUrl: `${process.env.REACT_APP_URL_API_MS}/images/pcgamer_1.webp`,
        description: 'Pc Torre Computadora Gamer I7 3.4ghz 12gb 500gb Rx550 4gb',
        stock: 4,
        price: 299,
        rating: 2,
        articleImages: [
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/pcgamer_1.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/pcgamer_i_1.webp`
            },
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/pcgamer_2.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/pcgamer_i_2.webp`
            },
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/pcgamer_3.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/pcgamer_i_3.webp`
            },
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/pcgamer_4.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/pcgamer_i_4.webp`
            }
        ]
    },
    {
        id: 9,
        category: 1,
        name: "PC Desktop",
        pictureUrl: `${process.env.REACT_APP_URL_API_MS}/images/pcelite_1.webp`,
        description: 'Pc Computadora Gamer Hp Amd Quad Core 16gb 240gb Ssd Radeon (Reacondicionado)',
        stock: 7,
        price: 399,
        rating: 2.5,
        articleImages: [
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/pcelite_1.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/pcelite_i_1.webp`
            },
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/pcelite_2.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/pcelite_i_2.webp`
            },
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/pcelite_3.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/pcelite_i_3.webp`
            },
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/pcelite_4.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/pcelite_i_4.webp`
            }
        ]
    },
    {
        id: 10,
        category: 1,
        name: "PC Warrior Gamer",
        pictureUrl: `${process.env.REACT_APP_URL_API_MS}/images/pcwarrior_1.webp`,
        description: 'Computadora Pc Gamer Nueva Core I5 16gb 240g Ssd + Video 4gb',
        stock: 7,
        price: 720,
        rating: 3,
        articleImages: [
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/pcwarrior_1.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/pcwarrior_i_1.webp`
            },
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/pcwarrior_2.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/pcwarrior_i_2.webp`
            },
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/pcwarrior_3.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/pcwarrior_i_3.webp`
            },
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/pcwarrior_4.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/pcwarrior_i_4.webp`
            }
        ]
    },
    {
        id: 11,
        category: 3,
        name: "Monitor Lg",
        pictureUrl: `${process.env.REACT_APP_URL_API_MS}/images/monitorlg_1.webp`,
        description: 'Monitor gamer LG 27MK400H led 27 " negro 100V/240V',
        stock: 3,
        price: 199,
        rating: 3.5,
        articleImages: [
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/monitorlg_1.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/monitorlg_i_1.webp`
            },
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/monitorlg_2.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/monitorlg_i_2.webp`
            },
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/monitorlg_3.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/monitorlg_i_3.webp`
            },
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/monitorlg_4.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/monitorlg_i_4.webp`
            }
        ]
    },
    {
        id: 12,
        category: 3,
        name: "Monitor Acer Nitro",
        pictureUrl: `${process.env.REACT_APP_URL_API_MS}/images/acernitro_1.webp`,
        description: 'Monitor gamer Acer Nitro VG0 VG240Y led 23.8 " negro 100V/240V',
        stock: 9,
        price: 370,
        rating: 4.5,
        articleImages: [
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/acernitro_1.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/acernitro_i_1.webp`
            },
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/acernitro_2.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/acernitro_i_2.webp`
            },
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/acernitro_3.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/acernitro_i_3.webp`
            },
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/acernitro_4.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/acernitro_i_4.webp`
            }
        ]
    },
    {
        id: 13,
        category: 3,
        name: "Monitor Samsung",
        pictureUrl: `${process.env.REACT_APP_URL_API_MS}/images/msamsung_1.webp`,
        description: 'Monitor gamer Samsung F24T35 led 24 " azul y gris oscuro 100V/240V',
        stock: 9,
        price: 221,
        rating: 2,
        articleImages: [
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/msamsung_1.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/msamsung_i_1.webp`
            },
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/msamsung_2.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/msamsung_i_2.webp`
            },
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/msamsung_3.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/msamsung_i_3.webp`
            },
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/msamsung_4.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/msamsung_i_4.webp`
            }
        ]
    },
    {
        id: 14,
        category: 3,
        name: "Monitor Aiwa",
        pictureUrl: `${process.env.REACT_APP_URL_API_MS}/images/aiwa_1.webp`,
        description: 'Monitor Aiwa AW24FHDM4 LCD 23.8" negro',
        stock: 9,
        price: 214,
        rating: 2,
        articleImages: [
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/aiwa_1.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/aiwa_i_1.webp`
            },
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/aiwa_2.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/aiwa_i_2.webp`
            },
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/aiwa_3.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/aiwa_i_3.webp`
            },
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/aiwa_4.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/aiwa_i_4.webp`
            }
        ]
    },
    {
        id: 15,
        category: 3,
        name: "Monitor ViewSonic",
        pictureUrl: `${process.env.REACT_APP_URL_API_MS}/images/viewsonic_1.webp`,
        description: 'Monitor Led Viewsonic Va3456-mhdj 34 Ips Ultrawide 2xhdmi',
        stock: 9,
        price: 639,
        rating: 4,
        articleImages: [
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/viewsonic_1.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/viewsonic_i_1.webp`
            },
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/viewsonic_2.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/viewsonic_i_2.webp`
            },
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/viewsonic_3.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/viewsonic_i_3.webp`
            },
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/viewsonic_4.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/viewsonic_i_4.webp`
            }
        ]
    },
    {
        id: 16,
        category: 4,
        name: "Celular Samsung",
        pictureUrl: `${process.env.REACT_APP_URL_API_MS}/images/galaxya32_1.webp`,
        description: 'Samsung Galaxy A32 128 GB awesome violet 4 GB RAM',
        stock: 9,
        price: 297,
        rating: 5,
        articleImages: [
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/galaxya32_1.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images//galaxya32_i_1.webp`
            },
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/galaxya32_2.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images//galaxya32_i_2.webp`
            },
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/galaxya32_3.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images//galaxya32_i_3.webp`
            },
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/galaxya32_4.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images//galaxya32_i_4.webp`
            }
        ]
    },
    {
        id: 17,
        category: 4,
        name: "Celular iPhone 11",
        pictureUrl: `${process.env.REACT_APP_URL_API_MS}/images/iphone_1.webp`,
        description: 'Celular Apple iPhone 11 (64 GB) - Negro',
        stock: 9,
        price: 759,
        rating: 4.5,
        articleImages: [
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/iphone_1.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/iphone_i_1.webp`
            },
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/iphone_2.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/iphone_i_2.webp`
            },
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/iphone_3.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/iphone_i_3.webp`
            },
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/iphone_4.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/iphone_i_4.webp`
            }
        ]
    },
    {
        id: 18,
        category: 4,
        name: "Celular Caterpillar",
        pictureUrl: `${process.env.REACT_APP_URL_API_MS}/images/cat_1.webp`,
        description: 'Celular caterpillar CAT S48c 64 GB negro 4 GB RAM',
        stock: 11,
        price: 480,
        rating: 1,
        articleImages: [
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/cat_1.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/cat_i_1.webp`
            },
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/cat_2.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/cat_i_2.webp`
            },
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/cat_3.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/cat_i_3.webp`
            },
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/cat_4.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/cat_i_4.webp`
            }
        ]
    },
    {
        id: 19,
        category: 4,
        name: "Celular Motorola",
        pictureUrl: `${process.env.REACT_APP_URL_API_MS}/images/moto_1.webp`,
        description: 'Celular Motorola Moto E7i Power Dual SIM 32 GB azul 2 GB RAM',
        stock: 20,
        price: 156,
        rating: 3,
        articleImages: [
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/moto_1.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/moto_i_1.webp`
            },
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/moto_2.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/moto_i_2.webp`
            },
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/moto_3.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/moto_i_3.webp`
            },
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/moto_4.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/moto_i_4.webp`
            }
        ]
    },
    {
        id: 20,
        category: 4,
        name: "Celular Xiaomi",
        pictureUrl: `${process.env.REACT_APP_URL_API_MS}/images/xiaomi_1.webp`,
        description: 'Celular Xiaomi Redmi Note 10S Dual SIM 128 GB gris ónix 6 GB RAM',
        stock: 17,
        price: 292,
        rating: 2,
        articleImages: [
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/xiaomi_1.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/xiaomi_i_1.webp`
            },
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/xiaomi_2.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/xiaomi_i_2.webp`
            },
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/xiaomi_3.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/xiaomi_i_3.webp`
            },
            {
                original: `${process.env.REACT_APP_URL_API_MS}/images/xiaomi_4.webp`,
                thumbnail: `${process.env.REACT_APP_URL_API_MS}/images/xiaomi_i_4.webp`
            }
        ]
    }
];