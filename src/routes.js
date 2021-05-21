//Import pour les vues
import AccueilContainer from "./ClassComponents/AccueilContainer.js";
import Tendances from "./views/Tendances.js";
import MonCompte from "./views/MonCompte.js";
import APropos from "./views/APropos.js";
import Galerie from "./views/Galerie.js";
import Forum from "./views/Forum.js";
import Soi from "./views/Soi.js";
import Conjoints from "./views/Conjoints.js";
import Professionnels from "./views/Professionnels.js";
import Familles from "./views/Familles.js";
import Amis from "./views/Amis.js";

import About from './views/About.js';

// Import pour les Icones
import {  MdHome,
          MdAccountCircle,
          MdForum,
          MdWork,
        } from 'react-icons/md';
import {VscFlame} from 'react-icons/vsc';
import {GiLovers, GiFamilyTree} from 'react-icons/gi';
import {FaUserFriends} from 'react-icons/fa';
import {FcSelfie} from 'react-icons/fc';


const dashRoutes = [
  {
    textSeparation:<p className="positionTextSeparationLeftNavBar">Explorer</p>,
    path: "/accueil",
    name: "Accueil",
    icon: <MdHome/>,
    component: AccueilContainer,
    layout: "/",
  },
  {
    path: "/tendances",
    name: "Tendances",
    icon:<VscFlame/>,
    component: Tendances,
    layout: "/",
  },
  {
    path: "/moncompte",
    name: "Mon Compte",
    icon:<MdAccountCircle/>,
    component: MonCompte,
    layout: "/",
  },
  {
    path: "/forum",
    name: "Forum",
    icon:<MdForum/>,
    component: Forum,
    layout: "/",
  },
  {
    textSeparation:<p className="positionTextSeparationLeftNavBar">Améliorer vos relations</p>,
    path: "/soi",
    name: "Soi",
    icon: <FcSelfie/>,
    component: Soi,
    layout: "/",
  },
  {
    path: "/conjoints",
    name: "Conjoints",
    icon: <GiLovers/>,
    component: Conjoints,
    layout: "/",
  },
  {
    path: "/professionnels",
    name: "Professionnels",
    icon: <MdWork/>,
    component: Professionnels,
    layout: "/",
  },
  {
    path: "/familles",
    name: "Familles",
    icon: <GiFamilyTree/>,
    component: Familles,
    layout: "/",
  },
  {
    path: "/amis",
    name: "Amis",
    icon: <FaUserFriends/>,
    component: Amis,
    layout: "/",
  },

  {
    pathF: "/about",
    nameF: "About",
    iconF: <FaUserFriends/>,
    componentF: About,
    layout: "/",
  }
];

export default dashRoutes;
