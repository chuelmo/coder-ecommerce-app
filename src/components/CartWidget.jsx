import * as React from 'react';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function CartWidget(props) {
  return (
    <Badge badgeContent={props.count} color='warning'>
      <ShoppingCartIcon color="white" />
    </Badge>
  );
}
