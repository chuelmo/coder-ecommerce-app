import React, { useContext } from "react";
import Container from "@mui/material/Container";
import {ThemeProvider} from "@emotion/react";
import NavBar from "./NavBar";
import { customTheme } from "../utils/theme";
import CategoryContext from "../context/CategoryContext";

export default function Layout({ children }) {
  const { categories } = useContext(CategoryContext);

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