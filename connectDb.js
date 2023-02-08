


async function getData(){
  const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const database = 'Mg-Vinith';
const client = new MongoClient(url);

  let result = await client.connect();
  let db = result.db(database);
  let collection = db.collection('newCharacter');
  let response = await (collection.find({}).toArray())
  //console.log(response);
  return response;
}
//console.log(getData());
module.exports = getData;
