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




export const deleteDriver = async (id: any) => {
    await userModel.findByIdAndDelete(id);
} 

//admin data

export const getDriverData = async () => {
    let data: any = await userModel.find({role:['Driver'] });
    return data;  
} 
//send data to update 
export const getDriverDataToUpdate = async (id: any) => {
  let data:any=await userModel.find({_id:id});
  return data;
} 

//update Admin data 
export const patchDriver=async(data:any)=>{
  await userModel.findByIdAndUpdate(data.id, { firstName: data.firstName,lastName:data.lastName,
  email:data.email
  },
function (err, docs) {
    if (err){
        console.log('erroror',err)
    }
    else{
        return docs;
    }
});
}
