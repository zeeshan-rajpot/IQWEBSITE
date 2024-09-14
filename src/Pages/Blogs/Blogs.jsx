import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogCard from "./BlogCard";

import Navbar from "../../Compunents/Navbar";
import Footer from "../../Compunents/Footer";
import { userApi } from "../../api";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await userApi.getblog();

        if (Array.isArray(response)) {
          setBlogs(response);
        } else {
          setError("Unexpected data format");
        }
      } catch (error) {
        setError("Error fetching blogs");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading
      </div>
    );
  }

  if (error) {
    return <div className="text-center">{error}</div>;
  }

  return (
    <>
      <Navbar />
      <div className="w-full max-w-7xl mx-auto mt-8">
        <h2 className="font-bold text-2xl md:text-3xl px-4 text-center">
          Blogs
        </h2>
        <p className="text-center px-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia fuga
          dolores voluptas similique ut praesentium repellendus? At culpa sint
          maiores modi excepturi ullam est, et fugiat quibusdam praesentium
          corporis voluptatibus.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          {blogs && blogs.length > 0 ? (
            blogs.map((blog, index) => (
              <BlogCard
                key={index}
                title={blog.title}
                date={blog.createdAt}
                description={blog.description}
                image={blog.picture}
              />
            ))
          ) : (
            <p className="text-center">There are no blog posts yet.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
