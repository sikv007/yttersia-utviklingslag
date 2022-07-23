export const Header = () => {
  return (
    <header className='h-[400px] tablet-m:h-[600px] bg-[url(/hero.webp)] bg-fixed bg-cover bg-bottom'>
      <div className='w-full h-full bg-gradient-to-t from-indigo-900 to-transparent p-XL shadow-lg rounded-lg text-center flex items-center justify-center'>
        <div className='w-[100%] tablet-m:w-[50%] backdrop-blur-lg shadow-lg p-XL tablet-m:p-2XL rounded-md'>
          <h1 className='text-foxtrot tablet-m:text-juliet font-black text-white backdrop-blur-sm mb-XL'>
            Brensholmen, Sommarøy, Hillesøy, Greipstad, Buvik.
          </h1>
          <hr className='w-[30%] mx-auto' />
        </div>
      </div>
    </header>
  );
};
