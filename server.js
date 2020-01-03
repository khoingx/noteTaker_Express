// install dependencies
var express = require("express");
var path = require("path");

// creating an express server at port 3000
var app = express();
var port = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
// app.use(express.static('public'));
// app.use(express.static('public'));

// attach route to the main server
require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);


// use require to include module, js file 
app.listen(port, () => {
    console.log("App listening on http://localhost:" + port);
});
