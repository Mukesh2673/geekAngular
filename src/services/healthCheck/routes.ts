import { Request, Response } from "express";
import config from "config";
import {checkAdmin} from '../../middleware/checkAdmin';

const basePath = config.get("BASE_PATH");
const currentPath = "healthCheck";
const currentPathURL = basePath + currentPath; 


export default [
    {
      path: currentPathURL,
      method: "get",
      handler: [
        async (req: Request, res: Response) => {
          res.status(200).send('OK');
        }
      ]
    }
  
  ];
  