import { useRoutes } from "react-router-dom";

import Home from "views/pages/Home";
import NotFound from "views/pages/NotFound";

import routesAgent  from "./routes/agent"


function CustomRoutes() {
    let routes = useRoutes([
        {
            path: "*",
            element: <NotFound />
        },
        {
            path: "/",
            element: <Home />
        },
        ...routesAgent
    ]);

    return routes;
}

export default CustomRoutes;