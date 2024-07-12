import { Fragment, useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Header from "./layout/header";
import Main from "./layout/main";
import Home from "./pages/Home";
import Sortpage from "./pages/Sortpage";
import Footer from "./layout/Footer";

const App = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/") {
      navigate("/");
    }
  }, []);

  return (
    <Fragment>
      <Header />
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default App;
