import { brands } from '@/assets';
const Brand = () => {
  return (
    <section className='section'>
      <div className='container max-w-screen-lg'>
        <p className='text-center mb-4 md:md-6'>
          Powering data insights for today's startup and tomorrow's leader.
        </p>
      </div>
      <div className='flex justify-center flex-wrap gap-5'>
        {brands.map((brand, index) => (
          <figure key={index}>
            <img
              src={brand}
              alt=''
              className='opacity-[0.6] '
            />
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Brand;
