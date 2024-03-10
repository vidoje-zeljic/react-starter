import {useState} from "react";
import Button from "@mui/material/Button";

export default function Home() {
    const [count, setCount] = useState(0)

    return (
        <>
            <h1>VIT</h1>
            <Button
                variant="contained"
                onClick={() => setCount((count) => count + 1)}>
                {count}
            </Button>
        </>
    );
}