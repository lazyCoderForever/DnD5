const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
    email:{type:String, required: true, unique: true},
    password: {type:String, required:true},
    heroes: {type: Types.ObjectId, ref: 'Hero'}
});

module.exports = model('User', schema);



  