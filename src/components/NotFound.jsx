import React from 'react';
import { Link } from 'react-router-dom';
import Layout from "./Layout";

const NotFound = () => (
  <Layout>
    <h1>404 - Parece que buscás algo que no tenemos...</h1>
    <Link to="/">¡Volvé a comprar, estas ofertas se van como pan caliente!</Link>
  </Layout>
);

export default NotFound;