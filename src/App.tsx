import Header from "./components/Header";
import {Grid} from "@mui/material";
import {Outlet, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Error from "./pages/Error";

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="products" element={<Products/>}/>
                    <Route path="*" element={<Error/>}/>
                </Route>
            </Routes>
        </>
    )
}

function Layout() {
    return (
        <>
            <Header/>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{minHeight: '10vh'}}
            >
                <Outlet/>
            </Grid>
        </>
    );
}
