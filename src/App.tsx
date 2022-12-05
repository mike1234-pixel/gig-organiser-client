import { QueryClient, QueryClientProvider } from "react-query";
import styles from "./App.module.css";
import { Container } from "./components/common/Container";
import { Jobs } from "./components/features/Jobs";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={styles.app}>
        <Container>
          <Jobs />
        </Container>
      </div>
    </QueryClientProvider>
  );
};

export default App;
