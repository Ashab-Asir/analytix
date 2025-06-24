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
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from './ui/badge';
const Blog = () => {
  return (
    <section className='section'>
      <div className='container'>
        <div className='section-head'>
          <p className='section-subtitle'>{blogData.sectionSubtitle}</p>
          <h2 className='section-title'>{blogData.sectionTitle}</h2>
          <p className='section-text'>{blogData.sectionText}</p>
        </div>

        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3'>
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
              <div key={index}>
                <Card className='group:'>
                  <CardHeader>
                    <figure className='rounded-lg overflow-hidden '>
                      <img
                        src={imgSrc}
                        alt={title}
                        className='img-cover group-hover:scale-105 transition-transform duration-500'
                      />
                    </figure>
                  </CardHeader>

                  <CardContent>
                    <Badge className='mb-3'>{badge}</Badge>
                    <CardTitle className='leading-normal '>
                      <a
                        className='hover:text-primary'
                        href='#'
                      >
                        {title}
                      </a>
                    </CardTitle>
                  </CardContent>
                  <CardFooter className='gap-3'>
                    <Avatar>
                      <AvatarImage src={avatarSrc}></AvatarImage>
                      <AvatarFallback>{authorName}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className='text-sm'>{authorName}</p>
                      <div className='flex items-center gap-1.5'>
                        <time
                          className='text-xs text-muted-foreground'
                          dateTime={publishDate}
                        >
                          {publishDate}
                        </time>
                        <span className='w-1 h-1 bg-muted-foreground/50 rounded-full'></span>
                        <p>{readingTime}</p>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Blog;
