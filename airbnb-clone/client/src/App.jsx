import { Route, Routes } from "react-router-dom";
import "./App.css";
import { IndexPage } from "./pages/IndexPage";
import { LoginPage } from "./pages/LoginPage";
import { Layout } from "./Layout";
import { RegisterPage } from "./pages/RegisterPage";
import axios from "axios";
import { UserContextProvider } from "./context/UserContext";
import AccountNav from "./pages/AccountNav";

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;

const App = () => {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/account" element={<AccountNav />} />
          <Route path="/account/places" element={<AccountNav />} />
          <Route path="/account/bookings" element={<AccountNav />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
};

export default App;
