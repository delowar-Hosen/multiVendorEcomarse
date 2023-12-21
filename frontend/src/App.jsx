import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Components/Home";
import AddProduct from "./Components/AddProduct";
import Error from "./Components/Error";
import ProductList from "./Components/ProductList";
import VarientList from "./Components/VarientList";
import Registration from "./Components/Registration";
import Login from "./Components/Login";
import Otp from "./Components/Otp";
import ResetPassword from "./Components/ResetPassword";
import ResetPasswordEmail from "./ResetPasswordEmail";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/registration/" element={<Registration />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/otp" element={<Otp />}></Route>
        <Route path="/resetpassword" element={<ResetPassword />}></Route>
        <Route path="/resetpasswordemail" element={<ResetPasswordEmail />}></Route>
        <Route path="/" element={<Home />}>
          <Route path="/addproduct" element={<AddProduct />}></Route>
          <Route path="*" element={<Error />}></Route>
          <Route path="/productlist" element={<ProductList />}></Route>
          <Route path="/varientlist" element={<VarientList />}></Route>
        </Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
