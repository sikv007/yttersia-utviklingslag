import { useState } from 'react';
import { createPortal } from 'react-dom';
import { NavLink } from '../Elements';
import { Logo } from '../Elements/Logo';

export const Navigation = () => {
  const [isVisible, setIsVisible] = useState(false);

  const pages = [
    {
      title: 'Kontakt',
      path: '/kontakt',
    },
  ];

  const links = pages.map(({ path, title }) => (
    <li
      key={path}
      onClick={() => {
        console.log(isVisible);
        if (isVisible) {
          setIsVisible(false);
        }
      }}
    >
      <NavLink className='text-primary' href={path}>
        {title}
      </NavLink>
    </li>
  ));

  const mobileNav = (
    <div className='absolute top-[0] left-[0] bg-grey-1 w-full h-full block tablet-m:hidden'>
      <div className='flex justify-end container pt-M'>
        <button onClick={() => setIsVisible(!isVisible)}>
          <span className='material-icons text-juliet'>close</span>
        </button>
      </div>
      <ul className='flex flex-col justify-center items-center pt-L gap-M'>
        {links}
      </ul>
    </div>
  );

  return (
    <nav className='bg-grey-1 py-M shadow-md'>
      <div className='container flex items-center justify-between'>
        <ul>
          <li>
            <Logo />
          </li>
        </ul>
        <button onClick={() => setIsVisible(!isVisible)}>
          <span className='material-icons block tablet-m:hidden text-juliet'>
            menu
          </span>
        </button>
        {isVisible && createPortal(mobileNav, document.querySelector('body'))}

        <ul className='hidden tablet-m:flex items-center gap-M'>{links}</ul>
      </div>
    </nav>
  );
};
