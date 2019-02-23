const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log("Unable to connect to mongodb server");
    }
    console.log('Connected to mongodb server');
    const db = client.db('TodoApp');

    //deleteMany
    db.collection('Users').findOneAndUpdate({ name: "Tal" }, {
        $set: {
            name: "Amit"
        },
        $inc:{
            age:1
        }
    }, {
            returnOriginal: false
        }).then((result) => {
            console.log(result);
        });

    //deleteOne

    //findOneAndDelete


    client.close();
})