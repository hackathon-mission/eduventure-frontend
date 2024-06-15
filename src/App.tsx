import "./App.css";
import Dashboard from "./pages/Dashboard";
import Layout from "./layouts/main";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Leaderboard from "./pages/Leaderboard";
import BattleArena from "./pages/BattleArena";
import Market from "./pages/Market";
import ViewAdventures from "./pages/ViewAdventures";
import { Adventure } from "./pages/Adventure";
import { AuthProvider } from "./features/auth/authContext";
import Login from "./components/auth/Login";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import ListingDetails from "./pages/Listing";
import Logout from "./pages/Logout";

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <AuthProvider>
                                <Dashboard />
                            </AuthProvider>
                        }
                    />
                    <Route path="/leaderboard" element={<Leaderboard />} />
                    <Route path="/arena" element={<BattleArena />} />
                    <Route
                        path="/adventures"
                        element={<ViewAdventures></ViewAdventures>}
                    />
                    <Route path="/market" element={<Market />} />
                    <Route path="/adventure/:id" element={<Adventure />} />
                    <Route path="/profile/:id" element={<Profile />} />
                    <Route path="/listing/:id" element={<ListingDetails/>} />
                    <Route path="/logout" element={<Logout/>}/>
                    <Route
                        path="/login"
                        element={
                            <AuthProvider>
                                <Login />
                            </AuthProvider>
                        }
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
