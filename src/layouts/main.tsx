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
            <Container style={{paddingTop:"2rem", display: "flex" }} sx={{justifyContent:"center"}}>
                <div
                    id="main-wrapper"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        height: "100vh",
                        width:"70vw",
                        gap:"2rem"
                    }}
                >
                    <Navbar></Navbar>
                    <main style={{width:"70%"}}>{children}</main>
                </div>
            </Container>
        </AuthProvider>
    );
};

export default Layout;
