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
        // if(!decoded.role.includes("4")){
        //     throw new HTTP403Error(JoaUtilities.sendResponsData({code: 403, message: config.get('ERRORS.DO_NOT_HAVE_PERMISSION')}));
        // }

        let isExist: any = await userModel.findOne({ email: body.email });        
        if (!isExist) {
            body.password = await JoaUtilities.cryptPassword(body.password);
            let result = await userModel.create(body);
            return { responseCode: 200, responseMessage: 'Success', data: result };
        } else {
            throw new HTTP400Error({responseCode:400,responseMessage:config.get('ERRORS.USER_ERRORS.USER_EXISTS')});
        }
} 

export const getAdminData = async () => {
    console.log('calladmint data from mongodb');
    let data: any = await userModel.find({role:['Admin'] });
    return data;  
} 

































export const addAdmin = async (body:any) => {

    
    //let pass = await JoaUtilities.cryptPassword("Qwerty@1");
    //const decoded: any = await JoaUtilities.getDecoded(token);
    //console.log('decoded',decoded)
    console.log('email',body.email)


    //let userRes: any = await userModel.findOne({ email: "admin@gmail.com" });
    let isExist: any = await userModel.findOne({ email: body.email });        
    if (!isExist) {
        console.log('notexist dataa',isExist)
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
