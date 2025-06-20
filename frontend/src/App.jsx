import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginpage";
import RegisterPage from "./pages/registerpage";
import Dashboard from "./pages/dashboard";
import ShopClothes from "./pages/shopclothes";
import ShopAsesoris from "./pages/shopasesoris";
import ShopSkincare from "./pages/shopskincare";
import ProfilePage from "./pages/profilepage";
import ChartPage from "./pages/chartpage";
import DetailProduct from "./pages/detailproduct";
import UserProfile from "./pages/userprofile";
import ResetPage from "./pages/resetpage";
import ForgetPage from "./pages/forgetpage";
import AdminPage from "./pages/admin/adminpage";
import Categories from "./pages/admin/Categories";
import Products from "./pages/admin/Product";
import Orders from "./pages/admin/Order";
import Users from "./pages/admin/Users";  
import Payments from "./pages/admin/Payments";
import Reviews from "./pages/admin/Review";
import Wishlists from "./pages/admin/Wishlist";
import Settings from "./pages/admin/Setting";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/loginpage" element={<LoginPage />} />
      <Route path="/registerpage" element={<RegisterPage />} />
      <Route path="/shopclothes" element={<ShopClothes />} />
      <Route path="/shopasesoris" element={<ShopAsesoris />} />
      <Route path="/shopskincare" element={<ShopSkincare />} />
      <Route path="/profilepage" element={<ProfilePage />} />
      <Route path="/chartpage" element={<ChartPage />} />
      <Route path="/detailproduct" element={<DetailProduct />} />
      <Route path="/userprofile" element={<UserProfile />} />
      <Route path="/resetpage" element={<ResetPage />} />
      <Route path="/forgetpage" element={<ForgetPage />} />
      <Route path="/adminpage" element={<AdminPage />} />
      <Route path="/admin/categories" element={<Categories />} />
      <Route path="/admin/products" element={<Products />} /> 
      <Route path="/admin/orders" element={<Orders />} />
      <Route path="/admin/users" element={<Users />} />
      <Route path="/admin/payments" element={<Payments />} />
      <Route path="/admin/reviews" element={<Reviews />} />
      <Route path="/admin/wishlists" element={<Wishlists />} />
      <Route path="/admin/settings" element={<Settings />} />
    </Routes>
  );
};

export default App;
