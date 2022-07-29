import { useCallback, useEffect, useMemo, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

export const useMap = (data) => {
  const [map, setMap] = useState(null);
  const [error, setError] = useState('');

  const loader = useMemo(
    () =>
      new Loader({
        apiKey: process.env.NEXT_PUBLIC_API_KEY,
        version: 'weekly',
        libraries: ['places'],
      }),
    []
  );

  const mapOptions = useMemo(
    () => ({
      center: {
        lat: 69.60010791894497,
        lng: 18.04317189690204,
      },
      zoom: 11,
      mapTypeControl: false,
    }),
    []
  );

  const initMap = useCallback(async () => {
    try {
      setError('');
      const google = await loader.load();
      const googleMaps = new google.maps.Map(
        document.getElementById('map'),
        mapOptions
      );

      setMap(googleMaps);
    } catch (error) {
      setError(error);
    }
  }, [loader, mapOptions]);

  useEffect(() => {
    initMap();
  }, [initMap]);

  return {
    map,
    error,
  };
};
