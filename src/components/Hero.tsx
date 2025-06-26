import { CirclePlay } from 'lucide-react';
import { motion } from 'motion/react';
import { heroData } from '@/constant';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import ReactPlayer from 'react-player';
import { heroBanner } from '@/assets';
const Hero = () => {
  return (
    <section>
      <div className='container text-center'>
        <div className='max-w-screen-md mx-auto'>
          <motion.p className='text-sm uppercase tracking-wider bg-secondary/50 text-secondary-foreground max-w-max mx-auto px-3 py-1 rounded-full border-t border-blue-500/10 backdrop-blur-3xl mb-6 md:mb-10'>
            {heroData.sectionSubtitle}
          </motion.p>
          <h2 className='text-4xl font-semibold !leading-tight mb-4 md:text-5xl md:mb-5 lg:text-6xl '>
            {heroData.sectionTitle}
            <span className='relative isolate ms-4'>
              {heroData.decoTitle}

              <span className='absolute -z-10 top-2 -left-6 -right-4 bottom-0.5 bg-foreground/5 rounded-full px-8 ms-3 border-t border-foreground/20 shadow- [inset_0px_0px_30px_0px] shadow-foreground/20 md:top-3 md:bottom-11 lg:top-4 lg:bottom-2'></span>
            </span>
          </h2>
          <p>{heroData.sectionText}</p>
          <div className='flex justify-center gap-2 mt-6 md:mt-10'>
            <Button>Start Free Trial</Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant='ghost'>
                  <CirclePlay></CirclePlay>Watch Demo
                </Button>
              </DialogTrigger>
              <DialogContent className='p-0 overflow-hidden max-w-[640px]'>
                <AspectRatio ratio={16 / 9}>
                  <ReactPlayer
                    url='https://youtu.be/YNifRtmf7zU?si=hN939XpOdUtb5kVM'
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
        </div>
        <div className='relative mt-12 max-w-screen-xl mx-auto isolate rounded-xl md:mt-16'>
          <figure className='bg-background/60 borderborder-slate-800 backdrop-blur-3xl rounded-xl shadow-2xl overflow-hidden'>
            <img
              src={heroBanner}
              width={1468}
              height={815}
              alt='Analytix dashboard'
            />
          </figure>
          <div className='absolute bg-primary inset-5 blur-[50px] -z-10'></div>
          <div className='absolute inset-0 bg-primary blur-[200px] scale-y-75 scale-x-125 rounded-full -z-10'></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
