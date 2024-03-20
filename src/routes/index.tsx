import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "../pages/auth";
import OrderManagement from "../pages/order-management";
import CustomerManagement from "../pages/customer-management";
import ProtectedRoute from "./protected-route";

const RoutesPages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Auth />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<CustomerManagement />} />
          <Route element={<CustomerManagement />} path="/customer-management" />
          <Route element={<OrderManagement />} path="/order-management" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesPages;
