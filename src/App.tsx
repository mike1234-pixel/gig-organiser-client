import { QueryClient, QueryClientProvider } from "react-query";
import styles from "./App.module.css";
import Jobs from "./components/features/Jobs";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={styles.app}>
        <Jobs />
      </div>
    </QueryClientProvider>
  );
}

export default App;
