const assert=require('assert');
exports.insertDocument=(db,document,collection,callback)=>{
const coll =db.collection(collection);
coll.insertOne(document,(err,result)=>{
	assert.equal(err,null);
	console.log("inserted in"+collection+"with"+"following details\n"+result.result.n);
	callback(result);
});


};
exports.findDocument=(db,collection,callback)=>{
const coll =db.collection(collection);
coll.find({}).toArray((err, docs) => {
        assert.equal(err, null);
        callback(docs);        
    });
};
exports.removeDocument=(db,document,collection,callback)=>{
	const coll =db.collection(collection);
	coll.deleteOne(document,(err,docs)=>
	{
    assert.equal(err,null);
		console.log(collection);
		callback(docs);
	})


};
exports.updateDocument=(db,document,update,collection,callback)=>{

const coll =db.collection(collection);
coll.updateOne(document,{$set:update},null,(err,result)=>{

	assert.equal(err,null);
	console.log("updated with"+update);
	callback(result);


})
};