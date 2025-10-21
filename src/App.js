import React from "react";
import Home from "./pages/Home.jsx";
import { DarkModeProvider } from "./contexts/DarkModeContext";

function App() {
  return (
    <DarkModeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Home />
      </div>
    </DarkModeProvider>
  );
}

export default App;
