import React from "react";
import Container from "@mui/material/Container";
import {ThemeProvider} from "@emotion/react";
import NavBar from "./NavBar";
import {customTheme} from "../utils/theme";

const pages = [{
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

export default function Layout({ children }) {
    return (
      <>
          <ThemeProvider theme={customTheme}>
            <NavBar pages={pages}/>
              <Container style={{ paddingBottom: "30px" }}>
                  {children}
              </Container>
          </ThemeProvider>
      </>
    );
}