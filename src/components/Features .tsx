import { featureData } from '@/constant';
import FeatureCard from './FeatureCard';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
const Features = () => {
  return (
    <section className='section'>
      <div className='container'>
        <div className='section-head'>
          <p className='section-subtitle'>{featureData.sectionSubtitle}</p>
          <h2 className='section-title'>{featureData.sectionTitle}</h2>
          <p className='section-text'>{featureData.sectionText}</p>
        </div>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-6'>
          {featureData.features.map(
            ({ icon, iconBoxColor, title, desc, imgSrc }, index) => (
              <FeatureCard
                classes={
                  index < 2
                    ? 'md:col-span-2 lg:col-span-1 xl:col-span-3'
                    : 'xl:col-span-2'
                }
                key={index}
              >
                <>
                  <div className='p-8'>
                    <div
                      className={`w-16 h-16 grid place-items-center rounded-full flex-shrink-0 ${iconBoxColor}`}
                    >
                      {icon}
                    </div>
                    <h3 className='text-foreground text-xl font-medium mt-4 mb-3'>
                      {title}
                    </h3>
                    <p className='text-muted-foreground line-clamp-2'>{desc}</p>
                    <div>
                      <Button
                        variant='link'
                        className='p-0 h-auto mt-3'
                      >
                        Learn More<ArrowRight></ArrowRight>
                      </Button>
                    </div>
                  </div>
                  {imgSrc && (
                    <figure className='p-6 pt-0'>
                      <img
                        src={imgSrc}
                        alt=''
                      />
                    </figure>
                  )}
                </>
              </FeatureCard>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Features;
