const { ObjectId } = require("mongodb");

const { Database}= require('../database');


const COLLECTION= 'users';

const getAll= async() => {
    const collection = await Database(COLLECTION);
    return await collection.find({}).toArray();
}

const getById= async(id) => {
    const collection = await Database(COLLECTION);
    return  collection.findOne({ _id: new ObjectId(id)});
}

const create =  async(product) =>{
    const collection = await Database(COLLECTION);
    let result= await collection.insertOne(product);
    return  result.insertedId;
}


module.exports.UserService = {
    getAll,
    getById,
    create,
};