import Link from 'next/link';

export const NavLink = ({ children, href, className }) => {
  return (
    <Link href={href}>
      <a className={className ? className : ''}>{children}</a>
    </Link>
  );
};
