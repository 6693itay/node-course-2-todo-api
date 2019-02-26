var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(false||'mongodb://Itay:1212@cluster0-shard-00-00-xlmna.mongodb.net:27017,cluster0-shard-00-01-xlmna.mongodb.net:27017,cluster0-shard-00-02-xlmna.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true')
module.exports={mongoose};