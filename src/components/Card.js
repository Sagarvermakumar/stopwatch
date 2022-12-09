import * as React from "react";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/DeleteOutlineOutlined";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import lImg from './../images/img.png';
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Cards = ({ img, date, deleteItem }) => {
  // height="100" width="150"
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt="image" image={img} />
      <CardContent>
        <Typography gutterBottom variant="h5" height="200" component="div">
          Header
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Inserted At : {date}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <DeleteIcon onClick={deleteItem} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Cards;
