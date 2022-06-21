import React, {useState} from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import ItemCount from './ItemCount';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function ItemListContainer({greeting, image, alt, stock, name}) {
  const [message, setMessage] = useState(null);
  
  const onAdd = (cantidad) => {
    if (cantidad > 0) {
      setMessage(`Se ${cantidad === 1 ? 'agregó': 'agregaron'} ${cantidad} ${name} al carrito`);
    }
  };

  return (
    <>
      {message && (
        <Snackbar anchorOrigin={{vertical: 'top', horizontal: 'right'}} open={true} autoHideDuration={4000} onClose={() => setMessage(null)}>
          <Alert onClose={() => setMessage(null)} severity="success" sx={{ width: '100%' }}>
            {message}
          </Alert>
        </Snackbar>
      )}
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={alt}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {greeting}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
        </CardActions>
      </Card>
    </>
  );
}
