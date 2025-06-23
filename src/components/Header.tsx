import React from 'react';
import Logo from './Logo';
import { Menu } from 'lucide-react';
import { Button } from './ui/button';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import MobileMenu from './MobileMenu';
import { navMenu } from '@/constant';

const Header = () => {
  return (
    <header className='border h-16 grid grid-cols-1 items-center md:h-20 lg:h-24'>
      <div className='container flex justify-between '>
        <Logo variant='icon' />

        <NavigationMenu className='max-lg:hidden mx-auto'>
          <NavigationMenuList>
            {navMenu.map(({ href, label, submenu }, index) => (
              <NavigationMenuItem key={index}>
                {submenu ? (
                  <>
                    <NavigationMenuTrigger>{label}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className='grid grid-cols-2 gap-2 p-4 w-[640px]'>
                        {submenu.map(
                          ({ href, icon, label, desc }, subIndex) => (
                            <li key={subIndex}>
                              <NavigationMenuLink asChild>
                                <a
                                  href={href}
                                  className='flex gap-2 items-start'
                                >
                                  <div>{icon}</div>
                                  <div>
                                    <div className='font-medium'>{label}</div>
                                    <p className='text-sm text-muted-foreground'>
                                      {desc}
                                    </p>
                                  </div>
                                </a>
                              </NavigationMenuLink>
                            </li>
                          )
                        )}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink
                    href={href}
                    className={navigationMenuTriggerStyle()}
                  >
                    {label}
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className='flex items-center gap-2 justify-end'>
          <Button variant='ghost'>Sign In</Button>
          <Button>Free Trial</Button>
        </div>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant='outline'
              size='icon'
              className='lg:hidden'
            >
              <Menu />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align='end'
            className='bg-background/50 backdrop-blur-3xl border-foreground/5 border-x-0 border-b-0 rounded-lg overflow-hidden'
          >
            <MobileMenu navMenu={navMenu} />
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
};

export default Header;
