import '../model/connection.js';
import url from 'url';
import path from 'path';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

//to link schema model
import CategorySchemaModel from '../model/category.model.js';

export var save=async (req,response,next)=>{
  var catname=req.body.catnm
  var caticon=req.files.caticon
  var caticonname=Date.now()+"-"+caticon.name;
  var uploadpath=path.join(__dirname,"../../p/public/assets/uploads/caticons",caticonname);
  caticon.mv(uploadpath);
  var categoryList = await CategorySchemaModel.find();
  var l=categoryList.length;
  var _id=l==0?1:categoryList[l-1]._id+1;
  var categoryDetails={"_id":_id,"catname":catname,"caticonname":caticonname};
  var category = await CategorySchemaModel.create(categoryDetails);
  if(category)
    return response.status(201).json({"msg":"success"});
  else
    return response.status(500).json({error: 'Server Error'}); 
}

export var fetch=async (req,response,next)=>{
  var condition_obj=url.parse(req.url,true).query;
  var categoryList = await CategorySchemaModel.find(condition_obj);
  if(categoryList.length!=0)
    return response.status(201).json(categoryList);
  else
    return response.status(500).json(categoryList);
}

export var deleteCategory=async(request,response,next)=>{
  var id = request.params.id;
  var category = await CategorySchemaModel.find({_id: id});
  if(category.length!=0){
    let result = await CategorySchemaModel.deleteMany({_id:id}); 
    if(result)
     return response.status(201).json({"msg":"success"});
    else
     return response.status(500).json({error: 'Server Error'});
  }
  else
    return response.status(404).json({error: 'Resource not found'});             
}

export var updateCategory=async(request,response,next)=>{
  let categoryDetails = await CategorySchemaModel.findOne({_id: request.body._id});
  //console.log(userDetails);
  if(categoryDetails){
     let id = request.body._id;
     delete request.body._id;
     let category=await CategorySchemaModel.updateOne({_id: id},{$set: request.body});   
     if(category)
      return response.status(201).json({"msg":"success"});
     else
      return response.status(500).json({error: "Server Error"});
  }
  else
   return response.status(404).json({error: "Requested resource not available"});
}

