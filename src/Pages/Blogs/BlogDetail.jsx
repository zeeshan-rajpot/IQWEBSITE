import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from "../../Compunents/Navbar";
import Footer from "../../Compunents/Footer";

const BlogDetail = () => {
  const { title } = useParams(); // Fetch the blog title from the URL
  const blogs = [
    {
      title: "Dog Trainer",
      date: "May 30, 2024",
      description:
        "Full details about Dog Trainer...",
      image: "image 58.png",
    },
    {
      title: "Web Designer",
      date: "May 30, 2024",
      description:
        "Full details about Web Designer...",
      image: "image 58.png",
    },
    {
      title: "Nursing Assistant",
      date: "May 30, 2024",
      description:
        "Full details about Nursing Assistant...",
      image: "image 58.png",
    },
    {
      title: "Doctor",
      date: "May 30, 2024",
      description:
        "Full details about Doctor...",
      image: "image 58.png",
    },
  ];

  const blog = blogs.find((blog) => blog.title === title);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto mt-8 p-4">
        <img src={blog.image} alt={blog.title} className="w-full h-96 object-cover rounded-md" />
        <h1 className="text-3xl font-bold mt-6">{blog.title}</h1>
        <p className="text-gray-500 text-sm mt-2">{blog.date}</p>
        <p className="text-gray-700 mt-4">{blog.description}</p>
      </div>
      <Footer />
    </>
  );
};

export default BlogDetail;
