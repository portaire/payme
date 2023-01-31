import { BrowserRouter } from "react-router-dom";

import CustomRoutes from "routes/CustomRoutes";
import CreateModal from "views/organisms/Modal/CreateModal";

import Footer from "./_components/Footer/Footer";
import Header from "./_components/Header/Header";

function Layout() {
    return (
        <BrowserRouter>  

            <CreateModal />

            <div className=" overflow-x-hidden overflow-y-auto">
                <Header />
                <main className="w-full h-full">
                    <CustomRoutes />
                </main>
                <Footer />
            </div>

        </BrowserRouter>
    )
}

export default Layout;