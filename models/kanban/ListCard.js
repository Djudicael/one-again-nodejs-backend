var mongoose = require('mongoose');
var ListCardSchema = new mongoose.Schema({
    listName: {
        type: String,
        required: true
    },
    listCards: [

        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Card'
        }

    ],
    created: {
        type: Date,
        default: Date.now
    }
});
mongoose.model('ListCard', ListCardSchema);

module.exports = mongoose.model('ListCard');