import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../pages/Homev2/components/Navbar/index';
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
