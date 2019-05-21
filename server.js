
const env = require('dotenv').config()
const express = require("express");
var sassMiddleware = require("node-sass-middleware");
var path = require("path");
const app = express();
const exphbs  = require('express-handlebars');



const state = require('./views/_state/state.js');


//exphbs
const hbs = exphbs.create({
    defaultLayout: 'main',
    layoutsDir : path.join(__dirname , 'views/layouts'),
    partialsDir: path.join(__dirname , 'views/partials'),

    //create custom helpers, helpers is key property
    helpers:{
        test: ()=> 'This is a Test',
        partialsTest : 'I am just a pain old string',
        skillsList: state.skills,
    }
});


app.engine("handlebars" , hbs.engine); //hbs.engine (see hbs above)
//handlebars looks in the views folder as its root dir
app.set('views', path.join(__dirname, "views"));
app.set('view engine' , "handlebars" );


app.use(
  sassMiddleware({
    /* Options */
    src: path.join(__dirname, "src", "style", "sass"),
    dest: path.join(__dirname, "public"),
    debug: true,
    outputStyle: "compressed",
    force: true, // !important :this allows sassMiddleware to watch for changes
    prefix: "/public" // Where prefix is at <link rel="stylesheets" href="prefix/style.css"/>
  })
);

//Serve Static Dirs
app.use("/src", express.static(path.join(__dirname, "src"))); //needed for sass
app.use(express.static("src")); //all other assets like images
app.use(express.static("public")); //all other assets like images

//===== ROUTES  ======
//  TODO (move these into a routes.js file.)



app.get("/state", (req , res)=>{
    res.json(state)
});

app.get("/", (req, res) => {
    console.log("index works");
    console.log(state.artistImage)

    res.render("index",
        {
            title: 'ProletDev' ,
            name: 'About',
            about_profile_stats: state.about_profile_stats,
            profile_img : state.profile_img,
            skills: state.skills,
            projects : state.projects,
            artistImage: state.artistImage,

            list2: ["tim " , "Ocampo"]
        });
    // res.sendFile(__dirname + "/src" + "/views" + "/index.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/src" + "/views" + "/about.html");
});

app.get("/about/mixes", (req, res) => {
  res.sendFile(__dirname + "/src" + "/views" + "/mixes.html");
});

// app.get("/about/travel", (req, res) => {
//   res.sendFile(__dirname + "/src" + "/views" + "/travel.html");
// });

app.get("/about/travel", (req, res) => {
    res.render('travel' ,{
        gallery_col : state.gallery_col,
    });
});

app.get("/about/acba", (req, res) => {
    res.render('acba' ,{
        acba_hero_banner: state.acba_hero_banner,
        acba_hero_context: state.acba_hero_context,
        acba_card_context: state.acba_card_context,
        acba_cards: state.acba_cards,
        figures: state.figures,
        navigation: state.navigation,
        footerData: state.footerData,
    });
});

app.get("/about/food", (req, res) => {
    res.render('food');
});

app.get("/contact", (req, res) => {
  console.log("contact works");
  res.sendFile(__dirname + "/src" + "/views" + "/contact.html");
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`| Server running on port ${port} |`);
});
