import { store } from "./redux/store";
import { Provider } from "react-redux";
import Index from "./pages/Index";

function App() {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
}

export default App;
