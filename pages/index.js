import Image from 'next/image';
import { Heading } from '../components/Elements';
import { Header } from '../components/Layout';
import { Map } from '../components/Map';
import { client } from '../utils/config';
import yttersia from '../public/yttersia/yttersia_2.webp';

const App = ({ data }) => {
  return (
    <>
      <div>
        <Header />
        <section className='bg-grey-2'>
          <div className='container py-XL tablet-m:py-3XL grid grid-cols-1 tablet-m:grid-cols-2 gap-L text-grey-9 tablet-m:text-charlie'>
            <div className=''>
              <Heading>
                Velkommen til nettsiden til Utviklingslaget på Yttersia.
              </Heading>
              <p className='mb-S'>
                Her vil vi legge ut relevant informasjon for våre beboere,
                kommende arrangementer, oversikt over aktiviteter for personer i
                alle aldre, en beskrivelse av lokale bedrifter og sist men ikke
                minst oversikt over lokaler og utstyr man kan leie til privat
                bruk!
              </p>
              <p className='mb-S'>
                Vi håper dere finner denne siden nyttig. Om det er informasjon
                dere føler mangler eller har forslag til forbedringer er det
                bare å ta kontakt med oss.
              </p>
            </div>
            <div>
              <Image
                src={yttersia.src}
                alt='Some alt'
                width='900'
                height='600'
                className='rounded-lg shadow-sm'
              />
            </div>
          </div>
        </section>
        <Map data={data} />
      </div>
    </>
  );
};

export default App;

export async function getStaticProps(context) {
  const data = await client.fetch("*[_type == 'map']");

  return {
    props: {
      data,
    },
  };
}
