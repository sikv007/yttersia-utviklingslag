import { useEffect, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

export const useMap = (data) => {
  const [map, setMap] = useState(null);
  const [error, setError] = useState('');

  const loader = new Loader({
    apiKey: 'AIzaSyCPXaEmaxq69ghFQ5YRkWNGWErSWloCVsg',
    version: 'weekly',
    libraries: ['places'],
    // mapTypeControl: false
  });

  const mapOptions = {
    center: {
      lat: 69.60010791894497,
      lng: 18.04317189690204,
    },
    zoom: 11,
    mapTypeControl: false,
  };

  const initMap = async () => {
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
  };

  useEffect(() => {
    initMap();
  }, []);

  return {
    map,
    error,
  };
};
