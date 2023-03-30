import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import MainBody from './components/MainBody/MainBody';
import content from './components/data/data';

const Blog = () => {
  let { title } = useParams();

  return content[title] ? (
    <>
      <Navbar />
      <MainBody id={title} />
    </>
  ) : (
    <p>Page not found</p>
  );
};

export default Blog;
