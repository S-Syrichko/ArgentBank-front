import { Route, Routes } from "react-router-dom";
import { HomePage } from "../features/home";
import { LoginPage } from "../features/login";
import { ProfilePage } from "../features/profile";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
};

export default AppRoutes;
