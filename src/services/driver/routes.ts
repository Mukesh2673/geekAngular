import { Request, Response } from "express";
import { getDriverData, deleteDriver, getDriverDataToUpdate, patchDriver } from "./controller";
import config from "config";
import { checkAuthenticate } from "../../middleware/checks";
const basePath = config.get("BASE_PATH");
const currentPath = "drivers";
const currentPathURL = basePath + currentPath;
export default [
  /*  {
     path: currentPathURL + "/addAdmin",
     method: "post",
     handler: [
       async (req: Request, res: Response) => {
 
         const result = await addAdmin(req.body);
         res.status(200).send(result);
       }
     ]
   }, */
  {
    path: currentPathURL + "/getDriversdata",
    method: "get",
    handler: [
      async (req: Request, res: Response) => {
        const skip = req.query.skip
        const limit = req.query.limit
        const result = await getDriverData(skip, limit);
        res.status(200).send(result);
      }
    ]
  },

  {
    path: currentPathURL + "/getDriverdata/:id",
    method: "get",
    handler: [
      async (req: Request, res: Response) => {
        //console.log('get Admins data from mongoss');
        const result = await getDriverDataToUpdate(req.params.id);
        res.status(200).send(result);
      }
    ]
  },

  {
    path: currentPathURL + '/deleteDriver/:id',
    method: "delete",
    handler: [
      async (req: Request, res: Response) => {
        console.log('get  data to delete', req.params);
        const result = await deleteDriver(req.params.id);
        res.status(200).send(result);
      }
    ]
  },
  {
    path: currentPathURL + '/patchDriver',
    method: "put",
    handler: [
      async (req: Request, res: Response) => {
        const result = await patchDriver(req.body);
        res.status(200).send(result);
      }
    ]
  },

];
