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
    layout: "/",
  },
  {
    pathFooter: "/faq",
    nameFooter: "FAQ",
    component: Faq,
    layout: "/",
  },
  {
    pathFooter: "/resourcecontainer",
    nameFooter: "ResourceContainer",
    component: ResourceContainer,
    layout: "/",
  },
  {
    pathFooter: "/about",
    nameFooter: "About",
    component: About,
    layout: "/",
  },
  {
    pathFooter: "/conditions",
    nameFooter: "Conditions",
    component: Conditions,
    layout: "/",
  },
  {
    pathFooter: "/politicalCookies",
    nameFooter: "Politique de Cookies",
    component: PoliticalCookies,
    layout: "/",
  },
  {
    pathFooter: "/conduite",
    nameFooter: "Lignes de Conduite",
    component: Conduite,
    layout: "/",
  }
];

export default footerRoutes ;
