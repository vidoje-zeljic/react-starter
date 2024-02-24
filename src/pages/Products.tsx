import axios from "axios";
import {useEffect, useState} from "react";
import ComplexGrid from "../components/ComplexGrid";

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

            {data.map(item => (
                <ComplexGrid
                    key={item.id}
                    image={item.images[0]}
                    name={item.title}
                    description={item.description}
                    price={item.price}
                />
            ))}
        </>
    );
}