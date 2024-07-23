import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createContext } from "react";

export const Context = createContext({});

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
