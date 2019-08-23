const MongoClient= require('mongodb').MongoClient;
const assert= require('assert');

const url='mongodb://localhost:27017/';
const dbname= 'shyam';

MongoClient.connect(url,(err ,client)=>{


assert.equal(err,null);
console.log('connecterd to the server');

const db = client.db(dbname);
const collection=db.collection('details');
/*collection.insertOne({"name":"devilal","age":"20"},(err,result)=>{
	assert.equal(err,null);
	console.log(result.ops);
	collection.find({}).toArray((err,docs)=>{
		assert.equal(err,null);
console.log('found:\n');
console.log(docs);*/
db.dropCollection('details',(err,result)=>{
	assert.equal(err,null);
	console.log(result.ops +"\n dropped");
client.close();
}); 
client.close();


});