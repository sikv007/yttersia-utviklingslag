import { Footer } from './Footer';
import { Navigation } from './Navigation';

export const PageWrapper = ({ pages, children }) => {
  return (
    <>
      <Navigation pages={pages} />
      {children}
      <Footer />
    </>
  );
};
