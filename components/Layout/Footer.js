import { A, Logo } from '../Elements';

export const Footer = () => {
  return (
    <footer className='bg-white pt-XL pb-L'>
      <div className='container grid gap-L tablet-m:text-center'>
        <div><Logo /></div>
        <div>
          <h2 className='mb-S font-medium text-echo text-grey-8'>Kontaktinformasjon</h2>
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
        </div>
      </div>
      <p className='text-grey-6 text-center'>
        &copy; Yttersia utviklingslag {new Date().getFullYear()}
      </p>
    </footer>
  );
};
