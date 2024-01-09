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
import LogOutUser from "./Protected Route/User Login Check/logOutUser";
import LogInUser from "./Protected Route/User Login Check/logInUser";
import AddCategory from "./Components/AddCategory";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<LogInUser />}>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/registration/" element={<Registration />}></Route>
          <Route path="/otp" element={<Otp />}></Route>
          <Route path="/resetpassword" element={<ResetPassword />}></Route>
          <Route
            path="/resetpasswordemail"
            element={<ResetPasswordEmail />}
          ></Route>
        </Route>
        <Route element={<LogOutUser />}>
          <Route path="/" element={<Home />}>
            <Route path="/addproduct" element={<AddProduct />}></Route>
            <Route path="/addcategory" element={<AddCategory />}></Route>
            <Route path="*" element={<Error />}></Route>
            <Route path="/productlist" element={<ProductList />}></Route>
            <Route path="/varientlist" element={<VarientList />}></Route>
          </Route>
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
