import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Home from "./pages/Home";
import Introduction from "./pages/About/Introduction";
import Faculty from "./pages/About/Faculty";
import Gallery from "./pages/About/Gallery";
import Principal from "./pages/About/Principal";
import AdmissionsPage from "./pages/AdmissionsPage";
import AdmissionForm from "./pages/AdmissionForm";
import EventsPage from "./pages/EventsPage";
import ContactPage from "./pages/ContactPage";
import Branch2 from "./pages/Branch2";

function App() {
  return (
    <HelmetProvider>
      <div className="w-full min-h-screen overflow-x-hidden">
        <Navbar />
        <ScrollToTop />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />

            {/* About Sub-pages */}
            <Route path="/about/introduction" element={<Introduction />} />
            <Route path="/about/Faculty" element={<Faculty />} />
            <Route path="/about/Gallery" element={<Gallery />} />
            <Route path="/about/Principal" element={<Principal />} />

            <Route path="/branch2" element={<Branch2 />} />

            {/* Other Pages */}
            <Route path="/admissions" element={<AdmissionsPage />} />
            <Route path="/admission-form" element={<AdmissionForm />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
