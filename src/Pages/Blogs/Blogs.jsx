import React from "react";
import BlogCard from "./BlogCard";
import { Link } from "react-router-dom";
import Navbar from "../../Compunents/Navbar";
import Footer from "../../Compunents/Footer";

const Blogs = () => {
  const blogs = [
    {
      title: "Dog Trainer",
      date: "May 30, 2024",
      description:
        "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit...",
      image: "image 58.png",
    },
    {
      title: "Web Designer",
      date: "May 30, 2024",
      description:
        "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit...",
      image: "image 58.png",
    },
    {
      title: "Nursing Assistant",
      date: "May 30, 2024",
      description:
        "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit...",
      image: "image 58.png",
    },
    {
      title: "Doctor",
      date: "May 30, 2024",
      description:
        "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit...",
      image: "image 58.png",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="w-full max-w-7xl mx-auto mt-8">
        <h2 className=" font-bold text-2xl md:text-3xl px-4 text-center">
          Blogs
        </h2>
        <p className="text-center px-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia fuga dolores voluptas similique ut praesentium repellendus? At culpa sint maiores modi excepturi ullam est, et fugiat quibusdam praesentium corporis voluptatibus.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 ">
          {blogs.map((blog, index) => (
            <BlogCard
              key={index}
              title={blog.title}
              date={blog.date}
              description={blog.description}
              image={blog.image}
            />
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Blogs;
