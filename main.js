import { disasterColors, disasterInformation } from './data.js';

/**
 * funciones útiles
 */

// funcion para procesar los datos obtenidos de la API de GDACS y transformarlos al formato esperado por el globo

function processData(data){
    // Aquí puedes procesar los datos obtenidos del archivo JSON
    const response = [];
    for (const feature of data.features){

        if (feature.properties.eventtype === 'EQ' || feature.properties.eventtype === 'FL' || feature.properties.eventtype === 'WF' || feature.properties.eventtype === 'TC') {
            const disaster = {
                id: feature.properties.eventid,
                type: feature.properties.eventtype === 'EQ' ? 'earthquake' :
                      feature.properties.eventtype === 'FL' ? 'flood' :
                      feature.properties.eventtype === 'WF' ? 'wildfire' :
                      feature.properties.eventtype === 'TC' ? 'hurricane' : 'unknown',
                location: feature.properties.country || 'Unknown Location',
                lat: feature.geometry.coordinates[1],
                lng: feature.geometry.coordinates[0],
                severity: feature.properties.alertlevel === 'Red' ? 'high' :
                          feature.properties.alertlevel === 'Orange' ? 'medium' : 'low',
                date: feature.properties.fromdate.split('T')[0] // Solo la fecha sin la hora
            };

            response.push(disaster);
        }
    }
    return response;
}

/**
 * Programa principal
 * Aquí se inicializa el globo, se cargan los datos y se configuran las interacciones.
 */

const fromdate = '2025-09-01'; // Fecha de inicio fija
const todate = new Date().toISOString().split('T')[0]; // Obtener la fecha actual en formato YYYY-MM-DD
// Realizar una solicitud HTTP para obtener los datos del archivo JSON
axios.get(`https://www.gdacs.org/gdacsapi/api/Events/geteventlist/SEARCH?fromdate=${fromdate}&todate=${todate}`)
    .then(function (response) {
        const mockDisasters = processData(response.data);
        // Elemento del DOM donde renderizaremos el globo
        const globeContainer = document.getElementById('globeViz');
        const tooltip = document.getElementById('tooltip');

        // Configuración inicial
        const globe = Globe()
          (globeContainer)
          .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-night.jpg')
          .bumpImageUrl('https://unpkg.com/three-globe/example/img/earth-topology.png')
          .backgroundImageUrl('https://unpkg.com/three-globe/example/img/night-sky.png')
          .width(window.innerWidth)
          .height(window.innerHeight);

        globe.controls().autoRotate = true;
        globe.controls().autoRotateSpeed = 0.5;

        // Cargar datos
        globe
          .pointsData(mockDisasters)
          .pointLat('lat')
          .pointLng('lng')
          .pointColor(d => disasterColors[d.type])
          // La altitud depende de la severidad
          .pointAltitude(d => {
            if (d.severity === 'high') return 0.3;
            if (d.severity === 'medium') return 0.2;
            return 0.1;
          })
          .pointRadius(0.5) // Un radio base relativo
          // Efecto de anillo animado alrededor del punto para destacar
          .ringsData(mockDisasters)
          .ringColor(d => disasterColors[d.type])
          .ringMaxRadius(d => {
            if (d.severity === 'high') return 8;
            if (d.severity === 'medium') return 5;
            return 3;
          })
          .ringPropagationSpeed(2)
          .ringRepeatPeriod(1000);

        // Manejo de Interacciones
        globe
          .onPointHover(point => {
            globeContainer.style.cursor = point ? 'pointer' : 'default';
            if (point) {
              globe.controls().autoRotate = false; // Pausar rotación al hacer hover de un punto real
              showTooltip(point);
            } else {
              globe.controls().autoRotate = true;
              hideTooltip();
            }
          })
          .onPointClick(point => {
            // Centrar la cámara en el punto clickeado
            globe.pointOfView({ lat: point.lat, lng: point.lng, altitude: 2 }, 1000);
            showTooltip(point);
          });

        // Función para actualizar y mostrar el tooltip
        function showTooltip(data) {
          const info = disasterInformation[data.type];
          const color = disasterColors[data.type];

          // Construir HTML del tooltip dinámicamente
          tooltip.innerHTML = `
            <div class="card-header">
              <span class="card-type" style="background: ${color}20; color: ${color}; border: 1px solid ${color}50;">
                ${info.name}
              </span>
              <div class="card-severity" style="color: ${color}; background: ${color}; box-shadow: 0 0 10px ${color};"></div>
            </div>
            
            <h3 class="card-title">${info.name} en ${data.location.split(',')[0]}</h3>
            <div class="card-location">📍 ${data.location}</div>
            
            <p class="card-description">${info.description}</p>
            
            <div class="card-section">
              <h4>⚠️ Datos Clave</h4>
              <ul>
                ${info.keyFacts.slice(0, 3).map(fact => `<li>${fact}</li>`).join('')}
              </ul>
            </div>
            
            <div class="card-section">
              <h4>🛡️ Preparación</h4>
              <ul>
                ${info.preparation.slice(0, 3).map(item => `<li>${item}</li>`).join('')}
              </ul>
            </div>
          `;

          tooltip.classList.add('visible');
          
          // Posicionar el tooltip cerca del mouse (simplificado para este ejemplo)
          // Nota: Para posicionamiento 3D exacto relative al punto del globo se requiere proyección.
          // Usaremos un enfoque simple: seguir al mouse o fijarlo en una esquina si se prefiere.
          // Aquí lo haré seguir al ratón con un offset.
        }

        function hideTooltip() {
          tooltip.classList.remove('visible');
        }

        // Mover el tooltip con el mouse
        document.addEventListener('mousemove', (e) => {
          if (tooltip.classList.contains('visible')) {
            // Evitar que el tooltip se salga de la pantalla
            const x = e.clientX + 20;
            const y = e.clientY + 20;
            
            const rect = tooltip.getBoundingClientRect();
            const finalX = (x + rect.width > window.innerWidth) ? e.clientX - rect.width - 20 : x;
            const finalY = (y + rect.height > window.innerHeight) ? e.clientY - rect.height - 20 : y;

            tooltip.style.left = `${finalX}px`;
            tooltip.style.top = `${finalY}px`;
            
            // Si queremos actualizar la posición sin re-renderizar todo
            // Esto es para fixed/absolute positioning
          }
        });

        // Ajustar tamaño al redimensionar ventana
        window.addEventListener('resize', () => {
          globe.width(window.innerWidth).height(window.innerHeight);
        });
    })
    .catch(function (error) {
        console.error('Error al obtener los datos:', error);
    });

