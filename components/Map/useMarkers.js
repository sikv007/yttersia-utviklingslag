import { useEffect } from 'react';

export const useMarkers = (map, data) => {
  useEffect(() => {
    if (!map) return;
    data.forEach((item) => {
      let text;
      let fillColor;

      if (item.type === 'hotel') {
        text = 'H';
        fillColor = '#6b21a8';
      }

      const svgMarker = {
        path: `M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z`,
        fillColor,
        fillOpacity: 1,
        strokeWeight: 0,
        labelOrigin: new google.maps.Point(0, -29),
      };

      new google.maps.Marker({
        position: item.position,
        map,
        icon: svgMarker,
        label: {
          text,
          color: '#FFF',
          fontSize: '20px',
        },
      });
    });
  }, [map]);
};
