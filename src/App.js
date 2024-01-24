import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import SignInPage from "./pages/signInPage/SignInPage";
import GuestWelcome from "./pages/userPages/guest/GuestWelcome";
import HostWelcome from "./pages/userPages/host/HostWelcome";
import LeadingPage from "./pages/leadingPage/LeadingPage";

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
        title = "";
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
      <Route path="/signinpage" element={<SignInPage />} />
      <Route path="/guest-welcome" element={<GuestWelcome />} />
      <Route path="/host-welcome" element={<HostWelcome />} />
      <Route path="/leading-page" element={<LeadingPage />} />
    </Routes>
  );
}
export default App;
