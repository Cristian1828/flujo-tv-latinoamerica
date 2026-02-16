export const site = {
  name: 'FLUJO TV',
  tagline: 'Todo tu entretenimiento en una sola app',
  domain: 'premium.flujooficial.com',
  url: 'https://premium.flujooficial.com',
  locale: 'es',
  whatsapp: '51914326729',
  whatsappLink: 'https://wa.me/51914326729',
  description:
    'Flujo TV: +3,000 canales en vivo, películas de estreno, series y deportes en 4K. La evolución de Magis TV para toda Latinoamérica. Sin contratos.',
};

export const stats = [
  { value: '3K+', label: 'Canales en Vivo' },
  { value: '15K+', label: 'Películas' },
  { value: '5K+', label: 'Series' },
  { value: '4K', label: 'Ultra HD' },
];

export const plans = [
  {
    id: 'mensual',
    name: '1 Mes',
    price: 9,
    period: '1 mes',
    duration: '30 días',
    tag: '',
    popular: false,
    bonus: '',
    features: [
      '+3,000 canales en vivo',
      'Películas y series on demand',
      'Calidad hasta 4K',
      'Hasta 3 pantallas',
      'Soporte por WhatsApp',
    ],
    cta: 'Quiero este plan',
    whatsappMsg: 'Hola, quiero contratar el plan de 1 mes de Flujo TV ($9 USD)',
  },
  {
    id: 'trimestral',
    name: '3 Meses',
    price: 27,
    period: '3 meses',
    duration: '90 días',
    tag: 'Recomendado',
    popular: false,
    bonus: '',
    features: [
      '+3,000 canales en vivo',
      'Películas y series on demand',
      'Calidad hasta 4K',
      'Hasta 3 pantallas',
      'Soporte prioritario',
    ],
    cta: 'Quiero este plan',
    whatsappMsg: 'Hola, quiero contratar el plan de 3 meses de Flujo TV ($27 USD)',
  },
  {
    id: 'semestral',
    name: '6 Meses',
    price: 49,
    period: '6 meses',
    duration: '7 meses total',
    tag: 'Más Popular',
    popular: true,
    bonus: '+1 Mes Gratis',
    features: [
      '+3,000 canales en vivo',
      'Películas y series on demand',
      'Calidad hasta 4K',
      'Hasta 3 pantallas',
      'Soporte VIP 24/7',
      '1 mes adicional gratis',
    ],
    cta: 'Elegir este plan',
    whatsappMsg: 'Hola, quiero contratar el plan de 6 meses de Flujo TV ($49 USD) con el mes extra gratis',
  },
  {
    id: 'anual',
    name: '12 Meses',
    price: 95,
    period: '12 meses',
    duration: '14 meses total',
    tag: 'Mejor Valor',
    popular: false,
    bonus: '+2 Meses Gratis',
    features: [
      '+3,000 canales en vivo',
      'Películas y series on demand',
      'Calidad hasta 4K',
      'Hasta 3 pantallas',
      'Soporte VIP 24/7',
      '2 meses adicionales gratis',
    ],
    cta: 'Aprovechar oferta',
    whatsappMsg: 'Hola, quiero contratar el plan de 12 meses de Flujo TV ($95 USD) con los 2 meses extra gratis',
  },
];

export const catalogItems = [
  {
    title: 'Películas',
    count: '+15,000 títulos',
    desc: 'Estrenos de Hollywood, cine latino, clásicos y más. Actualizado cada semana.',
    image: '/images/cat-movies.webp',
  },
  {
    title: 'Series',
    count: '+5,000 temporadas',
    desc: 'Temporadas completas de las series más populares. Sin esperar estrenos.',
    image: '/images/cat-series.webp',
  },
  {
    title: 'Deportes en Vivo',
    count: 'Fútbol, NBA, F1, UFC',
    desc: 'Todos los partidos, todas las ligas. En vivo y sin cortes.',
    image: '/images/cat-sports.webp',
  },
  {
    title: 'TV en Vivo',
    count: '+3,000 canales',
    desc: 'Canales de toda Latinoamérica, USA, España y más. Noticias, música, entretenimiento.',
    image: '/images/cat-live.webp',
  },
];

export const testimonials = [
  {
    name: 'Carlos M.',
    location: 'Bogotá, Colombia',
    text: 'Llevo 4 meses con Flujo TV y no he tenido un solo corte. Antes probé otros servicios y se caían cada rato. Esto es otro nivel.',
    image: '/images/client-01.webp',
    rating: 5,
  },
  {
    name: 'María S.',
    location: 'Lima, Perú',
    text: 'Lo que más me gusta es que el soporte responde al toque. Les escribí un domingo y en 5 minutos ya me habían solucionado todo.',
    image: '/images/client-02.webp',
    rating: 5,
  },
  {
    name: 'Diego R.',
    location: 'Santiago, Chile',
    text: 'El plan de 6 meses fue la mejor decisión. La calidad de imagen es brutal, sobre todo en el Fire Stick. Se ve mejor que el cable.',
    image: '/images/client-03.webp',
    rating: 5,
  },
  {
    name: 'Ana G.',
    location: 'Ciudad de México',
    text: 'Antes pagaba cable y era peor calidad. Ahora veo todo lo que quiero desde mi celular o en la tele con el TV Box. Súper recomendado.',
    image: '/images/client-04.webp',
    rating: 5,
  },
];

export const faqItems = [
  {
    question: '¿Qué es Flujo TV?',
    answer:
      'Flujo TV es la evolución de Magis TV. Es un servicio de streaming premium que te da acceso a más de 3,000 canales en vivo, películas, series y deportes en calidad hasta 4K. Funciona en dispositivos Android: celulares, tablets, TV Box, Fire Stick, Google TV y Xiaomi Stick.',
  },
  {
    question: '¿Tienen prueba gratis?',
    answer:
      'No manejamos pruebas gratuitas. Lo que sí garantizamos es soporte completo desde el momento de tu compra. Te acompañamos en la instalación y nos aseguramos de que todo funcione perfecto antes de dejarte solo. Si hay algún problema técnico, lo resolvemos.',
  },
  {
    question: '¿Funciona en Smart TV?',
    answer:
      'Algunos Smart TV usan sistemas cerrados y requieren un dispositivo externo. La solución es conectar un TV Box o Fire Stick por HDMI. Es fácil de instalar y te da acceso completo a Flujo TV en 4K.',
  },
  {
    question: '¿Cuántas pantallas puedo usar al mismo tiempo?',
    answer:
      'Hasta 3 pantallas simultáneas. Puedes ver en tu celular, en la tablet y en la TV al mismo tiempo sin problemas. Perfecto para compartir con tu familia.',
  },
  {
    question: '¿Qué velocidad de internet necesito?',
    answer:
      'Para calidad HD necesitas al menos 10 Mbps. Para 4K te recomendamos 20-30 Mbps. Si usas TV Box o Fire Stick, conectarlo por cable de red o tener buena señal Wi-Fi mejora mucho la experiencia.',
  },
  {
    question: '¿Cómo realizo el pago?',
    answer:
      'Todo se gestiona por WhatsApp. Aceptamos PayPal, transferencias bancarias y otros métodos según tu país. Es rápido y seguro. Una vez confirmado el pago, activamos tu cuenta en minutos.',
  },
  {
    question: '¿Puedo cancelar cuando quiera?',
    answer:
      'Sí. No hay contratos ni permanencia. Pagas el tiempo que elijas y listo. Si no quieres renovar, simplemente no lo haces. Sin costos ocultos ni penalidades.',
  },
  {
    question: '¿En qué dispositivos funciona?',
    answer:
      'Flujo TV funciona exclusivamente en dispositivos Android: celulares, tablets, TV Box, Fire Stick, Google TV y Xiaomi Stick.',
  },
];
