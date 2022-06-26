import {createTheme} from "@mui/material";

export let customTheme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#141b3f',
        },
        secondary: {
            main: '#f50057',
        },
    },
});

customTheme = createTheme(customTheme, {
    typography: {
        h4: {
            fontSize: '0.8rem',
            '@media (min-width:400px)': {
                fontSize: '1rem',
            },
            '@media (min-width:600px)': {
                fontSize: '1.5rem',
            },
            [customTheme.breakpoints.up('md')]: {
                fontSize: '2rem',
            },
        }
    },
});
