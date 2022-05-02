import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Login from "./Pages/Authentication/Login/Login";
import SignUp from "./Pages/Authentication/SignUp/SignUp";
import Blogs from "./Pages/Blogs/Blogs";
import Home from "./Pages/Home/Home/Home";
import AddItem from "./Pages/Inventory/AddItem/AddItem";
import Inventory from "./Pages/Inventory/Inventory/Inventory";
import ItemDetail from "./Pages/Inventory/ItemDetail/ItemDetail";
import ManageItem from "./Pages/Inventory/ManageItem/ManageItem";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/inventory/:itemId" element={<ItemDetail />} />
        <Route path="/addItem" element={<AddItem />} />
        <Route path="/manageItem" element={<ManageItem />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer></Footer>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
