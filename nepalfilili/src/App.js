import { Route, Routes } from "react-router-dom";
import Layout from "./pages/frontend/layout";
import HomePage from "./pages/frontend/homePage";
import AboutPage from "./pages/frontend/aboutPage";
import BlogPage from "./pages/frontend/blogPage";
import JobsPage from "./pages/frontend/jobsPage";
import LocationPage from "./pages/frontend/locationPage";
import ContactPage from "./pages/frontend/contactPage";
import DetailPage from "./pages/frontend/detailPage";
import CategoryPage from "./pages/frontend/categoriesPage";
import ErrorPage from "./pages/error/errorPage";
import LoginPage from "./pages/auth/loginPage";
import RegisterPage from "./pages/auth/registerPage";
import ForgetPasswordPage from "./pages/auth/forgetpasswordPage";
import SingleBlogPage from "./pages/frontend/singleblogPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="aboutus" element={<AboutPage />} />
      <Route path="blogs" element={<BlogPage />} />
      <Route path="blogs/singleblog" element={<SingleBlogPage />} />
      <Route path="category" element={<CategoryPage />} />
      <Route path="jobs" element={<JobsPage />} />
      <Route path="location" element={<LocationPage />} />
      <Route path="details" element={<DetailPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="*" element={<ErrorPage />} />
      {/* end Frontend Part */}
      {/* Auth Starting Routes */}
      <Route path="auth/login" element={<LoginPage />} />
      <Route path="auth/register" element={<RegisterPage />} />
      <Route path="auth/forgetpassword" element={<ForgetPasswordPage />} />
      {/* Auth Ending Routes */}
    </Routes>
  );
}

export default App;
