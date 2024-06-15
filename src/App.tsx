import "./App.css";
import Dashboard from "./pages/Dashboard";
import Layout from "./layouts/main";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Leaderboard from "./pages/Leaderboard";
import BattleArena from "./pages/BattleArena";
import Market from "./pages/Market";

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/leaderboard" element={<Leaderboard />} />
                    <Route path="/arena" element={<BattleArena />} />
                    <Route path="/market" element={<Market />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
