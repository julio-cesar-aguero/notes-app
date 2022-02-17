const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NotesSchema = new Schema({
    title: String,
    content: String,
    state: {
            type: Boolean,
            default: false
        },
        id_user: {
            ref:'User',
            type:Schema.Types.ObjectId
    }
})

let Notes = mongoose.model('Note', NotesSchema) 
module.exports = Notes;