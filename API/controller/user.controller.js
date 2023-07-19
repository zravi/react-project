import '../model/connection.js';
import * as url from 'url';
import jwt from 'jsonwebtoken';
import sendMail from './email.controller.js';

// schema model
import UserSchemaModel from '../model/user.model.js';

export var save = async (req, response, next) => {
  try {
    var userDetails = req.body
    sendMail(userDetails.email, userDetails.password);
    var userList = await UserSchemaModel.find();
    var l = userList.length;
    var _id = l == 0 ? 1 : userList[l - 1]._id + 1;
    userDetails = { ...userDetails, "_id": _id, "status": 0, "role": "user", "info": Date() };
    var user = await UserSchemaModel.create(userDetails);
    if (user)
      return response.status(201).json({ "result": "User register successfully...." });
    else
      return response.status(500).json({ "result": "Server Error" });
  } catch (err) { console.log(err) }
}

export var fetch = async (req, response, next) => {
  try {
    console.log(req.body)
    var condition_obj = url.parse(req.url, true).query;
    var userList = await UserSchemaModel.find(condition_obj);
    if (userList.length != 0)
      return response.status(201).json(userList);
    else
      return response.status(500).json(userList);
  } catch (err) { console.log(err) }
}

export var deleteUser = async (request, response, next) => {
  try {
    console.log(request.body, request.params)
    var id = request.params.id;
    var user = await UserSchemaModel.find({ _id: id });
    if (user.length != 0) {
      let result = await UserSchemaModel.deleteMany({ _id: id });
      if (result)
        return response.status(201).json({ "msg": "success" });
      else
        return response.status(500).json({ error: 'Server Error' });
    }
    else
      return response.status(404).json({ error: 'Resource not found' });
  } catch (err) { console.log(err) }
}

// export var updateUser=async(request,response,next)=>{
//   let userDetails = await UserSchemaModel.findOne(request.body.condition);
//   //console.log(response);
//   if(userDetails){
//      let user=await UserSchemaModel.updateOne(request.body.condition,{$set: request.body.set});   
//      if(user)
//       return response.status(201).json({"msg":"success"});
//      else
//       return response.status(500).json({error: "Server Error"});
//   }
//   else
//    return response.status(404).json({error: "Requested resource not available"});
// }


export var updateUser = async (request, response, next) => {
  try {
    console.log(request.body, request.params)
    const id = request.params.id;
    const condition = id ? { _id: id } : request.body.condition;
    const userDetails = await UserSchemaModel.findOne(condition);

    if (userDetails) {
      const updateQuery = id ? request.body : { $set: request.body.set };
      const user = await UserSchemaModel.updateOne(condition, updateQuery);

      if (user) {
        return response.status(201).json({ "msg": "success" });
      } else {
        return response.status(500).json({ error: "Server Error" });
      }
    } else {
      return response.status(404).json({ error: "Requested resource not available" });
    }
  } catch (err) { console.log(err) }
};

// export var updateUser=async(request,response,next)=>{
//   let userDetails = await UserSchemaModel.findOne(request.body.condition);
//   //console.log(response);
//   if(userDetails){
//      let user=await UserSchemaModel.updateOne(request.body.condition,{$set: request.body.set});   
//      if(user)
//       return response.status(201).json({"msg":"success"});
//      else
//       return response.status(500).json({error: "Server Error"});
//   }
//   else
//    return response.status(404).json({error: "Requested resource not available"});
// }

export var login = async (req, response, next) => {
  try {
    console.log(req.body)
    var userDetails = req.body;
    userDetails = { ...userDetails, "status": 1 };
    var userList = await UserSchemaModel.find(userDetails);
    if (userList.length != 0) {
      let payload = { "subject": userList[0].email };
      let token = jwt.sign(payload, "TOKEN");
      return response.status(201).json({ "token": token, "userDetails": userList[0] });
    }
    else
      return response.json({ "token": "error" });
  } catch (err) { console.log(err) }
}


/*

delete -----------

Product.deleteOne({_id: id}).then(result=>{
    return response.status(203).json(product[0]);
}).catch(err=>{
    return response.status(500).json({error: 'Server Error'});
});

*/