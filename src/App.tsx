import { QueryClient, QueryClientProvider } from "react-query";
import styles from "./App.module.css";
import { Container } from "./components/common/Container";
import { Dashboard } from "./components/pages/Dashboard";
import { Login } from "./components/pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Nav } from "./components/features/Nav";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={styles.app}>
        <Container>
          <BrowserRouter>
            <Nav />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </BrowserRouter>
        </Container>
      </div>
    </QueryClientProvider>
  );
};

export default App;
