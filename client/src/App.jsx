import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import Profile from "./pages/Profile.jsx";
import ViewBlogs from "./pages/ViewBlogs.jsx";
import MyBlogs from "./pages/MyBlogs.jsx";
import BlogForm from "./pages/BlogForm.jsx";
import Contacts from "./pages/Contacts.jsx";
import About from "./pages/About.jsx";
import EditBlog from "./pages/EditBlog.jsx";
import EditProfile from "./pages/EditProfile.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/profile" element={<Profile />} />
        <Route path="/users/profile/:id" element={<EditProfile />} />
        <Route path="/users/blogs/:id" element={<ViewBlogs />} />
        <Route path="/users/blogs/:id/edit" element={<EditBlog />} />
        <Route path="/users/blogs" element={<MyBlogs />} />
        <Route path="/blogs/new" element={<BlogForm />} />
      </Route>
    </Routes>
  );
};

export default App;
