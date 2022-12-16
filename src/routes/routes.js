import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ApplicationList from "../pages/ApplicationList";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/applicationlist',
                element: <ApplicationList></ApplicationList>
            }
        ]
    }

])

export default router;