import React from "react";
import "./App.css";
import AppRouter from "./app/AppRouter";
import AppLayout from "./app/ui/components/appLayout";

function App() {
  return (
    <div className="App">
      <AppLayout>
        <AppRouter />
      </AppLayout>
    </div>
  );
}

export default App;
