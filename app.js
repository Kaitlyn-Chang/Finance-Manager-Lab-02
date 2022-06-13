//set up the server
const express = require( "express" );
const logger = require("morgan");
const app = express();
const port = 8080;


//configure express to parse URL-encoded POST request bodies (traditional forms)
//included in express
app.use(express.urlencoded({extended: false}));

// define middleware that logs all incoming requests
app.use(logger("dev"));

// define middleware that serves static resources in the public directory
app.use(express.static(__dirname + '/public'));

// define a route for the default home page
app.get( "/", ( req, res ) => {
    res.sendFile( __dirname + "/views/index.html" );
} );

// define a route for the stuff inventory page
app.get( "/home", ( req, res ) => {
    res.sendFile( __dirname + "/views/home.html" );
} );

// define a route for the item detail page
app.get( "/stuff/item", ( req, res ) => {
    res.sendFile( __dirname + "/views/item.html" );
} );

const insert_stuff_sql = `
INSERT INTO STUFF
    (item, quantity)
VALUES
    (?,?)
`

// start the server
app.listen( port, () => {
    console.log(`App server listening on ${ port }. (Go to http://localhost:${ port })` );
} );