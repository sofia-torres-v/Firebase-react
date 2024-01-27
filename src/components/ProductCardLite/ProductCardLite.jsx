import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { IconButton } from "@mui/material";
import moment from "moment";



const ProductCardLite = ({ productName, date, image, category,fullName, price, quantity }) => {
    return (
        <Card sx={{ width: '90%' }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {quantity}
                    </Avatar>
                }
                title={productName}
                subheader={date ? moment(date).format("LL") : ''}
            />
            <CardMedia component="img" height="194" image={image} alt={productName} />
            <CardContent>
                <Typography variant="body1" color="text.secondary" sx={{fontWeight: 'bold'}}>
                   Precio Producto : {price}$
                </Typography>
                <Typography variant="body2" color="text.secondary">
                   Categoría: {category}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                   Stock: {quantity} units
                </Typography>
                <Typography variant="body2" color="text.secondary">
                   Vendedor: {fullName} 
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" sx={{ ml: "auto" }}>
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            
            </CardActions>
        </Card>
    );
};


ProductCardLite.propTypes = {
    date: PropTypes.string,
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    quantity: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
};

export default ProductCardLite;
