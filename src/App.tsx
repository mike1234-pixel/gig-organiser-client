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
import { SuccessAnimationContextProvider } from "./context/SuccessAnimationContext";
import { NotFound } from "./components/pages/NotFound";
import { Dashboard } from "./components/pages/Dashboard";
import { Footer } from "./components/features/Footer";
import { Unicorn } from "./components/common/Unicorn";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <UpdateJobContextProvider>
          <UpdateActionContextProvider>
            <TogglePanelContextProvider>
              <SuccessAnimationContextProvider>
                <BrowserRouter>
                  <Nav />
                  <Unicorn />
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/jobs" element={<Jobs />} />
                    <Route path="/actions" element={<Actions />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/user/:id" element={<Account />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </BrowserRouter>
                <Footer />
              </SuccessAnimationContextProvider>
            </TogglePanelContextProvider>
          </UpdateActionContextProvider>
        </UpdateJobContextProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
