import React from 'react';
import { reviewData } from '@/constant';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Quote } from 'lucide-react';
const Review = () => {
  return (
    <section className='section'>
      <div className='container'>
        <div className='section-head'>
          <p className='section-subtitle'>{reviewData.sectionSubtitle}</p>
          <h2 className='section-title'>{reviewData.sectionTitle}</h2>
        </div>

        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {reviewData.reviewCard.map(
            ({ title, text, reviewAuthor, date }, index) => (
              <div key={index}>
                <Card className='relative'>
                  <CardHeader>
                    <CardTitle className='text-lg'>{title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-sm text-muted-foreground line-clamp-3'>
                      {text}
                    </p>
                  </CardContent>
                  <CardFooter className='block'>
                    {reviewAuthor}
                    <p className='text-xs text-muted-foreground'>{date}</p>
                  </CardFooter>
                  <div className='absolute bottom-0 right-3 opacity-[0.02]'>
                    <Quote size={80}></Quote>
                  </div>
                </Card>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Review;
