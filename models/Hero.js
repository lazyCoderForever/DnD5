const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
    code:{type:String, required: true, unique:true},
    dataHero: {type:Object, required:true},
    owner: {type: Types.ObjectId, ref: 'User'}
    
});

module.exports = model('Hero', schema);