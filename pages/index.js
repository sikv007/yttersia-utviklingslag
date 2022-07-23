import { Map } from '../components/Map';

const App = () => {
  return (
    <>
      <div>
        <header className='h-[400px] tablet-m:h-[600px] bg-[url(../public/hero.webp)] bg-fixed bg-cover bg-bottom'>
          <div className='w-full h-full bg-gradient-to-t from-indigo-900 to-transparent p-XL shadow-lg rounded-lg text-center flex items-center justify-center'>
            <div className='w-[90%] tablet-m:w-[50%] backdrop-blur-lg shadow-lg p-2XL rounded-md'>
              <h1 className='text-golf tablet-m:text-juliet font-black text-white backdrop-blur-sm mb-XL'>
                Brensholmen, Sommarøy, Hillesøy, Greipstad, Buvik.
              </h1>
              <hr className='w-[30%] mx-auto' />
            </div>
          </div>
        </header>
        <section>
          <div className='container py-XL tablet-m:py-3XL text-center'>
            <h2 className='mb-S font-bold text-foxtrot'>
              Velkommen til nettsiden til Utviklingslaget på Yttersia.
            </h2>
            <p className='mb-S text-charlie'>
              Her vil vi legge ut relevant informasjon for våre beboere,
              kommende arrangementer, oversikt over aktiviteter for personer i
              alle aldre, en beskrivelse av lokale bedrifter og sist men ikke
              minst oversikt over lokaler og utstyr man kan leie til privat
              bruk!
            </p>
            <p className='mb-S text-charlie'>
              Vi håper dere finner denne siden nyttig. Om det er informasjon
              dere føler mangler eller har forslag til forbedringer er det bare
              å ta kontakt med oss.
            </p>
          </div>
        </section>
        <Map />
      </div>
    </>
  );
};

export default App;
