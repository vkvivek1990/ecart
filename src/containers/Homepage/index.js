import { Fragment } from "react";
import NavBar from "../../components/NavBar";
import Login from "../Login";
import ProductList from "../../components/ProductList";
import Sidebar from "../../components/SideBar";

const Homepage = () => {
  return (
    <Fragment>
      <NavBar />
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-10">
          <ProductList />
        </div>
      </div>
      <Login />
    </Fragment>
  );
};
export default Homepage;
