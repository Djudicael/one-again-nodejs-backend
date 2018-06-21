var mongoose = require('mongoose');
var KanBanListSchema = new mongoose.Schema({
   
    listCards: [

        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'ListCard'
        }

    ],
    created: {
        type: Date,
        default: Date.now
    }
});
mongoose.model('KanBanList', KanBanListSchema);

module.exports = mongoose.model('KanBanList');