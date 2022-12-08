import { QueryClient, QueryClientProvider } from "react-query";
import styles from "./App.module.css";
import { Dashboard } from "./components/pages/Dashboard";
import { SignUp } from "./components/pages/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Nav } from "./components/features/Nav";
import { Login } from "./components/pages/Login";
import { LoginStateProvider } from "./context/LoginStateProvider";
import { Account } from "./components/pages/Account";
import { TogglePanelContextProvider } from "./context/EditPanel";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <LoginStateProvider>
        <TogglePanelContextProvider>
          <div className={styles.app}>
            <BrowserRouter>
              <Nav />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/user/:id" element={<Account />} />
              </Routes>
            </BrowserRouter>
          </div>
        </TogglePanelContextProvider>
      </LoginStateProvider>
    </QueryClientProvider>
  );
};

export default App;
