import { NavLink } from '../Elements';

export const Navigation = () => {
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
        <ul className='flex items-center gap-M'>
          <li>
            <NavLink href='/nyheter' className='text-primary'>
              Nyheter
            </NavLink>
          </li>
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
