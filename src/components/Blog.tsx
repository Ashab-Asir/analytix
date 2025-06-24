import React from 'react';
import { blogData } from '@/constant';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
const Blog = () => {
  return (
    <section className='section'>
      <div className='container'>
        <div className='section-head'>
          <p className='section-subtitle'>{blogData.sectionSubtitle}</p>
          <h2 className='section-title'>{blogData.sectionTitle}</h2>
          <p className='section-text'>{blogData.sectionText}</p>
        </div>

        <div>
          {blogData.blogs.map(
            (
              {
                imgSrc,
                title,
                badge,
                author: { avatarSrc, authorName, publishDate, readingTime },
              },
              index
            ) => (
              <div key={index}></div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Blog;
