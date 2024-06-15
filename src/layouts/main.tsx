import Navbar from "../components/header/Navbar";
import { ReactNode } from "react";
import { Container } from "@mui/material";
import { display } from "@mui/system";
interface LayoutProps {
  children: ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container>
            <div id="main-wrapper" style={{display: "flex", flexDirection: "column", alignItems:"center", height:"100vh"}}>

      <Navbar></Navbar>
      <main>{children}</main>
            </div>
    </Container>
  );
};

export default Layout;
