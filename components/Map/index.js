import { useEffect } from 'react';
import { useMap } from './useMap';
import { useMarkers } from './useMarkers';

const data = [
  {
    name: 'Joker Austein',
    position: {
      lat: 69.60010791894497,
      lng: 18.04317189690204,
    },
    type: 'store',
  },
  {
    name: 'Sommarøy',
    position: { lat: 69.63556189120732, lng: 17.99183019505864 },
    type: 'hotel',
  },
];

export const Map = () => {
  console.log('RENDER');

  const { map } = useMap(data);

  const markers = useMarkers(map, data);

  return (
    <div>
      <div id='map' className='h-[500px]'></div>;
    </div>
  );
};