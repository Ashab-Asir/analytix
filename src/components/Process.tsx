import { processBanner } from '@/assets';
import { processData } from '@/constant';

const Process = () => {
  return (
    <section className='section'>
      <div className='container'>
        <div className='section-head'>
          <p className='section-subtitle'>{processData.sectionSubtitle}</p>
          <h2 className='section-title'>{processData.sectionTitle}</h2>
          <p className='section-text'>{processData.sectionText}</p>
        </div>

        <div className='grid gap-14 lg:grid-cols-2 lg:items-center'>
          <div className='grid gap-7 lg:gap-10'>
            {processData.list.map(({ icon, text, title }, index) => (
              <div
                className='flex flex-col gap-4 md:flex-row lg:gap-7'
                key={index}
              >
                <div className='w-16 -16 grid place-items-center rounded-full border border-foreground/5 shrink-0'>
                  {icon}
                </div>
                <div>
                  <div className='grid gap-2 md:gap-3'>
                    <h3 className='text-xl lg:text-2xl'>{title}</h3>
                    <p className='text-sm text-muted-foreground md:text-base'>
                      {text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='max-lg:-order-1'>
            <figure className='mx-auto bg-primary rounded-3xl max-w-[580px] overflow-hidden p-8 pb-0 lg:p-12'>
              <img
                src={processBanner}
                width={500}
                height={528}
                alt=''
                className='w-full h-full object-contain object-bottom'
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
