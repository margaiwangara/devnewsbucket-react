import React from "react";
import { AppProvider } from "../context/appContext";

// functions
import { useArticles } from "../functions/articles";

function AppContainer({ children }) {
  const articles = useArticles();
  return (
    <AppProvider value={articles}>
      <div className="app">{children}</div>
    </AppProvider>
  );
}

export default AppContainer;
