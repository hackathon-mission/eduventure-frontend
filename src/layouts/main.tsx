import Navbar from "../components/header/Navbar";
import { ReactNode } from "react";
import { Container } from "@mui/material";
import { display } from "@mui/system";
import { AuthProvider } from "../features/auth/authContext";
interface LayoutProps {
    children: ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <AuthProvider>
            <Container>
                <div
                    id="main-wrapper"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        height: "100vh",
                        maxWidth:"80vw"
                    }}
                >
                    <Navbar></Navbar>
                    <main style={{width:"100%"}}>{children}</main>
                </div>
            </Container>
        </AuthProvider>
    );
};

export default Layout;
