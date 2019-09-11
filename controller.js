const Message = require("./models");

module.exports={
    index: function(request, response){
        console.log("index rout");
        Message.find().sort({createdAt: -1})
        .then(mes=> response.render("index", {allmessages: mes}))
        .catch(err=> {console.log(err); response.render("index");});
    },
    newMessage: function(request, response){
        Message.create(request.body)
        .then(newM =>{
             console.log(newM);
             response.redirect("/");
        })
        .catch(err=> {console.log(err);
            for (var key in err.errors) {
                request.flash('registration', err.errors[key].message);
            }
            response.redirect("/");
        });
    },
    newComment: function(request, response){
        Message.findOneAndUpdate({_id: request.params.id}, {$push: {comments: request.body}})
        .then(newCom=>{console.log(newCom);
            response.redirect("/");})
        .catch(err=> {console.log(err); response.redirect("/");});
    }



};