import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

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
    ]
    },
]);

export default router;