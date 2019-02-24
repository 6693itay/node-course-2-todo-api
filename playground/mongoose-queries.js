const {ObjectID}=require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

var id = '5c727aba478d491e5090d3c2';

if(!ObjectID.isValid(id)){
    console.log('ID not valid');
}
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo :', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (todo) {
//         return console.log('Todo By Id', todo);
//     }
//     console.log('Id not found');
// }).catch((e) => console.log(e))

User.findById('5c718b45174e5a3840e01f43').then(user=>{
    if(!user){
        return console.log('Id not found');
    }
    console.log("User By Id",user)
}).catch(err => console.log(err));



