var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(false||'mongodb://3.80.204.187:27017/TodoApp')
module.exports={mongoose};