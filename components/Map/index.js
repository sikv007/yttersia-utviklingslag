import { useMap } from './useMap';
import { useMarkers } from './useMarkers';

export const Map = ({ data }) => {
  const { map } = useMap(data);

  const markers = useMarkers(map, data);

  return (
    <div>
      <div id='map' className='h-[600px]'></div>
    </div>
  );
};
