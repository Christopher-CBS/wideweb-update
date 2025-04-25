/* eslint-disable import/no-anonymous-default-export */
// export const navItems = [
//     { name: "UX Design", link: "#about" },
//     { name: "Site Web", link: "#projects" },
//     { name: "Testimonials", link: "#testimonials" },
//     { name: "SEO", link: "#seo" },
//     { name: "Contact", link: "#contact" },
//   ];

export const navigation = [
  // {
  //   id: "0",
  //   title: "Hero",
  //   url: "#hero",
  // },
  {
    id: "1",
    title: "UX Design",
    url: "#uxdesign",
  },
  {
    id: "2",
    title: "Site Web",
    url: "#siteweb",
  },
  {
    id: "3",
    title: "Temoignages",
    url: "#temoignages",
  },
  {
    id: "4",
    title: "SEO",
    url: "#seo",
  },
  // {
  //   id: "5",
  //   title: "Contact",
  //   url: "#contact",
  // },
];

export const gridItems = [
  {
    id: 1,
    title: "UX DESIGN",
    description: "UX pour User Experience",
    className:
      "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh] font-bold",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "UI DESIGN",
    description: "UI pour User Interface",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 font-bold",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Nos outils",
    description: "logo, maquette",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 font-bold",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Audit UX & Recommandations.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1 font-bold",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Phase de Développement du Site",
    description: "Silence, ça code !",
    className: "md:col-span-3 md:row-span-2 font-bold",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Partant pour un projet ?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1 font-bold",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Brainewave",
    des: "Explorer les possibilités de Conversation avec l'IA en utilisant BrainewaveCurve",
    img: "/p1.jpg",
    // iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "brainewave.vercel.app"
  },
  {
    id: 2,
    title: "Salad'Bar",
    des: "Salad'Zen est un salad'bar en ligne dédié à la création de salades fraîches, saines et personnalisables, avec des ingrédients de qualité et de saison.",
    img: "/p2.jpg",
    // iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "freshkin.vercel.app"
  },
  {
    id: 3,
    title: "Faithflow",
    des: "Faithflow est une plateforme de podcasts chrétiens générés par l’IA, permettant à chacun de rédiger ses épisodes et de choisir une voix pour une diffusion audio personnalisée.",
    img: "/p3.jpg",
    // iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "faith-flow-two.vercel.app",
  },
  {
    id: 4,
    title: "Portfolio Votre créativité",
    des: "Visio3D est un portfolio interactif en 3D, conçu pour mettre en valeur des projets créatifs avec une navigation immersive et une présentation dynamique.",
    img: "/p4.jpg",
    // iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "portfolio3-d-theta.vercel.app",
  },
];

export const testimonials = [
  {
    quote:
      "Je suis ravie du site web que WideWeb a créé pour mon entreprise, Houze. L'équipe a parfaitement saisi nos besoins, donnant naissance à un site moderne et fonctionnel qui reflète notre style. La navigation est intuitive, les informations sont claires et le design respire le professionnalisme. Merci pour cette collaboration exceptionnelle !",
    name: "Béatrice DuPont",
    title: "Fondatrice de Houze",
  },
  {
    quote:
      "Je suis extrêmement satisfait du travail de création de site internet réalisé par WideWeb pour mon entreprise, Gabi-Construction. L'équipe a su comprendre nos besoins spécifiques et a créé un site moderne et fonctionnel qui reflète parfaitement notre image. La navigation est fluide, les informations sont claires et le design est professionnel!.",
    name: "Charles Ponse",
    title: "Directeur de Gabi-Construction",
  },
  {
    quote:
      "Je suis enchantée du travail de création de site internet réalisé par WideWeb pour mon cabinet comptable, FinCompt. L'équipe a su cerner nos besoins spécifiques, concevant un site moderne et fonctionnel qui reflète parfaitement notre professionnalisme. La navigation est fluide, les informations sont claires et le design respire la confiance. Merci pour cette collaboration exceptionnelle !",
    name: "Bénédicte",
    title: "CEO de FinCompt",
  },
  {
    quote:
      "Je suis absolument ravie du site web que WideWeb a créé pour mon entreprise de photographie, InstantCapt. L'équipe a capturé mes besoins avec précision, donnant vie à un site moderne et fonctionnel qui reflète parfaitement mon style artistique. La navigation est fluide, les images sont mises en valeur et le design est à la fois élégant et professionnel. Merci pour cette collaboration exceptionnelle !",
    name: "Miriame",
    title: "Fondatrice de InstantCapt",
  },
  // {
  //   quote:
  //     "Collaborer avec WideWeb a été une expérience extrêmement positive. Leur expertise technique, leur réactivité et leur souci du détail ont grandement contribué au succès de notre projet. J'ai été impressionné par l'engagement de WideWeb à fournir des solutions innovantes et efficaces à chaque étape. Si vous cherchez un partenaire de confiance pour faire progresser votre présence en ligne, je vous recommande chaudement WideWeb.",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  // },
];

export const companies = [
  {
    id: 1,
    name: "wordpress",
    img: "/wordpress.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "shopify",
    img: "/shop.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Développement web",
    desc: "Nous construisons des sites web entièrement responsive qui s'affichent magnifiquement sur tous les appareils.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Développement d'Application",
    desc: "Nous développons des applications mobiles personnalisées pour iOS et Android.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Réseaux Sociaux",
    desc: "Nous proposons des services de gestion des réseaux sociaux et de création d'annonces.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Boutique E-commerce",
    desc: "Des petites boutiques aux grands détaillants en ligne, nous avons l'expertise pour construire une boutique qui vous aidera à développer votre entreprise.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/insta.svg",
    url: "https://www.instagram.com/wideweb.agc?igsh=MXUwZzcwNW11Y3hoaA%3D%3D&utm_source=qr",
  },
  {
    id: 2,
    img: "/twit.svg",
    url: "https://x.com/widewebagc",
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://www.linkedin.com/company/wideweb1/",
  },
];

import email from "../public/email.png";
import mobile from "../public/mobile.png";

export default {
  email,
  mobile,
};
