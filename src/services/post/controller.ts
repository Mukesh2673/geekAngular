
import mongoose = require("mongoose");
import { HTTP400Error, HTTP404Error, HTTP403Error } from "../../utils/httpErrors";
import { JoaUtilities } from "../../utils/JoaUtilities";
import config from "config";
import { userPostModel } from "../../db/userspost";



export const addpost = async (data:any) => {
     try{
        let result = await userPostModel.create(data);
        return { responseCode: 200, responseMessage: 'Success', data: result };
     }
     catch(error){
        throw error;
     }

}
export const getuserPost=async(_id:any)=>{
    try{
        let data: any = await userPostModel.find({ userId: _id });
        return data;
    }
    catch(error){

    }
    /* try{
        let result = await userPostModel.create(data);
        return { responseCode: 200, responseMessage: 'Success', data: result };
     }
     catch(error){
        throw error;
     } */



}

