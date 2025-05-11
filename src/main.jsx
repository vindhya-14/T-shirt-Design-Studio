import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from "../src/components/ThemeContext.jsx";
import App from './App.jsx'

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

