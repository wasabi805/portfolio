const express = require('express');
var sassMiddleware = require('node-sass-middleware');
var path = require('path');
const app = express();

app.use(sassMiddleware({
    /* Options */
    src: path.join(__dirname, 'src' , 'style', 'sass'),
    dest: path.join(__dirname, 'public'),
    debug: true,
    outputStyle: 'compressed',
    force: true, // !important :this allows sassMiddleware to watch for changes
    prefix:  '/public'  // Where prefix is at <link rel="stylesheets" href="prefix/style.css"/>
}));


//Serve Static Dirs
app.use('/src', express.static(path.join(__dirname, 'src'))); //needed for sass
app.use(express.static('src'));//all other assets like images
app.use(express.static('public'));//all other assets like images


//===== ROUTES  ======
//  (move these into a routes.js file.)
app.get('/', (req, res)=>{
    res.sendFile(__dirname +'/src' + '/views'+'/index.html')
});

app.get('/about', (req, res)=>{
    res.sendFile(__dirname +'/src' + '/views'+'/about.html')
});

app.get('/about/mixes', (req, res)=>{
    res.sendFile(__dirname +'/src' + '/views'+'/mixes.html')
});

app.get('/about/travel', (req, res)=>{
    res.sendFile(__dirname +'/src' + '/views'+'/travel.html')
});

app.get('/about/heroes', (req, res)=>{
    res.sendFile(__dirname +'/src' + '/views'+'/heroes.html')
});


const port = process.env.PORT || 8080;
app.listen(port, ()=>{
    console.log( `Server running on port ${port}` );
});
