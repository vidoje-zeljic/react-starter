import axios from "axios";
import {useEffect, useState} from "react";
import {Grid} from "@mui/material";
import ProductCard from "../components/ProductCard";
import Container from "@mui/material/Container";

const baseURL = "https://dummyjson.com/products";

export default function Products() {
    const [data, setData] = useState<any>([]);

    useEffect(() => {
        axios.get(baseURL)
            .then(response => {
                setData(response.data.products);
                console.log(response.data.products)
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <Container maxWidth="xl">
                <Grid container spacing={2}>
                    {data.map(item => (
                        <Grid item key={item.id} lg={4} sm={6} xs={12}
                              sx={{
                                  width: {xs: '100%'}
                              }}>
                            <ProductCard
                                key={item.id}
                                image={item.images[0]}
                                name={item.title}
                                description={item.description}
                                price={item.price}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
}