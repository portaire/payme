import { BrowserRouter } from "react-router-dom";

import CustomRoutes from "routes/CustomRoutes";

function Layout() {
    return (
        <BrowserRouter>  

            <div className="flex flex-col h-full overflow-hidden">

                <main className="w-full h-full">
                    <CustomRoutes />
                </main>

            </div>

        </BrowserRouter>
    )
}

export default Layout;