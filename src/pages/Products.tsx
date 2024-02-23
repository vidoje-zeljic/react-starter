import axios from "axios";
import {useEffect, useState} from "react";

// const baseURL = "https://dummyjson.com/products";

export default function Products() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setData(response.data);
                console.log("foo")
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <>
            Products
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </>
    );
}