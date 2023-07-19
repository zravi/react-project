import mongoose from 'mongoose';

//var url="mongodb://127.0.0.1:27017/pixx";
var url = "mongodb+srv://ravi:uQS6eh7eYRpdUaXu@cluster0.fhq6hee.mongodb.net/Cluster0?retryWrites=true&w=majority";

mongoose.set('strictQuery', true);
try {
    mongoose.connect(url);
    console.log("Successfully connected to mongodb database");
} catch (err) { console.log(err) }