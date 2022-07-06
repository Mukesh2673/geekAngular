import { userModel } from "../../db/User";
import mongoose = require("mongoose");
import { HTTP400Error, HTTP404Error, HTTP403Error } from "../../utils/httpErrors";
import { JoaUtilities } from "../../utils/JoaUtilities";
import config from "config";
/**
 * Create User
 * @param body 
 */
export const addUser = async (token:any,body: any) => {
        const decoded: any = await JoaUtilities.getDecoded(token);
        if(body.designation =='Admin'){
            throw new HTTP400Error({responseCode:400,responseMessage:config.get('ERRORS.USER_ERRORS.INVALID_DESIGNATION')});
        }


        let isExist: any = await userModel.findOne({ email: body.email });        
        if (!isExist) {
            body.password = await JoaUtilities.cryptPassword(body.password);
            let result = await userModel.create(body);
            return { responseCode: 200, responseMessage: 'Success', data: result };
        } else {
            throw new HTTP400Error({responseCode:400,responseMessage:config.get('ERRORS.USER_ERRORS.USER_EXISTS')});
        }
} 

export const deleteAdmin = async (id: any) => {
    await userModel.findByIdAndDelete(id);
} 

//admin data

export const getAdminData = async (skip:any,limit:any) => {
    
  try {
        skip=parseInt(skip);
        limit=parseInt(limit);
        var totalCount
        userModel.countDocuments({role:['Admin'] }, function(err, count) {
         totalCount=count
     });
        
        
        let item: any = await userModel.find({role:['Admin'] }).limit(limit).skip(skip);
        let data={
          item:item,
          totals:totalCount,
          status:'success'
        }
        return data;  


  } catch (e) {
    console.log(e);
    return e;
}
  
  
  
  
  
  
  

} 
//send data to update 
export const getAdminDataToUpdate = async (id: any) => {
  let data:any=await userModel.find({_id:id});
  return data;
} 

//update Admin data 
export const patchAdmin=async(data:any)=>{
  await userModel.findByIdAndUpdate(data.id, { firstName: data.firstName,lastName:data.lastName,
  email:data.email
  },
function (err, docs) {
    if (err){
        console.log('error',err)
    }
    else{
        return docs;
    }
});
}
export const addAdmin = async (body:any) => {
    //let pass = await JoaUtilities.cryptPassword("Qwerty@1");
    //const decoded: any = await JoaUtilities.getDecoded(token);
    //console.log('decoded',decoded)
    //let userRes: any = await userModel.findOne({ email: "admin@gmail.com" });
     
    
    let isExist: any = await userModel.findOne({ email: body.email });        
    if (!isExist) {

        body.password = await JoaUtilities.cryptPassword(body.password);
        //body.password = await JoaUtilities.cryptPassword(body.password);
        let result = await userModel.create(body);
        return { responseCode: 200, responseMessage: 'Success', data: result };
    } else {
        throw new HTTP400Error({responseCode:400,responseMessage:config.get('ERRORS.USER_ERRORS.USER_EXISTS')});
    }
 /*    if (!userRes) {
      let adminArr = [
        {
          firstName: "Admin",
          email: "admin@gmail.com",
          password: pass,
          isDeleted: false,
          role:['Admin']
        },
      ];
      return await userModel.create(adminArr);
    } else {
      return userRes;
    } */
  }
