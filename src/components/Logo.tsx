import { logo, favicon } from '@/assets';

type LogoProps = {
  variant?: 'default' | 'icon';
};
const Logo = ({ variant = 'default' }: LogoProps) => {
  return (
    <a href=''>
      {variant === 'default' && (
        <img
          src={logo}
          alt='analytix logo'
          width={150}
          height={31}
        ></img>
      )}
      {variant === 'icon' && (
        <img
          src={favicon}
          alt='analytix logo'
          width={32}
          height={2}
        ></img>
      )}
    </a>
  );
};

export default Logo;
