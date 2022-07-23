import Head from 'next/head';
import { Map } from '../components/Map';

const App = () => {
  return (
    <>
      <div>
        <header className='h-[300px] text-center flex items-center justify-center'>
          <div className='w-[50%]'>
            <span className='text-echo font-bold'>Velkommen til</span>
            <h1 className='text-juliet font-black bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
              Brensholmen, Sommarøy, Hillesøy, Greipstad, Buvik.
            </h1>
          </div>
        </header>
        <Map />
        <section>
          <div className='container text-charlie'>
            <p className='mb-S'>
              Velkommen til nettsiden til Utviklingslaget på Yttersia.
            </p>
            <p className='mb-S'>
              Her vil vi legge ut relevant informasjon for våre beboere,
              kommende arrangementer, oversikt over aktiviteter for personer i
              alle aldre, en beskrivelse av lokale bedrifter og sist men ikke
              minst oversikt over lokaler og utstyr man kan leie til privat
              bruk!
            </p>
            <p className='mb-S'>
              Vi håper dere finner denne siden nyttig. Om det er informasjon
              dere føler mangler eller har forslag til forbedringer er det bare
              å ta kontakt med oss.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default App;
