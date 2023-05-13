import styles from "./App.module.scss";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import Header from "../components/layout/Header/Header";
import Footer from "../components/layout/Footer/Footer";

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Header />
        <main>
          <AppRoutes />
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
