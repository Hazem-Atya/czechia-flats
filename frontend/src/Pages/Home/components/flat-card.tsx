import { Card, CardMedia, CardContent, Typography } from "@mui/material";

interface FlatCardPropsInterface {
  title: string;
  locality: string;
  price: string;
  image_url: string;
}
function FlatCard(props: FlatCardPropsInterface) {
  const { title, locality, price, image_url } = props;
  return (
    <Card sx={{ maxWidth: 345, mb: 3 }}>
      <CardMedia sx={{ height: 140 }} image={image_url} title={title} />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {locality}
        </Typography>
        <Typography variant="subtitle2">{price}</Typography>
      </CardContent>
    </Card>
  );
}

export default FlatCard;
