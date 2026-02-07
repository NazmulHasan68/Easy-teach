import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import GeneralLayout from "./layouts/GeneralLayout";
import Project from "./pages/Project";
import OurClient from "./pages/OurClient";
import ServiceErp from "./pages/ServiceErp";
import ServiceWeb from "./pages/ServiceWeb";
import ServiceDigital from "./pages/ServiceDigital";
import ProjectDetails from "./pages/ProjectDetails";
import ServiceWebDetails from "./pages/ServiceWebDetails";
import ServiceDigitalProjectDetails from "./components/Serives/digital/ServiceDigitalProjectDetails";
import ServiceErpProjectDetails from "./components/Serives/sofware/ServiceErpProjectDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GeneralLayout />}>
          <Route path="/" element={<Home />} />

          {/* Pages */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
          <Route path="/project/:prodectId" element={<ProjectDetails />} />
          <Route path="/our-client" element={<OurClient />} />

          {/* Services Main Page */}
          <Route path="/services" element={<Services />} />

          {/* Services Dropdown Pages */}
          <Route path="/services/web" element={<ServiceWeb />} />
          <Route path="/services/web/:id" element={<ServiceWebDetails />} />

          <Route path="/services/marketing" element={<ServiceDigital />} />
          <Route path="/services/marketing/:id" element={<ServiceDigitalProjectDetails />} />

          <Route path="/services/erp" element={<ServiceErp />} />
          <Route path="/services/erp/:id" element={<ServiceErpProjectDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
