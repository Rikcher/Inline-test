import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Store from "../pages/Store";
import NotFound from "../pages/NotFound";
import About from "../pages/About";
import Product from "../pages/Product";
import Description from "../components/Description";
import Reviews from "../components/Reviews";
import Seller from "../components/Seller";

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
            path: "store",
            element: <Store />,
        },
        {
            path: "store/:productId",
            element: <Product />,
            children: [
                {
                    path: "description",
                    element: <Description />
                },
                {
                    path: "reviews",
                    element: <Reviews />
                },
                {
                    path: "Seller",
                    element: <Seller />
                },
            ]
        },
        {
            path: "about",
            element: <About />,
        }
    ]
    },
]);

export default router;