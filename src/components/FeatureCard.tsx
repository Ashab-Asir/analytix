import { JSX } from 'react';
type FeatureCardProps = {
  classes?: string;
  children: JSX.Element;
};
const FeatureCard = ({ classes, children }: FeatureCardProps) => {
  return (
    <div
      className={`relative overflow-hidden p-[1px] ring-inset ring-zinc-800/50 rounded-[14px] ${classes}`}
    >
      <div className='relative isolate bg-card backdrop-blur-md rounded-xl overflow-hidden'>
        {children}
      </div>
    </div>
  );
};

export default FeatureCard;
