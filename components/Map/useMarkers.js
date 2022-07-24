import { useEffect } from 'react';

export const useMarkers = (map, data) => {
  useEffect(() => {
    if (!map) return;
    data.forEach((item) => {
      let text;
      let fillColor;

      switch (item.category) {
        case 'hotel':
          text = '\ue53a';
          fillColor = '#6b21a8';
          break;
        case 'store':
          text = '\ue547';
          fillColor = '#4338ca';
          break;
        case 'camping':
          text = '\uea99';
          fillColor = '#0d9488';
          break;
        case 'gas':
          text = '\ue546';
          fillColor = '#52525b';
          break;
        case 'toilet':
          text = '\ue63d';
          fillColor = '#1e40af';
          break;
        case 'parking':
          text = '\ue54f';
          fillColor = '#2563eb';
          break;
        case 'trash':
          text = '\ue760';
          fillColor = '#047857';
          break;
        case 'tour':
          text = '\ue564';
          fillColor = '#4d7c0f';
          break;
        case 'bus':
          text = '\ue564';
          fillColor = '#4d7c0f';
          break;
      }

      const svgMarker = {
        path: `M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z`,
        fillColor,
        fillOpacity: 1,
        strokeWeight: 0,
        scale: 0.9,
        labelOrigin: new google.maps.Point(0, -29),
      };

      const marker = new google.maps.Marker({
        position: item.position,
        map,
        icon: svgMarker,
        label: {
          text, // codepoint from https://fonts.google.com/icons
          fontFamily: 'Material Icons',
          color: '#FFF',
          fontSize: '20px',
        },
      });

      let contentHTML = '';

      if (item.content) {
        contentHTML = item.content
          .map(({ style, children }) => {
            let childElements;
            switch (style) {
              case 'h3':
                childElements = children
                  .map((child) => `${child.text}`)
                  .join('');
                return `<h3 class="font-bold text-bravo">${childElements}</h3>`;
              case 'normal':
                console.log(children);
                childElements = children
                  .map((child) => {
                    if (child.marks[0] === 'strong')
                      return `<strong class="font-bold">${child.text}</strong>`;
                    return `${child.text}`;
                  })
                  .join('');
                return `<p class="text-alfa mb-2XS">${childElements}</p>`;
            }
          })
          .join('\n');
      }

      console.log(contentHTML);

      const infowindow = new google.maps.InfoWindow({
        content: `<h1 class="font-black text-charlie">${item.name}</h1> ${contentHTML}`,
      });

      marker.addListener('click', () => {
        infowindow.open({
          anchor: marker,
          map,
          shouldFocus: false,
        });
      });
    });
  }, [map]);
};
