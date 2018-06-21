var mongoose = require('mongoose');
var  bcrypt = require('bcrypt');

/**
 * User Schema
 */
var UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        first: {
            type: String,
            required: true,
            trim: true
        },
        last: {
            type: String,
            required: true,
            trim: true
        }
    },
    phone: Number,
    username: {
        type: String,
        unique: 'testing error message',
        required: 'Please fill in a username',
        trim: true
    },
    updated: {
        type: Date
    },
 
    friends: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    }],
    created: {
        type: Date,
        default: Date.now
    },
     /* For reset password */
     resetPasswordToken: {
        type: String
    },
    resetPasswordExpires: {
        type: Date
    },
    roles: {
        type: [{
            type: String,
            enum: ['user', 'admin']
        }],
        default: ['user']
    },
    accessToken: {
        type: String
    }//, // Used for Remember Me
    //Special kanban
    //lists: [listSchema]

});

UserSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');