import Logo from './Logo';
import { footerData } from '@/constant';
const Footer = () => {
  return (
    <section className='section !pb-0'>
      <div className='container'>
        <div className='grid grid-cols-1 gap-x-2 gap-y-10 lg:grid-cols-4'>
          <Logo></Logo>
          <div className='grid grid-cols-2 gap-x-2 gap-y-8 text-sm sm:grid-cols-4 lg:col-span-3'>
            {footerData.links.map(({ title, items }, index) => (
              <ul key={index}>
                <p className='mb-4'>{title}</p>
                {items.map(({ href, label }, index) => (
                  <li
                    className='text-muted-foreground'
                    key={index}
                  >
                    <a
                      className='inline-block py-1 hover:text-primary'
                      href={href}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className='flex justify-between mt-12 border-t border-gray-50 py-6'>
          <a href='#'>{footerData.copyright}</a>
          <div>
            <ul className='flex gap-5'>
              {footerData.socialLinks.map(({ href, icon }, index) => (
                <li key={index}>
                  <a href={href}>{icon}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
