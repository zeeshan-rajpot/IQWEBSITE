import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { userApi } from '../../api';
import BlogCard from './BlogCard';

const HomePageBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await userApi.getblog();

        if (Array.isArray(response)) {
          const sortedBlogs = response.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );
          setBlogs(sortedBlogs.slice(0, 4));
        } else {
          setError('Unexpected data format');
        }
      } catch (error) {
        setError('Error fetching blogs');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className='flex justify-center items-center h-screen'>Loading</div>
    );
  }

  if (error) {
    return <div className='text-center'>{error}</div>;
  }

  return (
    <>
      <div className='w-11/12 md:5/6 lg:5/6 2xl:w-4/6  py-10  mx-auto'>
        <div className='flex justify-between my-5 items-center'>
          <h2 className='font-bold text-2xl md:text-3xl px-4 text-center'>
            Blogs
          </h2>
          <Link to='/blogs'>
            <button className='text-theme border-b-1 text-xl'>See More</button>
          </Link>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4'>
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
            <p className='text-center'>There are no blog posts yet.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default HomePageBlog;
