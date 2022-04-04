const enlacesNavbar = [
  {
    nombre: 'Inicio',
    path: '/',
    button: false,
    claseIcono: 'fas fa-home',
  },
  {
    nombre: 'Nosotros',
    path: '/nosotros',
    button: false,
    claseIcono: 'fas fa-users',
  },
  {
    nombre: 'Servicios',
    path: '/servicios',
    button: false,
    claseIcono: 'fas fa-lock',
  },
  {
    nombre: 'Contacto',
    path: '/contacto',
    button: false,
    claseIcono: 'fas fa-envelope',
  },
];

const beneficiosNosotros = [
  {
    titulo: '¿Quieres mantener seguras tus propiedades?',
    texto:
      'Nosotros somos la solución. Nuestros servicios de seguridad de propiedades te ayudarán a mantener tus propiedades seguras las 24 horas.',
  },
  {
    titulo: 'Ahorra dinero con nosotros',
    texto:
      'El dinero que gastas en seguridad de propiedades es la mejor inversión que puedes hacer',
  },
  {
    titulo: 'Olvídate de intereses',
    texto:
      'No estamos interesados en cobrar intereses por el dinero que gastas en seguridad de propiedades. No te preocupes, puedes cancelar el contrato cuando quieras.',
  },
];

const textoNosotros = {
  titulo: 'Sobre',
  destacado: 'Nosotros',
  parrafo:
    'Seguros H&H es una compañía de capital 100% venezolano, conformada por un grupo de accionistas de dilatada y sólida experiencia en el mercado asegurador. ',
  descripcion:
    'Convencidos de las grscandes oportunidades de negocios que existen en nuestro país. Estamos comprometidos con el cumplimiento de nuestros principios éticos y organizacionales, y confiamos plenamente en el potencial que nos ofrece esta tierra de gracia, para seguir creando valor en beneficio de la comunidad y de todos los que forman parte de la familia de Seguros H&H',
  iconoBoton: 'fas fa-arrow-right',
  btnInfo: 'Conoce más',
  informacion: [
    {
      icono: 'fas fa-arrow-up',
      texto:
        'Desde que la compañía fue relanzada el 26 de abril de 2011, nuestro principal objetivo ha sido desarrollar productos y servicios de altísima calidad.',
    },
    {
      icono: 'fas fa-dollar-sign',
      texto:
        'Nos destacamos por nuestros precios, inigualables en el mercado y con una calidad insuperable.',
    },
    {
      icono: 'fas fa-users',
      texto:
        'Nuestra empresa cuenta con un equipo de profesionales altamente calificados, que se encargan de brindarle un servicio de calidad y de una atención personalizada.',
    },
  ],
};
const textosBenficiosInfo = {
  tituloDestacado: 'Beneficios de trabajar con nosotros',
  titulo: 'Ahorra dinero, protege tus bienes',
  parrafo:
    'Con Seguros H&H podrás tener el respaldo y la confianza de que tus bienes se encuentran con el mejor aliado cuando de seguridad se trata.',
};
const titulos = {
  titulo: 'Manten seguro tus bienes con Seguros H&H',
  subtitulo:
    'Tener el mejor respaldo para tus bienes nunca fue tan fácil. Forma parte de nuestra familia',
};
const btnInfo = {
  accion: {
    link: '/nosotros',
    titulo: 'Conoce más',
  },
  principal: {
    link: '/contacto',
    titulo: 'Contáctanos',
    icono: 'fas fa-paper-plane',
  },
};
const servicios = [
  {
    titulo: 'Servicios especial para autos',
    icono: 'fas fa-car',
    descripcion:
      'Seguros  ofrece una excelente alternativa a través de su Póliza de Automóvil, brindando coberturas que se adaptan a sus necesidades, amparando pérdidas parciales o totales que pudieran ocurrir de manera imprevista, junto a los servicios que complementan la póliza para una mayor protección.',
  },
  {
    titulo: 'Servicios para personas',
    icono: ' fas fa-user-friends',
    descripcion:
      'Seguros H&H brinda productos dirigidos a cubrir los riesgos que puedan afectar la integridad corporal o la salud de sus asegurados, bajo la modalidad de pólizas de seguro Individual o Colectiva.',
  },
  {
    titulo: 'Servicio de fianzas',
    icono: 'fas fa-hand-holding-usd',
    descripcion:
      'En Seguros H&H ofrecemos el respaldo que permite asegurar el cumplimiento de obligaciones adquiridas entre partes que -por su actividad- celebren contratos que ameriten ser garantizados a través de nuestros diferentes tipos de Fianza. Apoyamos su proyecto brindándole el asesoramiento profesional necesario, para determinar qué tipo de fianza se ajusta a sus necesidades.',
  },
];

const serviciosTitulo = {
  titulo: 'Nuestros',
  destacado: 'Servicios',
  parrafo:
    'Seguros H&H es una compañía de capital 100% venezolano, conformada por un grupo de accionistas de dilatada y sólida experiencia en el mercado asegurador. Conocer nuestros servicios es una de las mejores maneras de asegurar tus bienes.',
};
const tituloServicios = {
  titulo: 'Conoce nuestros servicios',
  subtitulo:
    'Optimizamos su tiempo, al atender tus necesidades con mayor rapidez. Conoce nuestros servicios. ',
};
const accionInformacion = {
  titulo: 'Disfruta de todos nuestros beneficios',
  subtitulo:
    'Forma parte de nuestra familia, cada día más personas forman parte de nosotros y confían en nuestros servicios. Si eres un cliente nuevo de Seguros H&H, te invitamos a que te nos contactes y te ayudemos a encontrar la mejor alternativa a tus necesidades.',
  tituloBoton: '¡Contáctanos!',
  path: '/contacto',
  iconoBoton: 'fas fa-paper-plane',
};
const suscripcionInformacion = {
  titulo: '¡Suscríbete y recibe las mejores ofertas',
  subtitulo: 'Recibe nuestras noticias y promociones en tu correo electrónico.',
};
const informacionNosotrosLayout3 = {
  titulo: 'Nuestra',
  textoDestacado: 'Misión',
  subtitulo:
    'Somos una organización comprometida por siempre, consciente de la dinámica del entorno para ofrecer a nuestros Socios Comerciales alternativas de protección, con un amplio sentido de responsabilidad social.',
  texto:
    'Construiremos una empresa moderna con eficiencia y rentabilidad compartida, basada en el compromiso y felicidad de nuestros Socios Comerciales.',
  imagen: require('@/assets/img/nosotros2.jpg'),
};
const titulosNosotros = {
  titulo: 'Conócenos',
  subtitulo:
    'Seguros H&H convencidos de las grandes oportunidades de negocios que existen en nuestro país.',
};
const tituloContacto = {
  titulo: 'Contáctanos',
  subtitulo:
    'Si tienes alguna duda o quieres reservar un plan, por favor llena el siguiente formulario y nos comunicaremos contigo lo más pronto posible.',
}
const textosBenficiosNosotros = {
  titulo: 'Conoce nuestros',
  tituloDestacado: 'Valores & Beneficios',
};

const valoresNosotros = [
  {
    titulo: 'Eficiencia',
    texto:
      'Administramos los recursos con inteligencia. Nos enfocamos en crear valor. Hacemos cosas sencillas, pero eficientes. Funcionamos con una visión adecuada de los costos, tiempo y calidad. Colaboramos para obtener mejores soluciones de negocios.',
  },
  {
    titulo: 'Lealtad',
    texto:
      'Cumplimos con nuestro compromiso de apoyar a nuestros Socios Comerciales, clientes y aliados de servicios en todo momento. Ofrecemos nuestro apoyo incondicional a todos aquellos que han confiado en nosotros.',
  },
  {
    titulo: 'Trabajo en Equipo',
    texto:
      'trabajamos de manera coordinada para lograr los objetivos de la organización, de crear valor para los accionistas y brindar atención personalizada a los Socios Comerciales.',
  },
];
const serviciosCompletos = [
  {
    titulo: 'Servicios especial para autos',
    icono: 'fas fa-car',
    descripcion:
      'Seguros  ofrece una excelente alternativa a través de su Póliza de Automóvil, brindando coberturas que se adaptan a sus necesidades, amparando pérdidas parciales o totales que pudieran ocurrir de manera imprevista, junto a los servicios que complementan la póliza para una mayor protección.',
  },
  {
    titulo: 'Servicios para personas',
    icono: ' fas fa-user-friends',
    descripcion:
      'Seguros H&H brinda productos dirigidos a cubrir los riesgos que puedan afectar la integridad corporal o la salud de sus asegurados, bajo la modalidad de pólizas de seguro Individual o Colectiva.',
  },
  {
    titulo: 'Servicios patrimoniales',
    icono: 'fas fa-building',
    descripcion:
      'Seguros H&H pone a su disposición las Pólizas de Seguros Patrimoniales, dirigidas a cubrir los riesgos que puedan afectar los bienes cubiertos por los distintos productos que se ofrecen.',
  },
  {
    titulo: 'Servicios de vida',
    icono: 'fas fa-heartbeat',
    descripcion:
      'Seguros H&H ofrece el resguardo a los familiares en caso de fallecimiento del asegurado titular; ya sea por causa natural o por accidente. Además, brinda coberturas de Gastos Médicos, Gastos de Funerario, Gastos de Sepelio, Gastos de Maternidad, Flexibilización de los exámenes solicitados según la suma asegurada y la edad.',
  },
  {
    titulo: 'Servicios odontológicos',
    icono: 'fas fa-tooth',
    descripcion:
      'Asistencia odontológica a escala nacional, ofrecida para atender y preservar la salud bucal, a través de consultas y tratamientos odontológico. Tambien incluye consultas para la prevención de enfermedades a partir de menores de 15 años.',
  },
  {
    titulo: 'Servicio de asistencia en viajes',
    icono: 'fas fa-plane',
    descripcion:
      'Seguros H&H ofrece servicios de asistencia en viajes, con la finalidad de cubrir los costos de viaje, así como cubrir los costos de hospitalización y repatriación. Tambien ofrecemos cobertura a escala nacional incluyendo zona fronteriza.',
  },
];

const equipoArray = [
  {
    foto: require('@/assets/img/equipo-1.jpg'),
    nombre: 'Luis Alejandro',
    rol: 'Gerente de negocio',
  },
  {
    foto: require('@/assets/img/equipo-2.jpg'),
    nombre: 'Jorge Rojas',
    rol: 'Director de administración',
  },
];
const informacionEquipo = {
  titulo: 'Conoce nuestros',
  destacado: 'Fundadores',
  texto:
    'Conoce a nuestros fundadores y sus respectivas carreras. Cada uno de ellos ha sido uno de los protagonistas de nuestra historia en Seguros H&H.',
};
const informacionPrecios = {
  titulo: ' Ofertas en',
  destacado: 'Seguros de calidad!',
  subtitulo:
    'Seguros H&H ofrece una amplia variedad de productos de seguros, con precios accesibles y con coberturas de excelente calidad.',
};
const planesInformacion = [
  {
    titulo: 'Básico Seguro H&H',
    precio: '50',
    informacion: [
      {
        titulo: 'Servicio de Coberturas 24/7',
        servicioDisponible: true,
      },
      {
        titulo: 'Servicio de talleres a nivel nacional',
        servicioDisponible: true,
      },
      {
        titulo: 'Servicio de vida con ciertas condiciones',
        servicioDisponible: true,
      },
      {
        titulo: 'No cuenta con servicio de asistencia en viajes',
        servicioDisponible: false,
      },
      {
        titulo: 'No incluye seguros para niños',
        servicioDisponible: false,
      },
      {
        titulo: 'No aplica vigilancia satelital',
        servicioDisponible: false,
      },
    ],
    esPremium: false,
  },
  {
    titulo: 'Premium Seguro H&H',
    precio: '200',
    informacion: [
      {
        titulo: 'Todos los servicios de la versión básica',
        servicioDisponible: true,
      },
      {
        titulo: 'Accidente de transporte & Escolares',
        servicioDisponible: true,
      },
      {
        titulo: 'Servicio de Salud, Vida & Gastos funerarios',
        servicioDisponible: true,
      },
      {
        titulo: 'Cuenta con respaldo de salud las 24HRS',
        servicioDisponible: true,
      },
      {
        titulo: 'Seguros para niños desde 0 a 18 años de edad',
        servicioDisponible: true,
      },
      {
        titulo: 'Vigilancia satelital en todo el país & mucho más',
        servicioDisponible: true,
      },
    ],
    esPremium: true,
  },
];
const informacionContacto = {
  titulo: 'Reserva tu',
  destacado: 'Seguro',
  texto:
    'Para mayor información, dudas o comentarios sobre alguno de nuestros productos y servicios, puedes comunicarte con nosotros llenando el siguiente formulario de contacto o a través de los siguientes datos de contacto.',
  direccion:
    'Av. Tamanaco del Rosal, Edificio Centro Empresarial El Rosal, Piso 9-10, Oficina 9-10. Urbanización El Rosal, Lecheria, Anzoátegui.',
  email: 'centrodecontacto@segurosh.com',
  numero: 'Centro de Contacto +58 (212) 655.31.00. Opción 4',
};
const informacionPreguntas = {
  titulo: 'Preguntas frecuentes',
  destacado: 'en Seguros H&H',
  texto:"En esta sección responderemos a las preguntas más comunes dudas sobre nuestros productos y servicios. Si tienes alguna duda, puedes comunicarte con nosotros a través de nuestro centro de contacto o enviandonos un email.",
}
const preguntas = [
  {
    titulo: '¿Qué es Seguros H&H?',
    respuesta:"Seguros H&H es una compañía de capital 100% venezolano, conformada por un grupo de accionistas de dilatada y sólida experiencia en el mercado asegurador. Nuestra misión es ofrecer a nuestros clientes una amplia gama de productos y servicios de seguros, con precios accesibles y con coberturas de excelente calidad.",
  },
  {
    titulo: '¿Cómo puedo hacer una solicitud de seguro?',
    respuesta:"Para hacer una solicitud de seguro, debes contar con el número de identificación y el número de seguro (NSS) o contraseña de tu tarjeta de crédito. Si no tienes una tarjeta de crédito, puedes solicitar un seguro con una tarjeta de débito. Si tienes una tarjeta de crédito, puedes solicitar un seguro con la tarjeta de crédito. Una vez que recibimos tu solicitud, nos pondremos en contacto contigo para informarte sobre el estado de tu solicitud. En caso de que la solicitud sea aceptada, recibirás un correo electrónico de confirmación de la misma Debes tener una cuenta con nosotros."
  },
  {
    titulo: '¿Cómo puedo cancelar mi seguro?',
    respuesta:"No es necesario realizar un tramite legal extenso, cuando tu lo desees agendamos una cita y te damos tu dinero invertido (sujeto a condiciones)."
  },
  {
    titulo: '¿Cómo puedo cambiar el seguro que me han otorgado?',
    respuesta:"Si quieres cambiar el seguro que te han otorgado, debes comunicate con nosotros a través de nuestro centro de contacto o enviandonos un email."
  },
  {
    titulo: '¿Dónde estamos ubicados?',
    respuesta:"Estamos ubicados en Lechera, Anzoátegui, Venezuela."
  },
  {
    titulo: '¿Cómo puedo hacer una reserva?',
    respuesta:"Para hacer una reserva, debes registrarte en nuestra web. Con ellos valideremos tus datos y nos comúnicaremos contigo, si quieres el servicio express, debes comunicarte con nosotros a través de nuestro centro de contacto o enviandonos un email."
  },
]
export {
  enlacesNavbar,
  beneficiosNosotros,
  textoNosotros,
  textosBenficiosInfo,
  titulos,
  btnInfo,
  servicios,
  serviciosTitulo,
  accionInformacion,
  suscripcionInformacion,
  informacionNosotrosLayout3,
  titulosNosotros,
  textosBenficiosNosotros,
  valoresNosotros,
  serviciosCompletos,
  equipoArray,
  informacionEquipo,
  informacionPrecios,
  planesInformacion,
  informacionContacto,
  tituloServicios,
  tituloContacto,
  informacionPreguntas,
  preguntas
};
