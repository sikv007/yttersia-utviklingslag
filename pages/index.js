import { Header } from '../components/Layout';
import { Map } from '../components/Map';

const App = () => {
  return (
    <>
      <div>
        <Header />
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
