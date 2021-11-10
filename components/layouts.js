import Footer from "./footer";
import Header from "./header";
import Navbar from "./navbar";


const Layout = ({ children }) => {
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;