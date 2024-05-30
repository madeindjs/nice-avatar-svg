/* @refresh reload */
import { createRoot } from "react-dom/client";

import App from "./App";

const container = document.getElementById("root");

if (import.meta.env.DEV && !(container instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

const root = createRoot(container);

root.render(<App />);
