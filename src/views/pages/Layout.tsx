import { BrowserRouter } from "react-router-dom";

import CustomRoutes from "routes/CustomRoutes";

import Footer from "./_components/Footer/Footer";
import Header from "./_components/Header/Header";

function Layout() {
    return (
        <BrowserRouter>  

            <Header />
            <div className="flex flex-col h-full overflow-hidden">

                <main className="w-full h-full">
                    <CustomRoutes />
                </main>

            </div>
            <Footer />

        </BrowserRouter>
    )
}

export default Layout;