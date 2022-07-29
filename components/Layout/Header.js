import { Navigation } from './Navigation';

export const Header = () => {
  return (
    <section>
      <div className='bg-[url(/hero.webp)] tablet-m:bg-fixed bg-cover bg-center'>
        <div className='w-full h-full bg-gradient-to-t from-primary-dark to-transparent p-2XL shadow-lg rounded-lg text-center flex flex-col gap-S items-center justify-center'>
          <div className='w-[100%] tablet-m:w-[50%] backdrop-blur-lg shadow-lg p-XL tablet-m:p-2XL rounded-md'>
            <h2 className='text-foxtrot tablet-m:text-hotel font-medium text-grey-1 backdrop-blur-sm mb-XL'>
              Brensholmen, Sommarøy, Hillesøy, Greipstad, Buvik.
            </h2>
            <hr className='w-[30%] text-grey-1 mx-auto' />
          </div>
        </div>
      </div>
    </section>
  );
};
