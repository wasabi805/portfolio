module.exports = state = {
  //  ==========    ========== Navigation  ==========  ==========

  navigation: {
    author: "Site by Tim Ocampo",
    copyright: "Copyright ProletDev",

    siteLoc: [
      { name: "Home", url: "" },
      { name: "About", url: "" },
      { name: "Projects", url: "" },
      { name: "Mixes", url: "" },
      { name: "ACBA", url: "" },
      { name: "Travel", url: "" },
      { name: "Food", url: "" }
    ],
    social: [
      {
        site: "Linkedin",
        url: "https://www.linkedin.com/in/timocampo/",
        faIcon: ""
      },
      {
        site: "github",
        url: "https://github.com/wasabi805/",
        faIcon: ""
      },
      {
        site: "facebook",
        url: "https://www.facebook.com/people/Tim-Ocampo/3623468",
        faIcon: ""
      }
    ]
  },

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

  acba_hero_banner: [
    {
      image_source:
        "https://s3-us-west-1.amazonaws.com/proletdev/deadpool-uncanny.png",
      bg_color: "marvel"
    },

    {
      image_source: "https://s3-us-west-1.amazonaws.com/proletdev/megatron.png",
      bg_color: "transformers"
    },

    { image_source: "../img/snake-eyes-2.jpg", bg_color: "gi-joe" }
  ],

  acba_hero_context: {
    header: "Render Imagination",
    sub_header: "What is ACBA?",

    text_01:
      "When I think back to being a kid in grade school, " +
      "I have some found memories of the class projects I had to make. " +
      "I'd get excited getting a book report that involved making a scene from the book " +
      "in a shoebox or building out a miniature scaled diorama. Heck," +
      " sometimes the project was the main reason I finished the book! Any " +
      "project always required a resourceful imagination. Fast forward to today, " +
      "ACBA is a great creative outlet for an active imagination.",

    text_02: "So what is it exactly?",
    quote:
      "Articulated Comic Book Art is akin to the miniature dioramas found in many museums, " +
      "and as the name implies, the subject matter is influenced by comic book/superhero themes ",
    citation: "articulatedcomicbookart.com"
  },

  acba_card_context: {
    header: "Contributors",
    sub_header: "Leading the way",
    text:
      "With a large active community of figure collectors and ACBA enthusiasts,  " +
      "I wanted to highlight a few youtube content creators that contribute significantly to the art. "
  },

  acba_cards: [
    //  A.C.B.A
    {
      card_pic: "../../img/boog-nice.png",
      card_pic_specific: "boog-nice-pic",
      card_logo: "../../img/acba-logo-01.png",

      logo_margin: "acba-mt",

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

      logo_margin: "tg-mt",

      context:
        "Toy Galaxy is a channel that reviews current figures as well as" +
        "vintage. The reviews are well thought out typically with an introspective look",

      social: [{ youtube: "", instagram: "", facebook: "" }]
    },

    //Shartimus Prime
    {
      card_pic: "../../img/shartimu-01.jpg",
      card_pic_specific: "shartimus-pic",
      card_logo: "../img/sp-logo.jpg",

      logo_margin: "sp-mt",

      context:
        "Toy Galaxy is a channel that reviews current figures as well as" +
        "vintage. The reviews are well thought out typically with an introspective look",

      social: [{ youtube: "", instagram: "", facebook: "" }]
    }
  ],

  //ACBA Figure Photos
  figures: [
    {
      character: "The Avengers",
      align_header: "rhs",
      header: "Avengers Assemble!",
      card_img_lhs: true,
      card_length_and_color_grad: "long", //this is length && background gradient

      source_image: "https://s3-us-west-1.amazonaws.com/proletdev/avengers.jpg",

      align_text: "acba-right",
      context:
        "Unlike many Super Hero teams, the Avengers have largely embraced a highly structured dynamic, " +
        "with a leader/chairperson who charts their collective path in battle and in peace. Almost all of the " +
        "founding members have taken their turn as the team’s leader, with Captain America, Iron Man, and the Wasp " +
        "emerging as arguably the Avengers’ most gifted commanders",
      citation_web_page_title:
        "Avengers In Comics Members, Enemies, Powers | Marvel",
      citation_web_page_header: "Avengers",
      citation_publisher: "Marvel Comics",
      citation_url:
        "https://www.marvel.com/teams-and-groups/avengers/in-comics",
      visit_url: "https://www.marvel.com/teams-and-groups/avengers/in-comics"
    },

    {
      character: "Thanos",
      align_header: "lhs",
      header: "Mad Titan",
      card_img_lhs: false,
      card_length_and_color_grad: "short", //this is length && background gradient

      source_image: "https://s3-us-west-1.amazonaws.com/proletdev/thanos.jpg",

      align_text: "acba-left",
      context:
        "The Mad Titan called Thanos is known across all reality as one of the most powerful beings in existence. " +
        "Obsessed with order and fate, the god works tirelessly to bring all living things to heel—to " +
        "make the universe as he sees it should be. " +
        "Thanos is among the most impressive physical beings in the universe. Impossibly strong, resistant to injury, and capable of traveling across the stars with minimal effort, few—if any—are able to defeat him in battle." +
        " Thanos also possesses formidable psychic abilities. He has the ability to sense happenings several star systems away, as well as the capacity to possess others, channeling his powers through others' bodies.  " +
        "Thanos has illustrated a command over his own mortality many times. He has sacrificed others so that he can return from the dead, and has waited in the realm of the unliving long enough to regain his own strength to live again. ",

      citation_web_page_title: "Thanos In Comics Profile | Marvel",
      citation_web_page_header: "Thanos",
      citation_publisher: "Marvel Comics",
      citation_url:
        "https://www.marvel.com/characters/thanos/in-comics/profile",
      visit_url: "https://www.marvel.com/characters/thanos/in-comics/profile"
    },

    {
      character: "The X-Men",
      align_header: "rhs",
      header: "The Uncanny X-Men",
      card_img_lhs: true,
      card_length_and_color_grad: "long", //this is length && background gradient

      source_image:
        "https://s3-us-west-1.amazonaws.com/proletdev/x-men-danger-room.jpg",

      align_text: "acba-right",
      context:
        "Charles Xavier’s team of merry mutants is charged with the mission of protecting a world that hates and fears them for their unusual appearances and abilities." +
        "Realizing mutants were the next step in human evolution, Professor Charles Xavier gathered gifted teenagers to be his first class of students. His goal to protect and educate the next generation of homo superior, while pursuing a dream of harmony.",
      citation_web_page_title:
        "X-Men | Members, Villains, Powers, & More | Marvel",
      citation_web_page_header: "Mutant Super Team",
      citation_publisher: "Marvel Comics",
      citation_url: "https://www.marvel.com/teams-and-groups/x-men",
      visit_url: "https://www.marvel.com/teams-and-groups/x-men"
    },

    {
      character: "G.I. Joe",
      align_header: "lhs",
      header: "G.I. Joe",
      card_img_lhs: false,
      card_length_and_color_grad: "short", //this is length && background gradient

      source_image:
        "https://s3-us-west-1.amazonaws.com/proletdev/duke-scarlet-lowlight.jpg",

      align_text: "acba-left",
      context:
        "In 1964, Hasbro created G.I. Joe - the world's first Action Figure. An instant success, " +
        "he captured the imagination of boys around the world. Over the next 14 years, G.I. Joe evolved and changed. " +
        'In 1982, G.I. Joe came out in a new 3 3/4" scale, reimagined as an elite military unit dedicated to defending ' +
        "freedom against the evil Cobra organization. It is this incarnation of G.I. Joe that has evolved over the years into the " +
        "toy line we know and love today.",

      citation_web_page_title: '3 3/4" G.I. Joe Action Figures',
      citation_web_page_header: '3 3/4" G.I. Joe Action Figures',
      citation_publisher: "yojoe.com",
      citation_url: "https://www.yojoe.com/action/",
      visit_url: "https://www.idwpublishing.com/trending_titles/gi-joe/"
    },

    {
      character: "Moon Knight",
      align_header: "rhs",
      header: "Moon Knight",
      card_img_lhs: true,
      card_length_and_color_grad: "long", //this is length && background gradient

      source_image:
        "https://s3-us-west-1.amazonaws.com/proletdev/moon-knight.jpg",

      align_text: "acba-right",
      context:
        "Marc Spector became a mercenary and spent several years as a hired gun. Although he ostensibly sought to fight for causes he believed in, Marc was easily persuaded to fight for anyone who paid him enough..." +
        "During a mission to the Sudan, Marc saw his enemy Bushman assault the town of Selima, seeking information on archaeologist Dr. Peter Alraune's discovery of an Egyptian pharaoh's tomb which might contain gold." +
        "After Bushman executed the people of the town Selima, Spector attacked him, only to be defeated by Bushman, who deposited the unconscious Spector in the desert and left him to die. " +
        "Spector dragged himself through the sands to the tomb unearthed by Dr. Alraune and was found by Marlene and her servants. They brought him into the tomb, placing his body at the foot of a statue of the moon god, Khonshu. " +
        "Marc was pronounced dead, but as Marlene wept over his body, he suddenly arose, alive. Spector believed that Khonshu had restored him to life to serve as the moon's knight of vengeance. ",
      citation_web_page_title:
        "Moon Knight (Marc Spector) Powers, Enemies, History | Marvel",
      citation_web_page_header: "Marc Spector Moon Knight",
      citation_publisher: "Marvel Comics",
      citation_url:
        "https://www.marvel.com/characters/moon-knight-marc-spector",
      visit_url: "https://www.marvel.com/characters/moon-knight-marc-spector"
    },

    {
      character: "Bullseye",
      align_header: "lhs",
      header: "Bullseye",
      card_img_lhs: false,
      card_length_and_color_grad: "short", //this is length && background gradient

      source_image: "https://s3-us-west-1.amazonaws.com/proletdev/bullseye.jpg",

      align_text: "acba-left",
      context:
        "A mercenary of mystery, nothing is really known about the man called Bullseye. Once, he was captured and interrogated in a highly secured U.S. prison, and he related many details about his early life, such as the time his brother set fire to their home in an attempt to kill their father. However, much of this information is suspect, as Bullseye then escaped, taunting his interrogators that much of what he said was false-- especially the fact that it was not his brother who set fire to the house, it was himself. Bullseye proceeded to set fire to the prison, where his father was also held, and he left his father to die once more. (In a previous account of his childhood, he painted a bullseye on the forehead of his abusive father when he was passed out from drinking and shot him.)",
      citation_web_page_title:
        "Bullseye (Benjamin Poindexter) Powers, Enemies, & History | Marvel",
      citation_web_page_header: "BULLSEYE",
      citation_publisher: "Marvel Comics",
      citation_url: "https://www.marvel.com/characters/bullseye",
      visit_url: "https://www.marvel.com/characters/bullseye"
    }
  ],

  //  ==========    ========== TRAVEL  ==========  ==========

  gallery_col: [
    {
      id: "1",
      name: "nasa-entrance",
      thumb_src: "https://s3-us-west-1.amazonaws.com/proletdev/nasa-01-thumb.jpg",
      header: "Nasa",
      src: "https://i.ibb.co/VpBRMBK/IMG-20190224-141013.jpg",
      location: "Cape Canaveral , FL",
      context: "",
    },

    {
      id: "2",
      name: "mars-rover-proto",
      thumb_src: "https://s3-us-west-1.amazonaws.com/proletdev/nasa-02-thumb.jpg",
      header: "Nasa",
      location: "Cape Canaveral , FL",
      src: "https://i.ibb.co/4g2CVWz/IMG-20190224-170820.jpg",
      context: "Meet the newest concept vehicle designed for navigating the demanding landscape of Mars: the Mars Rover Vehicle Navigator®, or MRVN®. Based on NASA science, the next generation of space explorers could be traveling and working in a high-tech mobile laboratory similar to this rover vehicle. MRVN is an impressive size with its mobile lab, and has massive wheels designed to travel over dunes, rocks and craters. MRVN can often be seen at its permanent home at the visitor complex when it is not on a mission. ",

    },
    {
      id: "3",
      name: "rocket-02",
      thumb_src: "https://s3-us-west-1.amazonaws.com/proletdev/nasa-03-thumb.jpg",
      header: "Nasa",
      location: "Cape Canaveral , FL",
      src: "https://i.ibb.co/VD4gFTg/IMG-20190224-142143.jpg",
      context: "",


    },
    {
      id: "4",
      name: "rocket-01",
      thumb_src: "https://s3-us-west-1.amazonaws.com/proletdev/nasa-04-thumb.jpg",
      header: "Nasa",
      location: "Cape Canaveral , FL",
      src: "https://i.ibb.co/k2X6ctX/IMG-20190224-155314.jpg",
      context: "",
    },
    {
      id: "5",
      name: "cockpit-01",
      thumb_src: "https://s3-us-west-1.amazonaws.com/proletdev/nasa-05-thumb.jpg",
      header: "Nasa",
      location: "Cape Canaveral , FL",
      src: "https://i.ibb.co/VqS8Ryz/IMG-20190224-160733.jpg",
      context: "",
    },
    {
      id: "6",
      name: "nasa-control-room",
      thumb_src: "https://s3-us-west-1.amazonaws.com/proletdev/nasa-06-thumb.jpg",
      header: "Nasa",
      location: "Cape Canaveral , FL",
      src: "https://s3-us-west-1.amazonaws.com/proletdev/nasa-06.jpg",
      context: "",
    },

    {
      id: "7",
      name: "rocket-portrait",
      thumb_src: "https://s3-us-west-1.amazonaws.com/proletdev/nasa-07-thumb.jpg",
      header: "Nasa",
      location: "Cape Canaveral , FL",
      src: "https://i.ibb.co/Lgc9bfF/IMG-20190224-152505.jpg",
      context: "",
    },

    {
      id: "8",
      name: "magic-kingdom-castle",
      thumb_src: "https://s3-us-west-1.amazonaws.com/proletdev/disney-world-01-thumb.jpg",
      location: "Orlando , FL",
      header: "Magic Kingdom",
      src: "https://i.ibb.co/SB3GDvx/IMG-20190222-185550.jpg",
      context: "",
    },

    {
      id: "9",
      name: "portland-01",
      thumb_src: "https://s3-us-west-1.amazonaws.com/proletdev/portland-01-thumb.jpg",
      header: "",
      location: "Portland , OR",
      src: "https://i.ibb.co/P1HGSmn/portland-01.jpg",
      context: "On the hike with Ron",

    },
    {
      id: "10",
      name: "portland-02",
      thumb_src: "https://i.ibb.co/dLvn2Tn/portland-02-thumb.jpg",
      header: "",
      location: "Portland , OR",
      src: "https://i.ibb.co/SBvvL4R/portland-02.jpg",
      context: "On the hike with Ron",

    },
    {
      id: "11",
      name: "portland-03",
      thumb_src: "https://s3-us-west-1.amazonaws.com/proletdev/portland-03-thumb.jpg",
      header: "",
      location: "Portland , OR",
      src: "https://i.ibb.co/VxxCX6b/portland-03.jpg",
      context: "On the hike with Ron",

    },
    {
      id: "12",
      name: "portland-04",
      thumb_src: "https://s3-us-west-1.amazonaws.com/proletdev/portland-04-thumb.jpg",
      header: "",
      location: "Portland , OR",
      src: "https://i.ibb.co/WstPPBB/portland-04.jpg",
      context: "On the hike with Ron",

    },
    {
      id: "13",
      name: "pink-thing",
      thumb_src: "https://s3-us-west-1.amazonaws.com/proletdev/mba-01-thumb.jpg",
      header: "",
      location: "",
      src: "https://i.ibb.co/RypCh7w/20171103-104736.jpg",
      context: "",

    },
    {
      id: "14",
      name: "jellyfish-01",
      thumb_src: "https://s3-us-west-1.amazonaws.com/proletdev/mba-02-thumb.jpg",
      header: "",
      location: "",
      src: "https://i.ibb.co/L5qpRcd/20171103-104405.jpg",
      context: "",

    },

    {
      id:"15",
      name: "octopus",
      thumb_src: "https://s3-us-west-1.amazonaws.com/proletdev/mba-03-thumb.jpg",
      header: "",
      location: "",
      src: "https://i.ibb.co/4F64f90/20171103-110742.jpg",
      context: "",
    },

    {
      id:"16",
      name: "",
      thumb_src: "",
      header: "",
      location: "",
      src: "",
      context: "",
    },

    {
      id:"17",
      name: "phuket-01",
      thumb_src: "https://s3-us-west-1.amazonaws.com/proletdev/phuket-01-thumb.jpg",
      header: "",
      location: "",
      src: "https://s3-us-west-1.amazonaws.com/proletdev/phuket-01.jpg",
      context: "",

    },
    {
      id:"18",
      name: "phuket-02",
      thumb_src: "https://s3-us-west-1.amazonaws.com/proletdev/phuket-02-thumb.jpg",
      header: "Patong Beach",
      location: "Phuket, Thailand",
      src: "https://s3-us-west-1.amazonaws.com/proletdev/phuket-02.jpg",
      context: "",
    },
    {
      id:"19",
      name: "phuket-03",
      thumb_src: "https://s3-us-west-1.amazonaws.com/proletdev/phuket-03-thumb.jpg",
      header: "Patong Beach",
      location: "Phuket, Thailand",
      src: "https://s3-us-west-1.amazonaws.com/proletdev/phuket-03.jpg",
      context: "",
    },
    {
      id:"20",
      name: "ko-samui-01",
      thumb_src: "https://s3-us-west-1.amazonaws.com/proletdev/ko-samui-01-thumb.jpg",
      header: "Surat Thani",
      location: "Koh Samui, Thailand",
      src: "https://s3-us-west-1.amazonaws.com/proletdev/ko-samui-01.jpg",
      context: "",
    },
    {
      id:"21",
      name: "ko-samui-02",
      thumb_src: "https://s3-us-west-1.amazonaws.com/proletdev/ko-samui-02-thumb.jpg",
      header: "Surat Thani",
      location: "Koh Samui, Thailand",
      src: "https://s3-us-west-1.amazonaws.com/proletdev/ko-samui-02.jpg",
      context: "",
    },
    {
      id:"22",
      name: "phi-phi-island-01",
      thumb_src: "https://s3-us-west-1.amazonaws.com/proletdev/phi-phi-island-01-thumb.jpg",
      header: "The Phi Phi Islands",
      location: "Phuket, Thailand",
      src: "https://s3-us-west-1.amazonaws.com/proletdev/phi-phi-island-01.jpg",
      context: "",
    },
    {
      id:"23",
      name: "phi-phi-island-02",
      thumb_src: "https://s3-us-west-1.amazonaws.com/proletdev/phi-phi-island-02-thumb.jpg",
      header: "The Phi Phi Islands",
      location: "Phuket, Thailand",
      src: "https://s3-us-west-1.amazonaws.com/proletdev/phi-phi-island-02.jpg",
      context: "",
    },
    {
      id:"24",
      name: "phi-phi-island-05",
      thumb_src: "https://s3-us-west-1.amazonaws.com/proletdev/phi-phi-island-05-thumb.jpg",
      header: "The Phi Phi Islands",
      location: "Phuket, Thailand",
      src: "https://s3-us-west-1.amazonaws.com/proletdev/phi-phi-island-05.jpg",
      context: "",
    },
    {
      id:"25",
      name: "phi-phi-island-06",
      thumb_src: "https://s3-us-west-1.amazonaws.com/proletdev/phi-phi-island-06-thumb.jpg",
      header: "The Phi Phi Islands",
      location: "Phuket, Thailand",
      src: "https://s3-us-west-1.amazonaws.com/proletdev/phi-phi-island-06.jpg",
      context: "",
    },
    {
      id:"26",
      name: "ko-samui-03",
      thumb_src: "https://s3-us-west-1.amazonaws.com/proletdev/ko-samui-03-thumb.jpg",
      header: "Surat Thani",
      location: "Koh Samui, Thailand",
      src: "https://s3-us-west-1.amazonaws.com/proletdev/ko-samui-03.jpg",
      context: "",
    },
    {
      id:"27",
      name: "phi-phi-island-03",
      thumb_src: "https://s3-us-west-1.amazonaws.com/proletdev/phi-phi-island-03-thumb.jpg",
      header: "The Phi Phi Islands",
      location: "Phuket, Thailand",
      src: "https://s3-us-west-1.amazonaws.com/proletdev/phi-phi-island-03.jpg",
      context: "",
    },
    {
      id:"28",
      name: "phi-phi-island-04",
      thumb_src: "https://s3-us-west-1.amazonaws.com/proletdev/phi-phi-island-04-thumb.jpg",
      header: "The Phi Phi Islands",
      location: "Phuket, Thailand",
      src: "https://s3-us-west-1.amazonaws.com/proletdev/phi-phi-island-04.jpg",
      context: "",
    },
    {
      id:"29",
      name: "",
      thumb_src: "",
      header: "",
      location: "",
      src: "",
      context: "",
    },


  ],






};


