import { useState } from 'react';
import { createPortal } from 'react-dom';
import { NavLink } from '../Elements';

export const Navigation = () => {
  const [isVisible, setIsVisible] = useState(false);

  const pages = [
    {
      title: 'Nyheter',
      path: '/nyheter',
    },
    {
      title: 'Kontakt',
      path: '/kontakt',
    },
  ];

  const mobileNav = (
    <div className='absolute top-[0] left-[0] bg-grey-1 w-full h-full'>
      <div className='flex justify-end container pt-M'>
        <button onClick={() => setIsVisible(!isVisible)}>
          <span className='material-icons block tablet-m:hidden text-juliet'>
            close
          </span>
        </button>
      </div>
      <ul className='flex flex-col justify-center items-center pt-L gap-M'>
        <li>
          <NavLink href='/kontakt' className='text-primary'>
            Kontakt
          </NavLink>
        </li>
      </ul>
    </div>
  );

  return (
    <nav className='bg-grey-1 py-M shadow-md'>
      <div className='container flex items-center justify-between'>
        <ul>
          <li>
            <NavLink
              href='/'
              className='font-script text-india tablet-m:text-juliet translate-y-[-6px]'
            >
              Yttersia
            </NavLink>
          </li>
        </ul>
        <button onClick={() => setIsVisible(!isVisible)}>
          <span className='material-icons block tablet-m:hidden text-juliet'>
            menu
          </span>
        </button>
        {isVisible && createPortal(mobileNav, document.querySelector('body'))}

        <ul className='hidden tablet-m:flex items-center gap-M'>
          <li>
            <NavLink href='/kontakt' className='text-primary'>
              Kontakt
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
