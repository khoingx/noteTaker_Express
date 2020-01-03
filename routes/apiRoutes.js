var noteData = require("../db/db");

module.exports = function(app) {
    app.get("api/notes" , function (request, response) {
        response.json(noteData);
    });
    
    app.post("api/notes", function(request, response){
        noteData.push(request, body);
        response.json(true);
    });
}

