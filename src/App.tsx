import {useState} from 'react'
import Button from "@mui/material/Button";
import Header from "./components/Header";
import {Grid} from "@mui/material";

export default function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Header/>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{ minHeight: '10vh' }}
            >
                <Button
                    variant="contained"
                    onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </Button>
            </Grid>
        </>
    )
}
