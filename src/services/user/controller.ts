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
/**
 * Get User list
 * @param body 
 */

export const getUserList = async (token:any,body: any) => {
    const decoded: any = await JoaUtilities.getDecoded(token);  
        let query:any = { $and: [{ designation: { $ne: "Admin" } }, { isDeleted: false }] };
        let restaurantRes:any = await userModel.findOne({_id:decoded.id});//select({"restaurantId":1,"_id":0})
       
        if(decoded.designation !== 'Admin'){           
            query = { $and: [{ designation: { $ne: "Admin" } },{ _id: { $ne: decoded.id } }, { isDeleted: false },{ restaurantId : { $in : restaurantRes.restaurantId }}] };
        }      
        let totalRecords = await userModel.find(query);
        let userRes = await userModel.find(query).sort({createdAt:-1}).skip(parseInt(body.skip)).limit(parseInt(body.limit));
        if (userRes.length > 0) {
            return { responseCode: 200, responseMessage: 'Success', data: userRes,totalRecord:totalRecords.length };
        } else {
            throw new HTTP404Error({ responseCode: 404, responseMessage: config.get('ERRORS.NO_RECORD_FOUND') });
        }
}
/**
 * Get User detail by User id
 * @param body 
 */
export const getUserDetail = async (id: string) => {
        let userRes = await userModel.findOne({ _id: mongoose.Types.ObjectId(id) });
        if (userRes) {
            return { responseCode: 200, responseMessage: 'Success', data: userRes };
        } else {
            throw new HTTP404Error({ responseCode: 404, responseMessage: config.get('ERRORS.NO_RECORD_FOUND') });
        }
}

/**
 * Delete User
 * @param body 
 */
export const deleteUser = async (id: string) => {
        let userRes: any = await userModel.findOne({ _id: mongoose.Types.ObjectId(id) });
        if (userRes) {
            userRes.isDeleted = true;
            let result = await userRes.save();
            return { responseCode: 200, responseMessage: 'Success', data: result };
        } else {
            throw new HTTP404Error({ responseCode: 404, responseMessage: config.get('ERRORS.UNKNOWN_ERROR') });
        }
}

/**
 * Update User status
 * @param body 
 */
export const updateStatus = async (body: any, id: string) => {    
    let UserRes: any = await userModel.findOne({ _id: mongoose.Types.ObjectId(id) });
    if (UserRes) {
        UserRes.status = body.status;                   
        let result = await UserRes.save();
        return { responseCode: 200, responseMessage: 'Success', data: result };
    } else {
        throw new HTTP404Error({ responseCode: 404, responseMessage: config.get('ERRORS.NO_RECORD_FOUND') });
    }
}
