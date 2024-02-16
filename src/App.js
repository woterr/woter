import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Info from "./Pages/Info";
import { Routes, Route } from "react-router-dom";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route
        path="/sent"
        element={
          <Info
            title={"Message delivered"}
            description={
              "Thank you for your message! We have received it and will respond as soon as possible."
            }
          />
        }
      />
      <Route
        path="*"
        element={
          <Info
            title={"Error 404"}
            description={
              "We're sorry, the page you were looking for could not be found. It's possible that the page has been removed, renamed, or is temporarily unavailable."
            }
          />
        }
      />
    </Routes>
  );
}

export default App;
