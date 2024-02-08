import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import Browse from "./pages/browsingPage/Browse";
import GuestSignupPage from "./pages/userPages/guest/GuestSignupPage";
import HostSignupPage from "./pages/userPages/host/HostSignupPage";
import SignInPage from "./pages/signInPage/SignInPage";
import GuestWelcome from "./pages/userPages/guest/GuestWelcome";
import HostWelcome from "./pages/userPages/host/HostWelcome";
import LeadingPage from "./pages/leadingPage/LeadingPage";
import HostingIntroduction from "./pages/hostPropertyPage/HostingIntroduction";
import HostProperty from "./pages/hostPropertyPage/HostProperty";
import SendReservationRequest from "./pages/sendPropertyReservationRequestPage/sendReservationRequest";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "UrbanStay";
        metaDescription = "";
        break;
      case "/signinpage":
        title = "Sign In";
        metaDescription = "";
        break;
      case "/guest-welcome":
        title = "Welcome Guest!";
        metaDescription = "";
        break;
      case "/host-welcome":
        title = "Welcome Host!";
        metaDescription = "";
        break;
      case "/leading-page":
        title = "UrbanStay";
        metaDescription = "";
        break;
      case "/host-signup-page":
        title = "Host Signup";
        metaDescription = "";
        break;
      case "/guest-signup-page":
        title = "Guest Signup";
        metaDescription = "";
        break;
      case "/browse":
        title = "Browse Properties";
        metaDescription = "";
        break;
      case "/hosting-introduction":
        title = "Get Started with Hosting!";
        metaDescription = "";
        break;
      case "/property-details":
        title = "Property Details";
        metaDescription = "";
        break;
      case "/host-property":
        title = "Host Your Property";
        metaDescription = "";
        break;
      case "/send-reservation-request":
        title = "Send Reservation Request!";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/browse" element={<Browse />} />
      <Route path="/guest-signup-page" element={<GuestSignupPage />} />
      <Route path="/host-signup-page" element={<HostSignupPage />} />
      <Route path="/signinpage" element={<SignInPage />} />
      <Route path="/guest-welcome" element={<GuestWelcome />} />
      <Route path="/host-welcome" element={<HostWelcome />} />
      <Route path="/leading-page" element={<LeadingPage />} />
      <Route path="/hosting-introduction" element={<HostingIntroduction />} />
      <Route path="/host-property" element={<HostProperty />} />
      <Route path="/send-reservation-request" element={<SendReservationRequest />} />
    </Routes>
  );
}
export default App;
