var mongoose=require('mongoose')
var url="mongodb://localhost:27017/project1"
mongoose.connect(url)
var db=mongoose.connection
console.log("Connection Successfully Done");



module.exports=db