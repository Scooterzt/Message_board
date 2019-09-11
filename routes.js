const controller = require("./controller");

module.exports = function(app){
    app.get("/", controller.index);
    app.post("/createMessage", controller.newMessage);
    app.post("/createComment/:id", controller.newComment);

};