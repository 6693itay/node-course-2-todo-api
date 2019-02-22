const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log("Unable to connect to mongodb server");
    }
    console.log('Connected to mongodb server');
    const db = client.db('TodoApp');

    // db.collection('Todos').find({
    //     _id: new ObjectID("5c6ea5f7399f5329a0ace056")
    // }).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // }, (err)=>{
    //     console.log("Unable to fetch todos",err);
    // });

    // client.close();

    db.collection('Users').find({name:"Tal"}).toArray().then((docs) => {
        // console.log('Todos count: ' + count);
        console.log(JSON.stringify(docs, undefined, 2));
    // }).catch((err) => {
    //     console.log(err);
    });

    client.close();
})