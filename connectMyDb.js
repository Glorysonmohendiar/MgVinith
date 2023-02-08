


async function getStudentData(){
    const {MongoClient} = require('mongodb');
  const url = 'mongodb://localhost:27017';
  const database = 'mydb';
  const client = new MongoClient(url);
  
    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection('student');
    let response = await (collection.find({}).toArray())
    //console.log(response);
    return response;
  }
  //console.log(getStudentData());
  module.exports = getStudentData;
  