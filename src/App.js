import { store } from "./store";

import "./App.css";
import RootLayout from "./components/RootLayout";
import { Provider } from "react-redux";
import TodoList from "./components/TodoList";

function App() {
  return (
    <Provider store={store}>
      <RootLayout>
        <h1>Items</h1>
        <TodoList />
      </RootLayout>
    </Provider>
  );
}

export default App;
