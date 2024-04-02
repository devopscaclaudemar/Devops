import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Container from "./components/Container";
import FavoritesProvider from "context/Favorites";
import Places from "pages/Places";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Navbar />
            <Container>
                <FavoritesProvider>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/favorites" element={<Favorites />}></Route>
                        <Route path="/:id" element={<Places />}></Route>
                    </Routes>
                </FavoritesProvider>
            </Container>
            <Footer />
        </BrowserRouter>
    )
}

export default AppRoutes;