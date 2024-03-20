import RoutesPages from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.scss";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RoutesPages />
      </QueryClientProvider>
    </>
  );
}

export default App;
