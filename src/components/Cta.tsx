import { ctaData } from '@/constant';
import { Button } from './ui/button';
import { ctaBanner } from '@/assets';
const Cta = () => {
  return (
    <section className='section'>
      <div className='container'>
        <div className='bg-accent rounded-xl border-t border-primary-foreground/30 overflow-hidden grid grid-cols-1  lg:grid-cols-2 lg:items-center'>
          <div className='p-8 md:p-16 xl:p-20'>
            <h2 className='text-[26px] leading-tight font-semibold mb-6 capitalize sm:text-[34px] md:text-[40px] lg:text-[46px] lg:mb-10 '>
              {ctaData.text}
            </h2>
            <div className='flex items-center gap-3 lg:gap-4'>
              <Button>Free Trial</Button>
              <Button variant='outline'>Price and Plans</Button>
            </div>
          </div>
          <figure className='-order-1 pt-14 ps-8 sm:ps-12 md:ps-14 lg:order-none lg:p-0'>
            <img
              src={ctaBanner}
              alt=''
              className='w-full h-full object-contain object-right'
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Cta;
