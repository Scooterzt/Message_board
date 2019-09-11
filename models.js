const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Message_Board', {useNewUrlParser: true});

const CommentSchema = new mongoose.Schema({
    c_name: {type: String, required: [true,"We don't like noName pesrons here :("], minlength: 2},
    comment_text: {type: String, required: [true, "You can't send empty comments"], minlength: 10},
    },{timestamps: true});

const MessageSchema = new mongoose.Schema({
    m_name: {type: String, required: [true,"We don't like noName pesrons here :("], minlength: 2},
    message_text: {type: String, required: [true, "You can't send empty message"], minlength: 10},
    comments: [CommentSchema]
    },{timestamps: true});
const Message = mongoose.model('Message', MessageSchema);
module.exports = Message;