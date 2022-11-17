import Router from "./app/components/navigation/router";
import { store } from "./app/store/store";
import { Provider } from "react-redux";
export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
