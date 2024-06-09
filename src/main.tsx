import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { QueryClient, QueryClientProvider } from "react-query";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <QueryClientProvider client={new QueryClient()}>
      <App />
    </QueryClientProvider>
  </>
);
