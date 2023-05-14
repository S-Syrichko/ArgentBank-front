import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import Header from "../components/layout/Header/Header";
import Footer from "../components/layout/Footer/Footer";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
