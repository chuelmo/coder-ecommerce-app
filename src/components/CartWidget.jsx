import * as React from 'react';
import {useNavigate} from "react-router-dom";
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function CartWidget(props) {
  const navigate = useNavigate();
  return (
    <Badge badgeContent={props.count} color='warning'>
      <ShoppingCartIcon onClick={() => navigate('/cart')} color="white" />
    </Badge>
  );
}
