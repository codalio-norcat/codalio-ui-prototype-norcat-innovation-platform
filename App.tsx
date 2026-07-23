
import "./styles.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Landing from "./pages/Landing";
import Report from "./pages/Report";
import Contact from "./pages/Contact";
import ClientPortal from "./pages/ClientPortal";
import ClientPortalCompany from "./pages/ClientPortalCompany";
import ClientPortalReports from "./pages/ClientPortalReports";
import ClientPortalEvents from "./pages/ClientPortalEvents";
import ClientPortalMentors from "./pages/ClientPortalMentors";
import ClientPortalExternalSources from "./pages/ClientPortalExternalSources";
import MentorPortal from "./pages/MentorPortal";
import MentorPortalDashboard from "./pages/MentorPortalDashboard";
import MentorPortalResources from "./pages/MentorPortalResources";
import MentorPortalEthicsAgreements from "./pages/MentorPortalEthicsAgreements";
import MentorPortalRaiseConcern from "./pages/MentorPortalRaiseConcern";
import Notifications from "./pages/Notifications";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>

      <Routes>
        <Route element={<Layout />}>
                <Route path="/" element={<Landing />} />
      <Route path="/report" element={<Report />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/client-portal" element={<ClientPortal />} />
      <Route path="/client-portal/company" element={<ClientPortalCompany />} />
      <Route path="/client-portal/reports" element={<ClientPortalReports />} />
      <Route path="/client-portal/events" element={<ClientPortalEvents />} />
      <Route path="/client-portal/mentors" element={<ClientPortalMentors />} />
      <Route path="/client-portal/external-sources" element={<ClientPortalExternalSources />} />
      <Route path="/mentor-portal" element={<MentorPortal />} />
      <Route path="/mentor-portal/dashboard" element={<MentorPortalDashboard />} />
      <Route path="/mentor-portal/resources" element={<MentorPortalResources />} />
      <Route path="/mentor-portal/ethics-agreements" element={<MentorPortalEthicsAgreements />} />
      <Route path="/mentor-portal/raise-concern" element={<MentorPortalRaiseConcern />} />
      <Route path="/notifications" element={<Notifications />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;