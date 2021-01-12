// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import linkedinIcon from "./images/linkedin.svg"


export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Tristan",
  headerTagline: [
    //Line 1 For Header
    "Junior Full Stack",
    //Line 2 For Header
    "ReactNative, ReactJs,",
    //Line 3 For Header
    "Développeur",
  ],
  //   Header Paragraph
  headerParagraph:
    "En recherche active d'un nouveau projet professionnel",

  //Contact Email
  contactEmail: "tristan.kaffel@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      id: 1, //DO NOT CHANGE THIS (Please)😅
      title: "My Moviz", //Project Title - Add Your Project Title Here
      para:
        "Application web développée en ReactJS couplé à un backend en NodeJS et une base de données sur MongoDb qui propose, via l'API MovieDB, les dernières sorties cinéma et permet de créer sa propre wishlist.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://res.cloudinary.com/tristanka/image/upload/v1610464373/qwybiafywrnmfprkgucj.png",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/Ktrist/mymoviz",
    },
    {
      id: 2, //DO NOT CHANGE THIS (Please)😅
      title: "Morning News", //Project Title - Add Your Project Title Here
      para:
        "Application Web d'actualités utilisant News API. Connectez-vous, choisissez votre langue, recevez les infos de France ou des USA et sauvegardez vos articles favoris. L'application est développé en ReactJS/NodeJs couplé à une base de données sous MongoDB", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://res.cloudinary.com/tristanka/image/upload/v1610464508/dddmvwobdrucqbdzkk7h.png",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/Ktrist/morning-news",
    },
    {
      id: 3, //DO NOT CHANGE THIS (Please)😅
      title: "Esport-Influence", //Project Title - Add Your Project Title Here
      para:
        "Application Web permettant à des influenceurs et des marques d'etre mis en relation pour cr&er des campagnes de marketing d'influence autour du Gaming. Les marques ont la possiblitées de creer leur campagnes, sélectionner un influenceur et de valider des candidateures, L'application est développé en ReactJS/NodeJs couplé à une base de données sous MongoDB", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://res.cloudinary.com/tristanka/image/upload/v1610465209/adignx1uezsu3hkut9yo.png",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/Ktrist/Esport-influence",
    },
    {
      id: 4, //DO NOT CHANGE THIS (Please)😅
      title: "RideOn", //Project Title - Add Your Project Title Here
      para:
        "Mobile application de vente d'équipements moto d'occasion. Connectez-vous, photographier les produits que vous mettez en ventes, mettez vous en relation avec les acheteurs. Projet développé en ReactNative avec un backend en NodeJs", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://res.cloudinary.com/tristanka/image/upload/v1610464906/eqtekmn74g4xr4rmnsrc.png",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/Ktrist/RideOn",
    },
    {
      id: 5, //DO NOT CHANGE THIS (Please)😅
      title: "The BikeShop", //Project Title - Add Your Project Title Here
      para:
        "BikeShop est un site e-commerce de vente de vélo, le site est construit en VanillaJS, HTML, CSS et Bootstrap. Il intégre également le système de paiement Stripe.",      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://res.cloudinary.com/tristanka/image/upload/v1610464064/sd3sigu38rmokrluw4bd.png",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/Ktrist/Bikeshop",
    },
    {
      id: 6, //DO NOT CHANGE THIS (Please)😅
      title: "Portfolio", //Project Title - Add Your Project Title Here
      para:
        "Portfolio en ligne de mes différents projets. Portfolio crée en ReactJS",      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://res.cloudinary.com/tristanka/image/upload/v1610464607/tlfenmfzpjigjylqxad0.png",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/Ktrist/portfolio",
    },

    /*
    If You Want To Add More Project just Copy and Paste This At The End (Update the id Respectively)
    ,{
        id: 5,
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "De retour en France après 6 ans d'expatriation en Afrique puis en Asie avec des postes de responsable des opérations et directeur de filiale d'une SSII Française",
  aboutParaTwo:
  "Je suis actuellement en reconversion professionelle, en tant que développeur FullStack ReactNative & ReactJs",  
aboutParaThree:
    "De nature curieux, habitué d'être hors de ma zone de confort j'ai eu l'habitude dès ma première expérience professionelle de travailler puis de diriger des équipes techniques. Il me semblait donc naturel de m'orienter vers le développement informatique",
  aboutImage:
    "https://ualog.tech/wp-content/uploads/2021/01/tristanK.png",

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      id: 1,
      img: htmlIcon,
      para:
        "Je possède les compétences courante de HTML 5, Je maitrise les principales règle de l'affichage HTML. "    },
    {
      id: 2,
      img: cssIcon,
      para:
        "Je maitrise les bases de CSS 3, je connais les principales règles qui régissent son utilisation.",
    },
    {
      id: 3,
      img: jsIcon,
      para:
        "Ma formation a été orienté JavaScript, j'en connais et maitrise donc les règles et usage. De VanillaJS à d'autres framework comme ReactJS.",
    },
    {
      id: 4,
      img: reactIcon,
      para:
        "J'ai une bonne maitre de ReactJS et ReactNative, plusieurs projets à mon actif sur ces technologies. Je travaille quotidiennement avec ce Framework. ",
    },
    {
      id: 5,
      img: designIcon,
      para:
        "Je connais les principales librairies graphiques, j'ai une bonne vision de la fonctionalités des composants et comment les utiliser. ",
    },
    {
      id: 6,
      img: codeIcon,
      para:
        "Le developpement informatique est devenu une passion et j'ai décidé d'en faire mon métier à travers différents projets et experiences.",
    },
  ],

  // End Skills Section --------------------------


  

  //   Promotion Section --------------------------

  promotionHeading: "Le mot de la fin",
  promotionPara:
" Habitué d'être hors de ma zone de confort, je suis débrouillard et curieux depuis toujours, j'ai une constante envie d'évoluer et de m'améliorer. J'aime apprendre en me lançant de nouveaux défis. Force de proposition, je m'adapte facilement aux besoins d'un projet en choisissant les technologies qui me paraissent les plus pertinentes, aussi bien sur le front-end que sur le back-end.",  
// End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's work together",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, 
      url: "https://github.com/Ktrist" 
    },
    {
   img:  linkedinIcon,
   url: "https://www.linkedin.com/in/tristankaffel/",
    }
    
  ],

  // End Contact Section ---------------
}
