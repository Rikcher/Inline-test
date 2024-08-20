import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Product from "../pages/Product";

const router = createBrowserRouter([
    {
    path: "/",
    element: <Layout/>,
    children: [
        {
            path: "*",
            element: <NotFound />, 
        },
        {
            path: "",
            element: <Home />,
        },
        {
            path: ":productId",
            element: <Product />,
        }
    ]
    },
]);

export default router;