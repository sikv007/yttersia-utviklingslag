import { A } from '../Elements';

export const Footer = () => {
  return (
    <footer className='bg-white pt-XL pb-L text-center'>
      <h2 className='mb-S font-medium text-echo'>Kontaktinformasjon</h2>
      <div className='grid grid-cols-1 gap-XS mb-XL'>
        <A
          href='https://www.facebook.com/groups/190485074364272'
          target='_blank'
        >
          Følg oss på facebook!
        </A>
        <A href='mailto:Yttersia.utviklingslag@gmail.com'>
          Yttersia.utviklingslag@gmail.com
        </A>
      </div>
      <p className='text-grey-6'>
        &copy; Yttersia utviklingslag {new Date().getFullYear()}
      </p>
    </footer>
  );
};
