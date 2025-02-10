import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>
    },
    {
        path: "/product",
        element: <h1>ahdshdjhs</h1>
    },
    {
        path: "/product2",
        element: <h1>product2</h1>
    }
])