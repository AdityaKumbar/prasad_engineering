import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";

// Pages
import Home from "./pages/Home";
import AboutCompany from "./pages/about/AboutCompany";
import Founders from "./pages/about/Founders";
import Certifications from "./pages/about/Certifications";
import WhyUs from "./pages/WhyUs";
import Industries from "./pages/Industries";
import AluminiumCasting from "./pages/services/AluminiumCasting";
import Rubber from "./pages/services/Rubber";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />

          {/* About sub-routes */}
          <Route path="about">
            <Route index element={<Navigate to="company" replace />} />
            <Route path="company"       element={<AboutCompany />} />
            <Route path="founders"      element={<Founders />} />
            <Route path="certifications" element={<Certifications />} />
          </Route>

          {/* Standalone pages */}
          <Route path="why-us"    element={<WhyUs />} />
          <Route path="industries" element={<Industries />} />

          {/* Services sub-routes */}
          <Route path="services">
            <Route index element={<Navigate to="aluminium-casting" replace />} />
            <Route path="aluminium-casting" element={<AluminiumCasting />} />
            <Route path="rubber"            element={<Rubber />} />
          </Route>

          <Route path="contact" element={<Contact />} />
          <Route path="*"       element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
