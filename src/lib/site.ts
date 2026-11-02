export const studio = {
  name: "Nancy Vara",
  role: "Contadora Pública",
  credential: "F242 T452 CPCECABA",
  university: "Universidad Nacional de Tres de Febrero",
  email: "cpnancyvara@gmail.com",
  phoneDisplay: "+54 11 2400-1627",
  whatsapp: "https://wa.me/541124001627",
  instagram: "https://instagram.com/nancygvara",
  facebook: "https://www.facebook.com/profile.php?id=100092194896400",
};

export const nav = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/blog", label: "Blog" },
  { href: "/como-consultar", label: "Cómo consultar" },
  { href: "/contacto", label: "Contacto" },
  { href: "/quienes-somos", label: "Quiénes somos" },
];

export type Rich =
  | { kind: "p"; text: string }
  | { kind: "h"; text: string }
  | { kind: "ul"; items: string[] }
  | { kind: "img"; src: string; alt: string };

export type Service = {
  slug: string;
  title: string;
  category: "Impuestos" | "Análisis financiero";
  tagline: string;
  image: string;
  summary: string;
  paragraphs: string[];
  points: string[];
};

export const defaultServices: Service[] = [
  {
    slug: "gestion-de-monotributo",
    title: "Gestión de Monotributo",
    category: "Impuestos",
    tagline: "Tu tranquilidad fiscal, nuestra responsabilidad.",
    image: "/images/impuestos.jpg",
    summary:
      "Alta en AFIP, controles mensuales de ingresos y gastos, y asesoría personalizada para que te concentres en crecer.",
    paragraphs: [
      "¿Necesitás tranquilidad con tu Monotributo?",
      "Este servicio está diseñado para profesionales, emprendedores y trabajadores independientes que quieren enfocarse en hacer crecer su negocio sin preocuparse por trámites y controles fiscales.",
      "Con este servicio ganás seguridad, tiempo y la tranquilidad de saber que tu situación fiscal está en buenas manos.",
      "Dejá que nosotros nos ocupemos de tu Monotributo, para que vos te concentres en crecer.",
    ],
    points: [
      "Alta del impuesto: inscripción en AFIP de manera rápida y segura, evitando errores que puedan generar inconvenientes futuros.",
      "Controles mensuales de ingresos y gastos, para verificar que tus movimientos estén dentro de la categoría correcta.",
      "Asesoramiento personalizado, con recomendaciones claras para mantener el Monotributo siempre al día.",
      "Recordatorios de vencimientos.",
      "Recategorizaciones semestrales.",
    ],
  },
  {
    slug: "convenio-multilateral",
    title: "Convenio Multilateral",
    category: "Impuestos",
    tagline: "Tu negocio en todo el país, con impuestos al día.",
    image: "/images/consulta.jpg",
    summary:
      "Alta, liquidaciones mensuales y asesoría para distribuir Ingresos Brutos entre las provincias donde operás.",
    paragraphs: [
      "El Convenio Multilateral es la herramienta que regula cómo se distribuyen tus impuestos entre las distintas jurisdicciones. Sin una gestión adecuada, podés enfrentar inconsistencias, multas o pagos de más.",
      "Con la gestión de Convenio Multilateral te asegurás de cumplir correctamente con todas tus obligaciones fiscales, sin complicaciones.",
      "Tu negocio puede crecer en distintas provincias mientras nosotros nos ocupamos de la parte fiscal.",
      "Expandí tu negocio en todo el país: nosotros nos ocupamos de tu Convenio Multilateral.",
    ],
    points: [
      "Alta en Convenio Multilateral: inscripción en el sistema y ordenamiento de tu situación fiscal.",
      "Liquidaciones mensuales: cálculos y declaraciones juradas de cada provincia donde operás.",
      "Control de ingresos y gastos por jurisdicción, para que la distribución de impuestos sea justa y precisa.",
      "Asesoramiento personalizado para resolver dudas y evitar sanciones.",
      "Recordatorios de vencimientos.",
    ],
  },
  {
    slug: "regimen-general",
    title: "Régimen General",
    category: "Impuestos",
    tagline: "Cumplí con ARCA de forma simple y segura.",
    image: "/images/caja.jpg",
    summary:
      "Liquidación de IVA e Ingresos Brutos, con declaraciones mensuales para autónomos y pymes.",
    paragraphs: [
      "Ofrecemos un servicio integral para la liquidación de IVA e Ingresos Brutos de tu comercio, asegurando que todas tus declaraciones se presenten correctamente y a tiempo ante el fisco.",
      "Nos encargamos de calcular el IVA correspondiente, preparar la declaración jurada y cargarla en el sistema IVA SIMPLE de ARCA. También de Ingresos Brutos local o Convenio Multilateral si vendés en más de una jurisdicción, para que puedas centrarte en lo que realmente importa: hacer crecer tu negocio.",
      "Confiá en nosotros para cumplir con tus obligaciones fiscales sin estrés.",
    ],
    points: [
      "Cálculo y presentación del IVA en IVA SIMPLE de ARCA.",
      "Ingresos Brutos local o Convenio Multilateral, según las jurisdicciones en las que operás.",
      "Declaraciones mensuales en tiempo y forma para autónomos y pymes.",
    ],
  },
  {
    slug: "balances",
    title: "Balances",
    category: "Impuestos",
    tagline: "Estados contables con normas unificadas argentinas.",
    image: "/images/balances.jpg",
    summary:
      "Elaboración de estados contables con referencia a la Resolución Técnica Nº 54 (T.O. RT 59).",
    paragraphs: [
      "Elaboración de estados contables con referencia a la Resolución Técnica Nº 54 (T.O. RT 59), Normas Unificadas Argentinas de Contabilidad.",
    ],
    points: [
      "Estados contables preparados con referencia a la RT 54 (texto ordenado por la RT 59).",
      "Una base ordenada para socios, bancos y organismos que piden información contable.",
    ],
  },
  {
    slug: "analisis-financiero",
    title: "Análisis financiero de estados contables",
    category: "Análisis financiero",
    tagline: "Claridad para decidir cómo crece tu empresa.",
    image: "/images/hero.jpg",
    summary:
      "Lectura profesional de tus estados financieros para detectar liquidez, solvencia y desempeño operativo.",
    paragraphs: [
      "Optimizá la gestión y las decisiones de tu negocio con un análisis exhaustivo y profesional de tus estados financieros. El servicio te proporciona una visión clara de la salud financiera de tu empresa.",
    ],
    points: [
      "Identificación de áreas críticas: detectá a tiempo problemas de liquidez o solvencia.",
      "Toma de decisiones fundamentada: claridad sobre crecimiento, reinversión o expansión.",
      "Evaluación del desempeño operativo, usando el EBITDA para comparar y leer la salud financiera.",
    ],
  },
  {
    slug: "flujo-de-caja",
    title: "Flujo de caja: la vitalidad de tu negocio",
    category: "Análisis financiero",
    tagline: "El pulso real de la liquidez de tu pyme.",
    image: "/images/caja.jpg",
    summary:
      "Escenarios para anticipar la caja, planificar y mostrar capacidad de pago.",
    paragraphs: [
      "El flujo de caja es el pulso que muestra cómo evoluciona la liquidez de tu pyme o emprendimiento día a día, semana a semana o mes a mes. No es solo el balance final, sino la capacidad real de tu negocio para operar.",
      "Convertí esta herramienta de gestión en tu realidad. Escribinos para realizar el flujo de caja y asegurar el control de tu futuro financiero.",
    ],
    points: [
      "Evita quedarte sin efectivo justo cuando más lo necesitás, aunque las ventas vayan bien.",
      "Te permite anticiparte a problemas o déficits de liquidez con tiempo.",
      "Es clave para la planificación estratégica: operación, inversión y financiamiento.",
      "La banca lo evalúa para darte financiamiento, mirando tu capacidad de generar caja real y la cobertura de deuda.",
    ],
  },
  {
    slug: "ingresos-brutos-sircreb",
    title: "Liquidación de Ingresos Brutos y corrección de SIRCREB",
    category: "Impuestos",
    tagline: "Pagá solo lo justo y liberá el capital retenido de más.",
    image: "/images/impuestos.jpg",
    summary:
      "Declaraciones de IIBB y gestión para reducir retenciones bancarias que no corresponden.",
    paragraphs: [
      "El crecimiento de tus ventas se traduce en más ingresos y en más trámites impositivos. El impuesto a los Ingresos Brutos, fundamental para operar legalmente, suele venir acompañado de un dolor de cabeza: las retenciones bancarias (SIRCREB).",
      "El SIRCREB es un sistema por el cual el banco te retiene automáticamente un porcentaje de cada transferencia o depósito que recibís en tu cuenta. Es un anticipo de tus Ingresos Brutos. El problema es que este sistema a menudo comete errores o aplica alícuotas que no corresponden a tu actividad o jurisdicción.",
      "Eso se traduce en retenciones excesivas —te sacan mucho más dinero del que realmente deberías pagar— y en saldos a favor acumulados: dinero retenido que no podés usar y que el fisco te debe, afectando tu flujo de caja.",
      "No dejes que las retenciones erróneas congelen tu capital. Consultanos para auditar tu situación impositiva y empezar a pagar lo justo.",
    ],
    points: [
      "Liquidación de Ingresos Brutos local: cálculo y presentación de la declaración jurada mensual.",
      "Identificación de errores: revisión de lo que retiene el banco frente a lo que legalmente corresponde.",
      "Trámite de reducción o exclusión de retenciones excesivas ante los organismos provinciales, como la Comisión Arbitral.",
      "Recupero de flujo de caja al corregir la alícuota, para que no te saquen de más.",
    ],
  },
  {
    slug: "ganancias-bienes-personales",
    title: "Impuesto a las Ganancias y Bienes Personales",
    category: "Impuestos",
    tagline: "Tu tranquilidad es la prioridad. Tus impuestos, a tu favor.",
    image: "/images/consulta.jpg",
    summary:
      "Liquidación anual precisa, con deducciones y beneficios fiscales aplicables a tu caso.",
    paragraphs: [
      "Las declaraciones anuales de Ganancias y Bienes Personales son momentos cruciales para tu patrimonio y tu negocio. Este servicio está diseñado para transformar esa obligación compleja en una oportunidad de eficiencia fiscal.",
      "No me limito a cargar datos. Hago una gestión proactiva para identificar cada beneficio, deducción o desgravación que te corresponda. Mantenerse en orden con los impuestos permite conseguir beneficios fiscales: te ayudo a aprovechar esa máxima para optimizar tu carga tributaria dentro del marco legal.",
      "La normativa cambia constantemente. La liquidación se apoya en la última legislación vigente, protegiendo tu patrimonio y brindándote tranquilidad fiscal.",
      "Tu tranquilidad es mi prioridad. Escribinos para asegurar que tus impuestos no solo estén en regla, sino que trabajen a tu favor.",
    ],
    points: [
      "Cálculo y presentación de Impuesto a las Ganancias y Bienes Personales.",
      "Análisis de variables, deducciones personales y beneficios fiscales aplicables.",
      "Precisión para evitar errores, multas o intimaciones futuras.",
      "Pensado para emprendedores, dueños de pymes y personas con estas obligaciones anuales.",
    ],
  },
  {
    slug: "liquidacion-de-sueldos",
    title: "Liquidación de sueldos y colaboradores",
    category: "Impuestos",
    tagline: "El equipo en regla, para que vos te ocupes de crecer.",
    image: "/images/equipo.jpg",
    summary:
      "Gestión integral del capital humano de tu pyme: relación de dependencia y colaboradores independientes.",
    paragraphs: [
      "El servicio abarca la gestión integral del capital humano de tu pyme, asegurando el cumplimiento legal, evitando contingencias y brindándote tranquilidad laboral.",
      "El compromiso es asegurar que la gestión de tu equipo esté en regla, permitiéndote enfocarte en el crecimiento de tu negocio.",
    ],
    points: [
      "Empleados en relación de dependencia: alta y baja, y alta de empleador si corresponde.",
      "Legajo y encuadre: convenio, categoría y jornada.",
      "Liquidación mensual completa: haberes, aportes y contribuciones, F. 931, SAC, vacaciones y liquidaciones finales.",
      "Recibos electrónicos y Libro de Sueldos Digital.",
      "Asesoramiento ante la ART, la obra social y las novedades de la reforma laboral.",
      "Colaboradores independientes (PADIC – ARCA): registro del emprendimiento, hasta 3 colaboradores.",
      "Modelo de acuerdo de colaboración, criterios operativos y documentación de respaldo, sin relación de dependencia.",
      "Informes de gestión: colaboradores, tareas, facturación, calendario fiscal de Monotributo o autónomos, y buenas prácticas de contratación.",
    ],
  },
];

export type Post = {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  image: string;
  body: Rich[];
};

export const defaultPosts: Post[] = [
  {
    slug: "monotributo-arca-categorias",
    title: "Monotributo: ARCA pone la lupa sobre las categorías declaradas",
    date: "2026-09-02",
    author: "Nancy Vara",
    excerpt:
      "Finalizada la recategorización, ARCA profundizó los controles para verificar que la categoría refleje el nivel real de actividad.",
    image: "/images/blog/monotributo-arca-categorias.jpg",
    body: [
      {
        kind: "p",
        text: "Finalizada la recategorización del Monotributo, la Agencia de Recaudación y Control Aduanero (ARCA) comenzó a profundizar los controles sobre los pequeños contribuyentes.",
      },
      {
        kind: "p",
        text: "El objetivo es claro: verificar que la categoría elegida refleje realmente el nivel de actividad económica de cada contribuyente.",
      },
      { kind: "h", text: "¿Qué puede analizar ARCA?" },
      {
        kind: "p",
        text: "El organismo puede cruzar información proveniente de diferentes fuentes para detectar posibles inconsistencias, entre ellas:",
      },
      {
        kind: "ul",
        items: [
          "Ingresos brutos acumulados de los últimos 12 meses.",
          "Facturación electrónica registrada.",
          "Compras y gastos vinculados con la actividad.",
          "Acreditaciones y movimientos bancarios.",
          "Superficie afectada a la actividad.",
          "Consumo de energía eléctrica.",
          "Alquileres, cuando correspondan.",
        ],
      },
      {
        kind: "p",
        text: "Si de estos controles surge que la categoría declarada no resulta compatible con los parámetros de la actividad, ARCA puede avanzar con una recategorización de oficio. Esto puede suceder cuando el contribuyente no realizó la recategorización correspondiente o cuando la información disponible indica que la categoría seleccionada no se ajusta a su realidad económica.",
      },
      { kind: "h", text: "¿Qué significa esto para el monotributista?" },
      {
        kind: "p",
        text: "No alcanza con mirar únicamente la facturación. La situación fiscal puede ser evaluada a partir del conjunto de información económica y financiera que surge de los registros del contribuyente.",
      },
      {
        kind: "p",
        text: "Por eso, es recomendable realizar un control periódico de la categoría y verificar que exista coherencia entre la actividad desarrollada, la facturación y el resto de los parámetros considerados por el régimen.",
      },
      { kind: "p", text: "La prevención también forma parte de una buena planificación fiscal." },
    ],
  },
  {
    slug: "saldos-a-favor-arba",
    title: "Devolución de saldos a favor de Ingresos Brutos ARBA",
    date: "2025-11-30",
    author: "Nancy Vara",
    excerpt:
      "Cuatro claves para recuperar un saldo a favor en ARBA: compensación, carril de 72 horas, documentación y CBU.",
    image: "/images/blog/saldos-a-favor-arba.jpg",
    body: [
      { kind: "h", text: "El dolor de cabeza de los saldos a favor" },
      {
        kind: "p",
        text: "Pocos momentos generan más frustración para un contribuyente que revisar sus cuentas y descubrir que ha pagado impuestos de más. Ese saldo a favor con el fisco, que debería ser una buena noticia, a menudo se percibe como el inicio de un trámite burocrático, complejo y largo.",
      },
      { kind: "h", text: "Los 4 secretos para recuperar tu dinero de ARBA" },
      { kind: "h", text: "1. Tu saldo a favor es un comodín para otros impuestos" },
      { kind: "p", text: "ARBA te permite utilizar ese crédito fiscal de tres maneras estratégicas:" },
      {
        kind: "ul",
        items: [
          "Compensar deudas del mismo Impuesto sobre los Ingresos Brutos, incluyendo accesorios y multas.",
          "Cancelar deudas de otros impuestos asociados a tu CUIT: Automotor, Inmobiliario Básico o Complementario, y Embarcaciones Deportivas y de Recreación.",
          "Solicitar la devolución en efectivo del remanente, una vez saldadas las otras deudas.",
        ],
      },
      { kind: "h", text: "2. Existe un carril rápido de 72 horas" },
      {
        kind: "p",
        text: "ARBA cuenta con un procedimiento abreviado, también conocido como demanda automática. Al iniciar el reclamo, el sistema verifica si cumplís las condiciones, considerando tu comportamiento fiscal durante los últimos 4 ejercicios anuales finalizados y los anticipos del año en curso. Es un beneficio para contribuyentes con un historial prolijo y completo.",
      },
      {
        kind: "ul",
        items: [
          "El plazo de resolución es de tan solo 72 horas hábiles.",
          "Permite solicitar devoluciones de hasta $3.500.000.",
        ],
      },
      { kind: "h", text: "3. El documento que subís pesa más que el formulario" },
      {
        kind: "p",
        text: "Cuando los datos consignados en los formularios digitales no se correspondan con la documentación aportada digitalmente, se tomarán por válidos estos últimos. La prioridad es la claridad, precisión y legibilidad de los documentos que adjuntes: extractos bancarios, comprobantes de pago, constancias de retenciones.",
      },
      { kind: "h", text: "4. ¿No registraste un CBU? Todavía podés cobrar" },
      {
        kind: "p",
        text: "Para estos casos, ARBA emite un comprobante de pago específico (el Formulario R-340 W o R-340 D). Funciona como una orden de pago que podés presentar en la entidad bancaria designada. El formulario tiene vencimiento: hay un plazo de 180 días desde la notificación para presentarlo en el banco.",
      },
      {
        kind: "p",
        text: "Ahora que conocés estos atajos, ¿estás listo para revisar tus cuentas y reclamar lo que es tuyo?",
      },
    ],
  },
  {
    slug: "saldos-a-favor-agip",
    title: "Devolución de saldos a favor de Ingresos Brutos AGIP",
    date: "2025-11-29",
    author: "Nancy Vara",
    excerpt:
      "Dos caminos para recuperar el saldo a favor en la Ciudad de Buenos Aires, según el monto supere o no los $10.000.000.",
    image: "/images/blog/saldos-a-favor-agip.jpg",
    body: [
      {
        kind: "p",
        text: "Si sos contribuyente en la Ciudad de Buenos Aires, es muy probable que en algún momento te hayas encontrado con un saldo a favor en tu cuenta de Ingresos Brutos de AGIP. El proceso puede ser más simple de lo que parece. La clave está en entender que no hay un solo camino, sino dos.",
      },
      { kind: "h", text: "El número que lo cambia todo: $10.000.000" },
      {
        kind: "p",
        text: "Si el saldo es igual o menor a $10.000.000, existe un procedimiento exprés y 100% online. Si supera ese monto, el trámite se hace por Trámites a Distancia (TAD) y pide más documentación.",
      },
      { kind: "h", text: "Menos de $10 millones: la vía rápida" },
      {
        kind: "p",
        text: "Antes de empezar, el sistema verifica automáticamente algunas condiciones. Las más importantes son:",
      },
      {
        kind: "ul",
        items: [
          "Tener presentadas todas las declaraciones juradas del Impuesto sobre los Ingresos Brutos.",
          "No tener deudas en gestión judicial ni administrativa con AGIP.",
          "No tener deudas como agente de recaudación.",
          "No estar en estado de concurso o quiebra.",
          "No tener planes de facilidades de pago vigentes.",
          "No registrar un proceso de fiscalización abierto.",
          "No estar inscripto en Distritos Económicos o regímenes de promoción económica.",
          "No haber obtenido una devolución por este mismo medio en los últimos 90 días.",
        ],
      },
      { kind: "p", text: "El proceso, paso a paso:" },
      {
        kind: "ul",
        items: [
          "Ingresá a AGIP con tu CUIT y Clave Ciudad.",
          "Buscá el servicio Nueva Cuenta Corriente Tributaria.",
          "Entrá a Operaciones y después a Devolución SAF.",
          "El sistema valida los requisitos. Si hay una inconsistencia, te indica cuál es.",
          "Completá los datos de tu CBU. El sistema valida que la cuenta sea de tu titularidad, o del representante legal si corresponde.",
          "Revisá la información, confirmá el trámite y descargá el comprobante.",
        ],
      },
      { kind: "h", text: "Más de $10 millones: documentación para TAD" },
      { kind: "p", text: "Documentación obligatoria:" },
      {
        kind: "ul",
        items: [
          "DNI del firmante.",
          "Formulario de alta de cuentas para devoluciones, con titularidad única.",
          "Certificación bancaria o captura del homebanking donde se vean el número de cuenta y el CBU.",
          "Nota de actividad.",
        ],
      },
      {
        kind: "p",
        text: "Según el caso, también pueden pedirte poder de representación certificado, estatuto social, acta de designación de autoridades, estados contables certificados por el consejo profesional, listado de ventas y compras de los períodos que generaron el saldo, y cualquier respaldo de la solicitud.",
      },
      {
        kind: "ul",
        items: [
          "Ingresá a AGIP con CUIT y Clave Ciudad.",
          "Accedé a TAD – Jefatura de Gabinete de Ministros.",
          "Buscá exactamente: Solicitud devoluciones o compensaciones de Ingresos Brutos por saldo a favor mayores a $10.000.000.",
          "Iniciá el trámite, adjuntá la documentación y confirmá. Vas a obtener un número de expediente.",
        ],
      },
      { kind: "h", text: "La diferencia que más importa: el tiempo" },
      {
        kind: "p",
        text: "Para saldos menores a $10.000.000, la acreditación se realiza en hasta 96 horas hábiles. Para saldos mayores, no hay un plazo definido: el expediente debe ser analizado por distintas áreas del organismo.",
      },
      {
        kind: "p",
        text: "El proceso puede ser un trámite exprés o una gestión más elaborada. Todo depende de ese umbral de diez millones. Con el mapa del trámite, ya podés revisar tu cuenta corriente y solicitar la devolución.",
      },
    ],
  },
  {
    slug: "analisis-financiero-en-recesion",
    title: "Análisis financiero en tiempos de recesión",
    date: "2025-11-16",
    author: "Nancy Vara",
    excerpt:
      "En una recesión, la prioridad es un flujo de caja saludable: costos, tesorería y deudas, sin recortes a ciegas.",
    image: "/images/blog/analisis-financiero-en-recesion.jpg",
    body: [
      {
        kind: "p",
        text: "En momentos de recesión, la clave para la supervivencia de tu empresa está en un flujo de caja saludable. En lugar de reaccionar con pánico, es esencial tomar un enfoque calmado y estratégico para evaluar tus finanzas, poniendo especial énfasis en la liquidez, el manejo de deudas y el control del flujo de caja. La prioridad no es simplemente reducir costos de manera drástica, sino tomar decisiones financieras inteligentes que permitan mantener la flexibilidad operativa.",
      },
      { kind: "h", text: "Reducción de costos de forma estratégica" },
      {
        kind: "p",
        text: "En lugar de hacer recortes generalizados, identificá aquellos gastos que no son imprescindibles y que pueden eliminarse sin afectar las funciones esenciales de la empresa. ¿Es posible postergar alguna campaña publicitaria? ¿Existen oportunidades para renegociar los términos de los contratos vigentes?",
      },
      { kind: "h", text: "Control eficiente del flujo de caja" },
      {
        kind: "p",
        text: "Es fundamental gestionar de manera activa la tesorería de la empresa. Asegurate de que los controles de crédito estén sólidos, fomentá los pagos puntuales de tus clientes y buscá negociar condiciones de pago más favorables con tus proveedores. Estos ajustes pueden otorgarle a tu empresa el respiro financiero necesario.",
      },
      { kind: "h", text: "Reestructuración de deudas" },
      {
        kind: "p",
        text: "Si la carga de deudas es alta, puede ser el momento de explorar alternativas de reestructuración. Reducir las tasas de interés, extender los plazos de amortización o consolidar las deudas existentes son medidas que pueden aliviar el estrés financiero a corto plazo.",
      },
    ],
  },
  {
    slug: "financiamiento-sgr",
    title: "Financiamiento para pymes: sociedades de garantía recíproca",
    date: "2025-11-16",
    author: "Nancy Vara",
    excerpt:
      "Cómo funciona una SGR, qué tipos de socios tiene y qué muestran los números de garantías en Argentina.",
    image: "/images/blog/financiamiento-sgr.jpg",
    body: [
      {
        kind: "p",
        text: "Las sociedades de garantía recíproca (SGR) facilitan el acceso al crédito a pequeñas y medianas empresas, otorgando avales ante entidades financieras u otros acreedores. Las pymes que acuden a una SGR lo hacen para mejorar su perfil crediticio y conseguir mejores condiciones dentro del sistema financiero.",
      },
      { kind: "h", text: "¿Cómo funciona una SGR?" },
      {
        kind: "p",
        text: "Hay dos tipos de socios: los protectores y los partícipes. Los primeros aportan el dinero al fondo de garantía y al capital social de la SGR, que responde por las operaciones avaladas. Los socios partícipes son las pymes que se asocian. La pyme presenta la documentación requerida y, una vez aprobada, la SGR emite un aval para entregar a la entidad financiera. Ahí empieza el beneficio: no será evaluada de nuevo y conseguirá tasas y condiciones mejores que si se presentara por cuenta propia.",
      },
      { kind: "h", text: "La SGR responde ante el acreedor" },
      {
        kind: "p",
        text: "Si la pyme no pudiera afrontar la deuda, la SGR es quien paga a la entidad financiera. Una vez que paga, reclama judicialmente el monto a la pyme. Para no llegar a ese punto, conviene que la empresa tenga un flujo de fondos previsible antes de tomar el crédito, que solicite renegociación o reestructuración si detecta que no podrá pagar, y que se comunique temprano con la SGR para evitar incumplimientos formales.",
      },
      { kind: "h", text: "El presente de las SGR" },
      {
        kind: "p",
        text: "En Argentina existen más de 40 SGR activas. Algunas de las más reconocidas son Garantizar SGR, la más grande del país y con fuerte presencia federal; Aval Rural, especializada en agro y economías regionales; Acindar Pymes, respaldada por una empresa industrial; e Intergarantías, Cuyo Aval, Fogar Tucumán y la SGR de BICE, entre otras.",
      },
      {
        kind: "p",
        text: "CASFOG, en el informe “Sistemas de Garantías” de febrero de 2025, suscribe que fueron asistidas 41.197 mipymes, el 74% microempresas (ventas anuales 2024 que, según el sector, van de 98 millones a 316 millones aproximadamente). El sector que más garantías solicitó es el comercio, con 32%; lo siguen servicios 24%, industria 22%, agropecuario 18% y construcción 4%.",
      },
      {
        kind: "p",
        text: "De las garantías emitidas, el 71% se presentó ante entidades bancarias. El 27% presentó los avales ante bancos públicos y el 73% restante ante bancos privados: 24% ante Galicia y BA, 18% Nación, 14% Santander y 14% BBVA. Un 25% del total de las garantías se presentó en el mercado de valores.",
      },
      {
        kind: "p",
        text: "Las tasas promedio ponderadas, según CASFOG, para febrero de 2025 fueron de 30,20% para pagarés en moneda nacional, 9,10% para pagarés en dólares y 29% para cheques. Fuente: CASFOG, Argentina.gob.ar.",
      },
    ],
  },
  {
    slug: "fin-del-monotributo",
    title: "¿Fin del Monotributo?",
    date: "2025-11-14",
    author: "Nancy Vara",
    excerpt:
      "Circuló un borrador sobre el régimen simplificado. Hasta ahora, Economía y ARCA no confirmaron la versión.",
    image: "/images/blog/fin-del-monotributo.jpg",
    body: [
      {
        kind: "p",
        text: "A pesar de que el Gobierno nacional aún no ha realizado un anuncio oficial, se filtró un borrador interno del Ministerio de Economía que anticipa posibles cambios significativos en el régimen de Monotributo. Según la información publicada por el diario Clarín, el proyecto contempla la eliminación del régimen simplificado, con el objetivo de trasladar a todos los monotributistas al régimen de autónomos.",
      },
      {
        kind: "p",
        text: "Esta medida, según las fuentes, se tomaría en base a una recomendación del Fondo Monetario Internacional (FMI), que sugiere armonizar los sistemas tributarios. La justificación detrás de esta iniciativa sería aumentar el nivel de formalización de la economía, implementando un control más riguroso.",
      },
      {
        kind: "p",
        text: "Hasta el momento, tanto el Ministerio de Economía como la Agencia de Recaudación y Control Aduanero (ARCA) no han confirmado la veracidad de estas versiones. Por ahora, todo se encuentra en el ámbito de las especulaciones periodísticas, a la espera de la presentación de la reforma tributaria.",
      },
    ],
  },
];

export function formatDate(iso: string) {
  return new Intl.DateTimeFormat("es-AR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${iso}T12:00:00`));
}
