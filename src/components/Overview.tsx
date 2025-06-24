import { overviewBanner } from '@/assets';
import { overviewData } from '@/constant';
import { Button } from './ui/button';
import { Play } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import ReactPlayer from 'react-player';
import { AspectRatio } from './ui/aspect-ratio';
const Overview = () => {
  return (
    <section className='section'>
      <div className='container'>
        <div className='section-head'>
          <p className='section-subtitle'>{overviewData.sectionSubtitle}</p>
          <h2 className='section-title'>{overviewData.sectionTitle}</h2>
          <p className='section-text'>{overviewData.sectionText}</p>
        </div>

        <div>
          <div className='relative max-w-4xl mx-auto shadow-xl'>
            <figure>
              <img
                src={overviewBanner}
                width={900}
                height={601}
              ></img>
            </figure>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant='secondary'
                  className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-150'
                >
                  <div className='sr-only'>Play video</div>
                  <Play
                    fill='#fff'
                    size={50}
                  ></Play>
                </Button>
              </DialogTrigger>
              <DialogContent className='p-0 overflow-hidden max-w-[640px]'>
                <AspectRatio ratio={16 / 9}>
                  <ReactPlayer
                    url='https://youtu.be/FGzo2Dm3Rh8?si=ADZIxMF0tsIRIqSE'
                    style={{
                      minWidth: '100%',
                      maxWidth: '100%',
                      minHeight: '100%',
                      maxHeight: '100%',
                    }}
                  ></ReactPlayer>
                </AspectRatio>
              </DialogContent>
            </Dialog>
          </div>

          <div className='max-w-4xl mx-auto  grid grid-cols-1 gap-5 mt-8 md:mt-16 xl:grid-cols-[3fr,2.5fr] xl:items-center'>
            <p className='section-title text-center lg:max-w-[30ch] lg:mx-auto xl:text-left'>
              {overviewData.listTitle}
            </p>
            <div className='flex flex-wrap justify-center gap-5 md:gap-10 xl:gap-8'>
              {overviewData.list.map(({ title, text }, index) => (
                <div
                  key={index}
                  className='text-center'
                >
                  <h3 className='text-3xl'>{title}</h3>
                  <p className='text-muted-foreground'>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
