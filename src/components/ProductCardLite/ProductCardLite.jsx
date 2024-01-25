
import PropTypes from "prop-types";
// import { styled } from "@mui/material/styles";
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



const ProductCardLite = ({ title, date, image, text, quantity }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {quantity}
                    </Avatar>
                }
                title={title}
                subheader={moment(date).format("LL")}
            />
            <CardMedia component="img" height="194" image={image} alt={title} />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {text}
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

// Agregando las PropTypes
ProductCardLite.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    quantity: PropTypes.string.isRequired,
};

export default ProductCardLite;
