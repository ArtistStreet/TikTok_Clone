import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {publicRoutes} from "../src/routes"
import DefaultLayout from "./components/Layout/DefaultLayout";
import { Fragment } from "react";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, key) => {
            const Layout = route.layout === undefined ? DefaultLayout : (route.layout === null ? Fragment : route.layout);
            const Page = route.component;
            return <Route key={key} path={route.path} element={
              <Layout><Page/></Layout>  
              }>
            </Route>
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
