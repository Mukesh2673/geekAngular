import { NextFunction, Request, Response } from "express";
import {addpost, getuserPost} from "./controller";
import config from "config";
import { checkAuthenticate } from "../../middleware/checks";
import { imgModel } from "../../db/image";
import path from "path";
import multer from "multer";
const basePath = config.get("BASE_PATH");
const currentPath = "post";
const currentPathURL = basePath + currentPath;
const upload = require('../../utils/upload').upload;

export default[
  {
    path: currentPathURL+'/add',
    method: "post",
    handler: [
      async (req: Request, res: Response) => {
        console.log('hiii')
        const result = await addpost(req.body);
        res.status(200).send(result);
      }
    ]
  },
  {
    path: currentPathURL+'/get/:id',
    method: "get",
    handler: [
      async (req: Request, res: Response) => {
        const result = await getuserPost(req.params.id);
        res.status(200).send(result);
      }
    ]
  }
]  
      
    

    

