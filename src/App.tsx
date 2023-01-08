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
import { FlyingHorseAnimationContextProvider } from "./context/Animation/FlyingHorseAnimationContext";
import { ConfettiAnimationContextProvider } from "./context/Animation/ConfettiAnimationContext";
import { NotFound } from "./components/pages/NotFound";
import { Dashboard } from "./components/pages/Dashboard";
import { Footer } from "./components/features/Footer";
import { FlyingHorse } from "./components/common/FlyingHorse";
import { ConfettiEffect } from "./components/common/Confetti";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <UpdateJobContextProvider>
          <UpdateActionContextProvider>
            <TogglePanelContextProvider>
              <FlyingHorseAnimationContextProvider>
                <ConfettiAnimationContextProvider>
                  <BrowserRouter>
                    <Nav />
                    <FlyingHorse />
                    <ConfettiEffect />
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
                </ConfettiAnimationContextProvider>
              </FlyingHorseAnimationContextProvider>
            </TogglePanelContextProvider>
          </UpdateActionContextProvider>
        </UpdateJobContextProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
