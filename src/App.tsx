import { QueryClient, QueryClientProvider } from "react-query";
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
import { UpdateActionContextProvider } from "./context/UpdateActionContext";
import { NotFound } from "./components/pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <UpdateJobContextProvider>
          <UpdateActionContextProvider>
            <TogglePanelContextProvider>
              <BrowserRouter>
                <Nav />
                <Routes>
                  <Route path="/" element={<Jobs />} />
                  <Route path="/actions" element={<Actions />} />
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/user/:id" element={<Account />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            </TogglePanelContextProvider>
          </UpdateActionContextProvider>
        </UpdateJobContextProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
