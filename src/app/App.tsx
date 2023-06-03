import { message } from "antd";
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../components/layout/Footer/Footer";
import Header from "../components/layout/Header/Header";
import { fetchUserProfile } from "../store/features/thunks";
import { logout } from "../store/features/userSlice";
import { useAppDispatch, useAppSelector } from "../store/store";
import AppRoutes from "./routes";

function App() {
  const token = useAppSelector((state) => state.user.token);
  const profileStatus = useAppSelector((state) => state.user.profileStatus);
  const dispatch = useAppDispatch();
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    if (token && profileStatus === "idle") {
      dispatch(fetchUserProfile());
    }
  }, [token]);

  useEffect(() => {
    if (profileStatus === "rejected") {
      dispatch(logout());
      error();
    }
  }, [profileStatus]);

  const error = () => {
    messageApi.open({
      type: "error",
      content:
        "An error occured while fetching profile data. You were disconnected. 🙁",
    });
  };
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        {contextHolder}
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
