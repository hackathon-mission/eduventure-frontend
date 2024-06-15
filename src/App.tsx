import "./App.css";
import Dashboard from "./pages/Dashboard";
import Layout from "./layouts/main";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/leaderboard" element={<Dashboard />} />
                    <Route path="/arena" element={<></>} />
                    <Route path="/market" element={<></>} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
