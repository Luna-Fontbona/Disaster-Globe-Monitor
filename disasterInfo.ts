import { DisasterType } from './disasters';

export interface DisasterInfo {
  type: DisasterType;
  name: string;
  description: string;
  preparation: string[];
  duringEvent: string[];
  afterEvent: string[];
  keyFacts: string[];
}

export const disasterInformation: Record<DisasterType, DisasterInfo> = {
  earthquake: {
    type: 'earthquake',
    name: 'Terremoto',
    description:
      'Un terremoto es la vibración de la Tierra producida por una rápida liberación de energía. Pueden ocurrir sin advertencia y causar daños severos en estructuras y poner en peligro la vida.',
    preparation: [
      'Identifica lugares seguros en cada habitación: debajo de muebles sólidos o contra paredes interiores',
      'Prepara un kit de emergencia con agua, alimentos no perecederos, linterna y radio',
      'Asegura muebles pesados, estantes y objetos que puedan caer',
      'Aprende a cerrar las llaves del gas, agua y electricidad',
      'Realiza simulacros con tu familia para saber qué hacer',
      'Ten a mano números de emergencia y un plan de reunificación familiar',
    ],
    duringEvent: [
      'Si estás adentro: Agáchate, cúbrete y agárrate. Protégete debajo de un escritorio o mesa resistente',
      'Mantente alejado de ventanas, espejos y objetos que puedan caer',
      'Si estás en la cama, quédate ahí y cubre tu cabeza con una almohada',
      'Si estás afuera, aléjate de edificios, postes eléctricos y árboles',
      'Si estás conduciendo, detente de forma segura, lejos de puentes y cables, y permanece en el vehículo',
      'No uses elevadores ni salgas corriendo durante el temblor',
    ],
    afterEvent: [
      'Verifica si hay heridos y proporciona primeros auxilios si es necesario',
      'Revisa tu hogar en busca de daños estructurales, fugas de gas o cables eléctricos dañados',
      'Espera réplicas y mantente preparado para agacharte, cubrirte y agarrarte nuevamente',
      'Mantente alejado de edificios dañados',
      'Escucha la radio o televisión para información oficial',
      'Usa el teléfono solo para emergencias',
      'Limpia derrames de medicamentos, sustancias químicas peligrosas u otros materiales',
    ],
    keyFacts: [
      'Los terremotos pueden ocurrir en cualquier momento sin advertencia previa',
      'Las réplicas pueden ocurrir minutos, horas o incluso días después del terremoto principal',
      'La mayoría de las muertes por terremotos son causadas por edificios que se derrumban',
      'La escala de Richter mide la magnitud de un terremoto',
    ],
  },
  hurricane: {
    type: 'hurricane',
    name: 'Huracán',
    description:
      'Un huracán es una tormenta tropical intensa con vientos sostenidos de 119 km/h o más. Puede causar daños devastadores por viento, lluvia torrencial, inundaciones y marejadas ciclónicas.',
    preparation: [
      'Conoce tu zona de riesgo y las rutas de evacuación',
      'Prepara un kit de emergencia con suministros para al menos 72 horas',
      'Protege tus ventanas con contraventanas o paneles de madera',
      'Asegura objetos en el exterior que puedan convertirse en proyectiles',
      'Llena el tanque de gasolina de tu vehículo',
      'Retira dinero en efectivo por si fallan los sistemas electrónicos',
      'Fotografía tus pertenencias para el seguro',
    ],
    duringEvent: [
      'Si te ordenan evacuar, hazlo inmediatamente',
      'Si te quedas en casa, permanece en el interior lejos de ventanas y puertas de vidrio',
      'Refúgiate en una habitación interior, armario o pasillo en el nivel más bajo',
      'Cierra todas las puertas interiores y asegura las exteriores',
      'Mantente informado a través de la radio o televisión',
      'No salgas durante el "ojo" del huracán - es solo una pausa temporal',
      'Evita usar velas - usa linternas para iluminación',
    ],
    afterEvent: [
      'Espera el aviso oficial de que es seguro salir',
      'Evita aguas estancadas que pueden estar contaminadas o con cables eléctricos',
      'Regresa a casa solo cuando las autoridades lo indiquen',
      'Documenta los daños para el seguro',
      'Ten cuidado con escombros y estructuras dañadas',
      'Reporta cables caídos o fugas de gas inmediatamente',
      'Usa generadores solo en exteriores bien ventilados',
    ],
    keyFacts: [
      'Los huracanes se clasifican en categorías 1-5 según la escala de Saffir-Simpson',
      'La temporada de huracanes en el Atlántico es de junio a noviembre',
      'Las marejadas ciclónicas son la amenaza más mortal de un huracán',
      'Un huracán puede debilitarse pero aún causar inundaciones severas',
    ],
  },
  flood: {
    type: 'flood',
    name: 'Inundación',
    description:
      'Una inundación es el desbordamiento de agua sobre tierra normalmente seca. Pueden ocurrir en cuestión de minutos o desarrollarse a lo largo de días, siendo una de las amenazas naturales más comunes.',
    preparation: [
      'Conoce el riesgo de inundación de tu área',
      'Contrata un seguro contra inundaciones (el seguro de hogar normal no lo cubre)',
      'Desarrolla un plan de evacuación familiar',
      'Prepara un kit de emergencia en un lugar elevado',
      'Instala válvulas de retención para evitar que el agua entre por desagües',
      'Considera construir barreras para desviar el agua',
      'Mantén limpias las canaletas y desagües',
    ],
    duringEvent: [
      'Si te ordenan evacuar, hazlo de inmediato',
      'Muévete a terreno más elevado',
      'Nunca camines, nades o conduzcas a través de aguas de inundación',
      'Tan solo 15 cm de agua en movimiento pueden derribarte',
      '60 cm de agua pueden arrastrar tu vehículo',
      'Evita puentes sobre aguas que fluyen rápidamente',
      'Si quedas atrapado, ve al nivel más alto - nunca al ático sin salida al techo',
    ],
    afterEvent: [
      'Regresa solo cuando las autoridades digan que es seguro',
      'Evita el agua de inundación - puede estar contaminada',
      'Documenta los daños con fotografías',
      'No toques equipos eléctricos si están mojados o si estás en el agua',
      'Desecha alimentos que hayan estado en contacto con agua de inundación',
      'Ventila la casa y usa ventiladores para secar',
      'Verifica daños en la estructura antes de entrar',
    ],
    keyFacts: [
      'Las inundaciones son el desastre natural más común en el mundo',
      'Las inundaciones repentinas pueden ocurrir en minutos con poca o ninguna advertencia',
      'La mayoría de las muertes por inundación ocurren en vehículos',
      '"Turn Around, Don\'t Drown" - nunca cruces agua de inundación',
    ],
  },
  wildfire: {
    type: 'wildfire',
    name: 'Incendio Forestal',
    description:
      'Un incendio forestal es un fuego no controlado que se propaga rápidamente a través de vegetación y áreas naturales. Puede destruir hogares y hábitats, y generar humo peligroso.',
    preparation: [
      'Crea una zona de defensa alrededor de tu hogar de al menos 30 metros',
      'Usa materiales resistentes al fuego para techos y exteriores',
      'Mantén el césped corto y la vegetación bien podada',
      'Limpia hojas secas de canaletas, techos y terrazas',
      'Poda ramas de árboles a 2-3 metros del suelo',
      'Almacena leña y materiales inflamables lejos de la casa',
      'Ten mangueras de jardín largas conectadas',
      'Prepara un kit de evacuación de emergencia',
    ],
    duringEvent: [
      'Evacua inmediatamente si recibes la orden',
      'Cierra todas las ventanas y puertas, pero déjalas sin seguro',
      'Cierra persianas y cortinas de material no inflamable',
      'Retira muebles inflamables del centro de las habitaciones',
      'Cierra el gas y mueve muebles de exterior al interior',
      'Deja las luces encendidas para que tu casa sea visible en el humo',
      'Si quedes atrapado, llama al 911, quédate en tu casa en una habitación con agua',
      'Usa ropa de algodón o lana, evita sintéticos',
    ],
    afterEvent: [
      'Regresa solo cuando las autoridades lo declaren seguro',
      'Ten cuidado con brasas calientes y áreas humeantes',
      'Verifica tu techo y áreas ocultas en busca de chispas',
      'Usa una mascarilla N95 para protegerte del humo y cenizas',
      'Evita daños residuales como árboles dañados que puedan caer',
      'Documenta daños para el seguro',
      'Vigila la salud - el humo puede causar problemas respiratorios',
    ],
    keyFacts: [
      'Los incendios forestales pueden viajar hasta 23 km/h en bosques y hasta 90 km/h en pastizales',
      'El humo de incendios forestales puede viajar cientos de kilómetros',
      'La mayoría de los incendios forestales son causados por humanos',
      'Condiciones secas, vientos fuertes y bajas humedades aumentan el riesgo',
    ],
  },
  tsunami: {
    type: 'tsunami',
    name: 'Tsunami',
    description:
      'Un tsunami es una serie de olas oceánicas extremadamente largas causadas por un desplazamiento súbito de agua, generalmente por terremotos submarinos. Pueden causar devastación masiva en zonas costeras.',
    preparation: [
      'Si vives en una zona costera, conoce las rutas de evacuación a terreno elevado',
      'Familiarízate con las señales de advertencia de tsunami',
      'Prepara un kit de emergencia y un plan de evacuación',
      'Participa en simulacros de tsunami',
      'Aprende sobre la historia de tsunamis en tu área',
      'Ten un plan para mascotas y animales',
      'Identifica refugios en áreas elevadas',
    ],
    duringEvent: [
      'Si sientes un terremoto fuerte en la costa, dirígete a terreno elevado inmediatamente',
      'Si ves que el océano se retira inusualmente, es una señal natural - evacua inmediatamente',
      'Ante una alerta oficial de tsunami, evacua de inmediato a terreno elevado',
      'Aléjate al menos 3 km tierra adentro o a 30 metros de altura',
      'Si estás en un bote, dirígete mar adentro hacia aguas profundas',
      'No esperes a ver la ola - cuando la ves, es demasiado tarde',
      'Nunca vayas a la playa para ver un tsunami',
    ],
    afterEvent: [
      'Permanece en terreno elevado hasta que las autoridades declaren que es seguro',
      'Los tsunamis son series de olas - pueden llegar más olas durante horas',
      'Evita áreas inundadas y escombros',
      'Ten cuidado con aguas contaminadas',
      'Escucha actualizaciones oficiales',
      'Ayuda a personas heridas o atrapadas',
      'Regresa a casa solo cuando sea oficialmente seguro',
    ],
    keyFacts: [
      'Tsunami significa "ola del puerto" en japonés',
      'Las olas de tsunami pueden viajar a 800 km/h en aguas profundas',
      'Un tsunami puede tener olas de más de 30 metros de altura',
      'El 80% de los tsunamis ocurren en el Océano Pacífico',
      'Las olas siguientes pueden ser más grandes que la primera',
    ],
  },
  tornado: {
    type: 'tornado',
    name: 'Tornado',
    description:
      'Un tornado es una columna de aire que gira violentamente y se extiende desde una tormenta hasta el suelo. Los tornados pueden destruir completamente estructuras bien construidas, arrancar árboles y lanzar vehículos.',
    preparation: [
      'Identifica un refugio seguro: sótano, refugio antitornado o habitación interior sin ventanas',
      'Practica simulacros de tornado con tu familia',
      'Prepara un kit de emergencia en tu refugio',
      'Conoce las señales de advertencia: cielo verdoso, granizo grande, rugido fuerte',
      'Ten múltiples formas de recibir alertas meteorológicas',
      'Asegura objetos exteriores que puedan convertirse en escombros peligrosos',
      'Considera instalar un refugio antitornado',
    ],
    duringEvent: [
      'Dirígete inmediatamente a tu refugio seguro',
      'Si estás en casa: ve al sótano o habitación interior en el nivel más bajo',
      'Aléjate de ventanas, puertas y paredes exteriores',
      'Ponte debajo de algo resistente y protege tu cabeza y cuello',
      'Si estás en un edificio sin sótano, ve al pasillo central del piso más bajo',
      'Si estás en un vehículo, nunca intentes superar un tornado',
      'Si estás afuera sin refugio, acuéstate en una zanja o área baja y cubre tu cabeza',
      'En edificios móviles, evacua a un refugio robusto',
    ],
    afterEvent: [
      'Permanece donde estás hasta que sea seguro salir',
      'Ten cuidado con escombros y cables eléctricos caídos',
      'No toques cables caídos o objetos en contacto con ellos',
      'Verifica heridos y proporciona primeros auxilios',
      'Usa zapatos resistentes al caminar entre escombros',
      'Documenta los daños para el seguro',
      'Ten cuidado al entrar edificios dañados',
      'Escucha información oficial en la radio',
    ],
    keyFacts: [
      'Los tornados se clasifican en la escala EF de 0 a 5 según el daño',
      'Los vientos pueden exceder los 300 km/h en tornados EF5',
      'Estados Unidos tiene más tornados que cualquier otro país',
      'La mayoría de los tornados en EE.UU. ocurren en primavera y verano',
      '"Tornado Alley" en el centro de EE.UU. es particularmente propenso',
    ],
  },
};
