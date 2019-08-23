const MongoClient= require('mongodb').MongoClient;
const assert= require('assert');

const url='mongodb://localhost:27017/';
const dbname= 'shyam';
const dboper = require('./operations');
MongoClient.connect(url,(err ,client)=>{


assert.equal(err,null);
console.log('connecterd to the server');
const db = client.db(dbname);
const collection=db.collection('details');

dboper.insertDocument(db, { name: "rahul", age: "24"},
        "details", (result) => {
            console.log("Insert Document:\n", result.ops);

       dboper.findDocument(db, "details", (docs) => {
                console.log("Found Documents:\n", docs);

                dboper.updateDocument(db, { name: "rahul" },
                    { age: "29" }, "details",
                    (result) => {
                        console.log("Updated Document:\n", result.result);

                        dboper.findDocument(db, "details", (docs) => {
                            console.log("Found Updated Documents:\n", docs);
                            
                            /*db.dropCollection("details", (result) => {
                                console.log("Dropped Collection: ",result);*/ client.close();

});
});
});
});
});