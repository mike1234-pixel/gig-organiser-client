import { QueryClient, QueryClientProvider } from "react-query";
import styles from "./App.module.css";
import { Jobs } from "./components/pages/Jobs";
import { SignUp } from "./components/pages/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Nav } from "./components/features/Nav";
import { Login } from "./components/pages/Login";
import { AuthProvider } from "./context/AuthContext";
import { Account } from "./components/pages/Account";
import { TogglePanelContextProvider } from "./context/TogglePanelContext";
import { UpdateJobContextProvider } from "./context/UpdateJobContext";
import { Actions } from "./components/pages/Actions";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <UpdateJobContextProvider>
          <TogglePanelContextProvider>
            <div className={styles.app}>
              <BrowserRouter>
                <Nav />
                <Routes>
                  <Route path="/" element={<Jobs />} />
                  <Route path="/actions" element={<Actions />} />
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/user/:id" element={<Account />} />
                </Routes>
              </BrowserRouter>
            </div>
          </TogglePanelContextProvider>
        </UpdateJobContextProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
