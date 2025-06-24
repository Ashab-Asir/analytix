import { MenuItem } from '@/types';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { ChevronsUpDown } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
type MobileMenuProp = {
  navMenu: MenuItem[];
};
const MobileMenu = ({ navMenu }: MobileMenuProp) => {
  return (
    <div>
      <ul className='mb-3'>
        {navMenu.map(({ href, label, submenu }, index) => (
          <li key={index}>
            {submenu ? (
              <div>
                <Collapsible>
                  <CollapsibleTrigger asChild>
                    <Button
                      variant='ghost'
                      className='w-full justify-between'
                    >
                      {label}
                      <ChevronsUpDown></ChevronsUpDown>
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className='ps-2'>
                    <ul className='border-l border-l-muted-foreground/20'>
                      {submenu.map(({ href, label }, index) => (
                        <li key={index}>
                          <Button
                            asChild
                            variant='ghost'
                            className='w-full justify-start text-muted-foreground
                            hover:bg-transparent'
                          >
                            <a href={href}>{label}</a>
                          </Button>
                        </li>
                      ))}
                    </ul>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            ) : (
              <Button
                asChild
                variant='ghost'
                className='w-full justify-start'
              >
                <a href={href}>{label}</a>
              </Button>
            )}
          </li>
        ))}
      </ul>
      <Separator className='bg-muted-foreground/20'></Separator>
      <div className=' mt-2'>
        <Button
          variant='ghost'
          className='w-full'
        >
          Sign In
        </Button>
        <Button className='w-full'>Free Trail</Button>
      </div>
    </div>
  );
};

export default MobileMenu;
