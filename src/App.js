import React from "react";
import "./App.scss";
import TodoList from './components/todoList';
import ToggleTheme from "./components/toggleTheme";
import ThemeContextProvider from "./contexts/themeContext";
import TodoContextProvider from "./contexts/todoContext";

function App() {
 
  return (
    <div className="App">
      <ThemeContextProvider>
        <ToggleTheme />
        <TodoContextProvider>
           <TodoList />
        </TodoContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
