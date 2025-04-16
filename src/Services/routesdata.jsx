import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Header from "../Component/Common/Header";
import Footer from "../Component/Common/Footer";
import { routes } from "../Services/routes";

const Layout = ({ children }) => {
  const location = useLocation();
  const noHeaderFooterPaths = [
    "/user-profile",
    "/loan-offers",
    "/credit-report",
    "/notifications",
    "/user-support",
  ];
  const showHeaderFooter = !noHeaderFooterPaths.includes(
    location.pathname.toLowerCase()
  );
  return (
    <>
      {showHeaderFooter && <Header />}
      {children}
      {showHeaderFooter && <Footer />}
    </>
  );
};

function RoutesData() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default RoutesData;
