import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/auth/Login/login";
import Register from "./pages/auth/Register/register";
import Blog from "./pages/Blog/blog";
import SingleBlog from "./pages/Blog/singleblog";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/singleblog" element={<SingleBlog />} />
      {/* auth */}
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
    </Routes>
  );
}

export default App;
