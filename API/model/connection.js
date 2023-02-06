import mongoose from 'mongoose';

mongoose.set('strictQuery', true);
var url="mongodb://127.0.0.1:27017/pixx";
mongoose.connect(url);
console.log("Successfully connected to mongodb database");
