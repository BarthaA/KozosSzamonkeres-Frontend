import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AddPage from "./pages/AddPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => (
    <div className="app">
        <Navbar />
        <main>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/add" element={<AddPage />} />
            </Routes>
        </main>
        <Footer />
    </div>
);

export default App;
