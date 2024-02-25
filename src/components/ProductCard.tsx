import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';

export default function ProductCard(
    {image, name, description, price}:
        { image: string, name: string, description: string, price: string }) {
    return (
        <Card sx={{
            boxShadow: 5,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            margin: 4,
        }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={image}
                    sx={{
                        height: {lg: 300, sm: 250},
                        maxHeight: {xs: 200},
                        width: {xs: '100%'}
                    }}
                />
            </CardActionArea>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    {price}$
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
}
