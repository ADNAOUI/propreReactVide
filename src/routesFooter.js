//Import pour les vues

import About from './views/About.js';
import Faq from './views/FAQ.js';
import Conduite from './views/Conduite.js';
import Conditions from './views/Conditions.js';
import PoliticalCookies from './views/PolitiqueCookies.js';
import Help from './views/Help.js';
import ResourceContainer from './views/ResourceContainer.js';

const footerRoutes = [
  {
    pathFooter: "/help",
    nameFooter: "Aides",
    component: Help,
    layoutFooter: "/ressources_relationnelles",
  },
  {
    pathFooter: "/faq",
    nameFooter: "FAQ",
    component: Faq,
    layoutFooter: "/ressources_relationnelles",
  },
  {
    pathFooter: "/resourcecontainer",
    nameFooter: "ResourceContainer",
    component: ResourceContainer,
    layoutFooter: "/ressources_relationnelles",
  },
  {
    pathFooter: "/about",
    nameFooter: "About",
    component: About,
    layoutFooter: "/ressources_relationnelles",
  },
  {
    pathFooter: "/conditions",
    nameFooter: "Conditions",
    component: Conditions,
    layoutFooter: "/ressources_relationnelles",
  },
  {
    pathFooter: "/politicalCookies",
    nameFooter: "Politique de Cookies",
    component: PoliticalCookies,
    layoutFooter: "/ressources_relationnelles",
  },
  {
    pathFooter: "/conduite",
    nameFooter: "Lignes de Conduite",
    component: Conduite,
    layoutFooter: "/ressources_relationnelles",
  }
];

export default footerRoutes ;
