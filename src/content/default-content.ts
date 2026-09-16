import type { SiteContent } from './site-content-types'
import { avisoLegalBody, privacidadBody, cookiesBody } from './legal-content'

const navLinks = [
  { label: 'Qué hacemos', href: '#que-hacemos' },
  { label: 'Precios orientativos', href: '#precios' },
  { label: 'Nuestro equipo', href: '#equipo' },
  { label: 'Preguntas frecuentes', href: '#faq' },
]

export const defaultContent: SiteContent = {
  meta: {
    title: 'Banco de Alimentos Comarcal · Valparaíso',
    description:
      'Banco de alimentos comarcal en Valparaíso: recogida, almacenamiento y distribución de alimentos a personas y familias en situación de vulnerabilidad. Contacta con nosotros.',
  },
  header: {
    logo: '/images/logo.webp',
    logoAlt: 'Banco de Alimentos Comarcal · Valparaíso',
    navLinks,
    ctaLabel: 'Contactar',
  },
  hero: {
    eyebrow: 'SOLIDARIDAD QUE ALIMENTA',
    title: 'Juntos llevamos alimentos a quienes más lo necesitan',
    paragraph:
      'Somos un banco de alimentos comarcal en Valparaíso. Recogemos, almacenamos y distribuimos alimentos a personas y familias en situación de vulnerabilidad de nuestra comarca.',
    ctaLabel: 'Contactar',
    badges: [
      { icon: '/images/icon-equipo-comprometido.webp', label: 'Personas reales' },
      { icon: '/images/icon-lote-completo.webp', label: 'Alimentos reales' },
      { icon: '/images/icon-heart.webp', label: 'Un mismo propósito' },
    ],
    image: '/images/hero.webp',
    imageAlt: 'Voluntariado del banco de alimentos preparando cajas con productos frescos',
    imageCaption: 'Juntos llegamos más lejos',
  },
  services: {
    eyebrow: 'NUESTRA LABOR, CADA DÍA',
    title: 'Qué hacemos',
    subtitle:
      'Trabajamos para que ninguna persona ni familia de nuestra comarca se quede sin alimentos. Para ello, ofrecemos:',
    items: [
      {
        icon: '/images/icon-recogida.webp',
        title: 'Recogida de alimentos',
        description: 'Recibimos donaciones de empresas, entidades y particulares.',
      },
      {
        icon: '/images/icon-almacenamiento.webp',
        title: 'Almacenamiento',
        description: 'Conservamos los alimentos en óptimas condiciones, respetando su calidad.',
      },
      {
        icon: '/images/icon-distribucion.webp',
        title: 'Distribución',
        description: 'Entregamos los alimentos a entidades sociales y familias de la comarca.',
      },
      {
        icon: '/images/icon-apoyo-entidades.webp',
        title: 'Apoyo a entidades',
        description: 'Colaboramos con asociaciones y servicios sociales de Valparaíso.',
      },
      {
        icon: '/images/icon-sensibilizacion.webp',
        title: 'Sensibilización',
        description: 'Generamos conciencia sobre la importancia de la solidaridad.',
      },
    ],
  },
  pricing: {
    eyebrow: 'PRECIOS ORIENTATIVOS',
    title: 'Precios orientativos de nuestros servicios',
    subtitle:
      'Estos precios son orientativos y pueden variar en función de la cantidad, el tipo de alimento y la entidad solicitante.',
    ctaLabel: 'Contactar para más información',
    items: [
      {
        icon: '/images/icon-lote-basico.webp',
        name: 'Lote básico',
        description: 'Alimentos no perecederos',
        price: 'desde 10 €',
        weight: '(aprox. 10 kg)',
      },
      {
        icon: '/images/icon-lote-frutas-verduras.webp',
        name: 'Lote de frutas y verduras',
        description: 'Productos frescos',
        price: 'desde 15 €',
        weight: '(aprox. 15 kg)',
      },
      {
        icon: '/images/icon-lote-infantil.webp',
        name: 'Lote infantil',
        description: 'Productos específicos',
        price: 'desde 12 €',
        weight: '(aprox. 8 kg)',
      },
      {
        icon: '/images/icon-lote-completo.webp',
        name: 'Lote completo',
        description: 'Alimentación variada',
        price: 'desde 25 €',
        weight: '(aprox. 20 kg)',
      },
    ],
    disclaimer: 'Precios orientativos. Consultar disponibilidad y condiciones.',
  },
  team: {
    title: 'Personas que hacen posible nuestro trabajo',
    paragraph:
      'Un equipo de personas voluntarias y profesionales comprometidas con nuestra comunidad. Trabajamos cada día con ilusión, transparencia y cercanía.',
    ctaLabel: 'Conoce a nuestro equipo',
    image: '/images/team.webp',
    imageAlt: 'Equipo de voluntariado del Banco de Alimentos Comarcal sonriendo en el almacén',
  },
  trust: {
    title: 'La confianza también se construye con el tiempo',
    items: [
      {
        icon: '/images/icon-anos-experiencia.webp',
        title: 'Años de experiencia',
        description: 'Llevamos años trabajando en la comarca.',
      },
      {
        icon: '/images/icon-equipo-comprometido.webp',
        title: 'Equipo comprometido',
        description: 'Voluntarios y profesionales que dan lo mejor de sí.',
      },
      {
        icon: '/images/icon-opiniones.webp',
        title: 'Opiniones de quienes nos conocen',
        description: 'La satisfacción de las personas a las que ayudamos nos impulsa.',
      },
    ],
  },
  faq: {
    eyebrow: 'RESOLVEMOS LAS DUDAS MÁS HABITUALES',
    title: 'Preguntas frecuentes',
    subtitle: 'Si tienes otra duda, escríbenos desde el formulario de contacto.',
    image: '/images/faq.webp',
    imageAlt: 'Caja de alimentos donados junto a una pizarra con el texto Preguntas frecuentes',
    items: [
      {
        question: '¿Quién puede recibir ayuda alimentaria?',
        answer:
          'Personas y familias en situación de vulnerabilidad de la comarca, derivadas habitualmente por los servicios sociales o entidades colaboradoras. Si es tu caso, contacta con nosotros y te orientamos sobre los pasos a seguir.',
      },
      {
        question: '¿Cómo puedo hacer una donación?',
        answer:
          'Puedes donar alimentos no perecederos directamente en nuestro almacén, o coordinar una recogida si tienes una cantidad importante (empresas, comercios, eventos). Escríbenos desde el formulario y te decimos cómo.',
      },
      {
        question: '¿Qué tipo de alimentos necesitáis?',
        answer:
          'Priorizamos alimentos no perecederos (conservas, legumbres, pasta, arroz, aceite) y, cuando es posible, también fruta y verdura fresca. Consúltanos las necesidades del momento antes de donar.',
      },
      {
        question: '¿Cómo puedo hacerme voluntario/a?',
        answer:
          'Contacta con nosotros indicando "Voluntariado" como motivo en el formulario y te contamos los turnos disponibles y cómo empezar.',
      },
      {
        question: '¿Trabajáis solo en Valparaíso?',
        answer:
          'Nuestro trabajo se centra en Valparaíso y su comarca. Si nos escribes desde otra zona, te orientamos hacia la entidad más cercana que pueda ayudarte.',
      },
    ],
  },
  contact: {
    eyebrow: '¿TIENES ALGUNA PREGUNTA?',
    title: 'Ponte en contacto',
    subtitle:
      'Si quieres colaborar, resolver una duda o necesitas más información, escríbenos. Te responderemos en la mayor brevedad posible.',
    form: {
      nameLabel: 'Nombre y apellidos',
      phoneLabel: 'Teléfono',
      emailLabel: 'Correo electrónico',
      reasonLabel: 'Motivo de contacto',
      reasonOptions: [
        'Solicitar ayuda alimentaria',
        'Hacer una donación',
        'Voluntariado',
        'Colaboración con una entidad',
        'Otro',
      ],
      messageLabel: 'Mensaje (opcional)',
      consentLabel: 'He leído y acepto la Política de privacidad',
      submitLabel: 'Enviar solicitud',
      successTitle: '¡Solicitud enviada!',
      successMessage: 'Gracias por escribirnos. Te responderemos en la mayor brevedad posible.',
      errorMessage: 'No hemos podido enviar tu solicitud. Inténtalo de nuevo en unos minutos.',
    },
    info: {
      addressTitle: '¿Dónde estamos?',
      address: 'Calle Solidaridad, 12\n38300 Valparaíso',
      addressIcon: '/images/icon-ubicacion.webp',
      hoursTitle: 'Horario',
      hours: 'Lunes a viernes\n9:00 – 14:00',
      hoursIcon: '/images/icon-horario.webp',
      mapImage: '/images/map-valparaiso.webp',
      mapImageAlt: 'Mapa de Valparaíso con la ubicación del Banco de Alimentos Comarcal',
      mapCaption: 'Tu apoyo llega muy lejos',
    },
  },
  footer: {
    logo: '/images/logo.webp',
    logoAlt: 'Banco de Alimentos Comarcal · Valparaíso',
    links: [
      { label: 'Aviso legal', href: '/aviso-legal' },
      { label: 'Política de privacidad', href: '/politica-privacidad' },
      { label: 'Política de cookies', href: '/politica-cookies' },
    ],
    socialLinks: [
      { label: 'Facebook', href: '#' },
      { label: 'Instagram', href: '#' },
    ],
  },
  cookieBanner: {
    message:
      'Usamos cookies técnicas necesarias para que la web funcione correctamente. No usamos cookies de publicidad.',
    acceptLabel: 'Aceptar',
    rejectLabel: 'Rechazar',
  },
  legal: {
    avisoLegal: { title: 'Aviso legal', body: avisoLegalBody },
    privacidad: { title: 'Política de privacidad', body: privacidadBody },
    cookies: { title: 'Política de cookies', body: cookiesBody },
  },
}
