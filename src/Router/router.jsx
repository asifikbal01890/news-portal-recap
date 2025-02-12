import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import HomeMid from "../Components/Home/HomeMid/HomeMid";
import NewsDetails from "../Components/NewsDetails/NewsDetails";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children:[
            {
                path: '/:id',
                element: <HomeMid></HomeMid>,
                loader: async({params}) =>  fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
    },
    {
        path: "/newsDetails/:id",
        element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>
    },
    {
        path: "/about",
        element: <h1>ahdshdjhs</h1>
    },
    {
        path: "/career",
        element: <h1>product2</h1>
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/register",
        element: <Register></Register>
    }
])