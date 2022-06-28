import React from "react";
import Container from "@mui/material/Container";
import {ThemeProvider} from "@emotion/react";
import NavBar from "./NavBar";
import {customTheme} from "../utils/theme";
import { categories } from "../utils/store";

export default function Layout({ children }) {
    return (
      <>
          <ThemeProvider theme={customTheme}>
            <NavBar pages={categories}/>
              <Container style={{ paddingBottom: "30px" }}>
                  {children}
              </Container>
          </ThemeProvider>
      </>
    );
}