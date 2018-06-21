var mongoose = require('mongoose');  
var CardSchema = new mongoose.Schema({  
    taskName: {
        type: String,
        required: true
    },
    listCardRef: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'ListCard'
    },
    descriptif: String,
    activeman: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    },
    corector: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    },
    created:{
        type: Date,
        default: Date.now
    }
});
mongoose.model('Card', CardSchema);

module.exports = mongoose.model('Card');