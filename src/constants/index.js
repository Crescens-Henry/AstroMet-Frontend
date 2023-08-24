export const navLinks = [
  { id: "Home", title: "Inicio" },
  {
    id: "Know-us",
    title: "Conócenos",
    subLinks: [
      { id: "/Home#history", title: "Nuestra Historia" },
      { id: "/Home#goals", title: "Objetivos" },
      { id: "/Home#mission", title: "Misión" },
      { id: "/Home#vission", title: "Vision" },
    ],
  },
  {
    id: "Contents",
    title: "Contenido",
    subLinks: [
      { id: "/Contents#news", title: "Noticias" },
      { id: "/Contents#events", title: "Eventos" },
      { id: "/Contents#gallery", title: "Galeria" },
    ],
  },
  { id: "Store", title: "Tienda" },
  { id: "Courses", title: "Cursos" },
  { id: "Login", title: "Iniciar Sesión" },
];

// TODO: Modificables:
export const targetDate = new Date("2023-10-14T12:00:00").getTime();

import imageMission from "../assets/img/imageMission.png";
import imageVission from "../assets/img/imageVission.png";

export const information = [
  {
    id: "history",
    title: "Nuestra Historia",
    paragraph:
      "Hace una década, un grupo de amigos con pasión por el cosmos fundó AstroMet. Lo que comenzó como charlas informales sobre estrellas y planetas pronto se convirtió en un club de astronomía vibrante. Sus reuniones bajo el cielo nocturno, observando y compartiendo descubrimientos, inspiraron a muchos a mirar hacia arriba y soñar en grande. A día de hoy, AstroMet sigue uniendo a la comunidad en su fascinación por el universo, recordándonos que las estrellas están al alcance de quienes se atreven a levantar la vista.",
  },
  {
    id: "goals",
    title: "Objetivos",
    paragraph:
      "El club de astronomía tiene como objetivos principales fomentar el interés por la astronomía entre sus miembros y la comunidad, proporcionar oportunidades educativas, organizar observaciones astronómicas, ofrecer charlas y conferencias informativas, desarrollar habilidades en observación y fotografía del cielo, promover la colaboración y el intercambio de conocimientos, organizar eventos y talleres especiales, participar en proyectos de ciencia ciudadana, contribuir a la comunidad a través de eventos y ferias, y brindar un espacio para el desarrollo personal y las interacciones sociales entre entusiastas de la astronomía.",
  },
  {
    id: "mission",
    title: "Misión",
    image: imageMission,
    paragraph:
      "La misión del Instituto de Astronomía (IA) es impulsar el desarrollo de la astrofísica en México a través de la realización de investigación original e innovadora con impacto internacional, el diseño y construcción de instrumentación astronómica con tecnología de punta, así como la formación de recursos humanos con estándares mundiales y la divulgación científica de excelencia.",
  },
  {
    id: "vission",
    title: "Visión",
    image: imageVission,
    paragraph:
      "Mantener una posición de liderazgo nacional e internacional en investigación de frontera en astrofísica, el desarrollo de instrumentación astronómica con tecnología de punta, y generar proyectos de gran envergadura que pongan a nuestros observatorios dentro del marco competitivo internacional, en beneficio del desarrollo científico y tecnológico del país.",
  },
];
