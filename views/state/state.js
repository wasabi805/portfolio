//    index section

module.exports = state = {
  //  ==========    ========== LANDING/ABOUT  ==========  ==========

  about_profile_stats: [
    { title: "Name", value: "Tim Ocampo" },
    { title: "Position", value: "Full Stack Web Developer" },
    { title: "Hometown", value: "Redwood City , CA" },
    { title: "Experience", value: "2017 - Present" },
    {
      title: "Education",
      value: ["Coding Dojo : 2017 ", " UCSB : B.A. - Sociology : 2013"]
    },
    { title: "Status", value: "U.S. Citizen" }
  ],

  profile_img: "../img/tim-o-wall-1.jpg",

  skills: [
    "JavaScript",
    "HTML",
    "CSS",
    "Sass",
    "ES6",
    "jQuery",
    "Node",
    "mongoDb",
    "mongoose",
    "REST API",
    "AJAX"
  ],

  projects: [
    {
      id: "doms-noms__icon",
      header: "Dom's Noms!!!!",
      descrip:
        "Single-page-app built wth React + Redux client's BBQ catering service. ",
      image: "../img/doms.png",
      featureList: [
        "iframe video hero section",
        '"streaming video service" style photo photo gallery',
        "uses SendGrid.js auto - emailer"
      ],
      context:
        "Dom's Nom's is a company that specializes in " +
        "BBQ catering for music festival events, corporate, wedding," +
        " and special event catering. Mobile in nature, this site took a mobile " +
        "first approach in design with a single page app design. ",

      url: "http://www.doms-noms.com"
    },

    {
      id: "dev-con__icon",
      header: "Developer Connector",
      descrip:
        "Single-page-app built wth React + Redux client's BBQ catering service. ",

      image: "../img/dev-con.png",

      featureList: [
        "iframe video hero section",
        '"streaming video service" style photo photo gallery',
        "uses SendGrid.js auto - emailer"
      ],
      context:
        "Dom's Nom's is a company that specializes in " +
        "BBQ catering for music festival events, corporate, wedding," +
        " and special event catering. Mobile in nature, this site took a mobile " +
        "first approach in design with a single page app design. ",

      url: "https://fast-reef-49361.herokuapp.com/"
    }
  ],

  //  ==========    ========== ACBA  ==========  ==========

  acba_cards: [
    //  A.C.B.A
    {
      card_pic: "../../img/boog-nice.png",
      card_pic_specific: "boog-nice-pic",
      card_logo: "../img/acba-small.png",

      context:
        "Toy Galaxy is a channel that reviews current figures as well as" +
        "vintage. The reviews are well thought out typically with an introspective look",

      social: [{ youtube: "", instagram: "", facebook: "" }]
    },


    //  Toy Galaxy
    {
      card_pic: "../../img/dan-larsen.png",
      card_pic_specific: "dan-larsen-pic",
      card_logo: "../img/toy-galaxy-small.png",

      context:
        "Toy Galaxy is a channel that reviews current figures as well as" +
        "vintage. The reviews are well thought out typically with an introspective look",

      social: [{ youtube: "", instagram: "", facebook: "" }]
    },

    //Shartimus Prime
    {
      card_pic: "../../img/shartimu-01.jpg",
      card_pic_specific: "shartimus-pic",
      card_logo: "../img/shart-gauntlet.jpg",

      context:
        "Toy Galaxy is a channel that reviews current figures as well as" +
        "vintage. The reviews are well thought out typically with an introspective look",

      social: [{ youtube: "", instagram: "", facebook: "" }]
    }
  ]
};
