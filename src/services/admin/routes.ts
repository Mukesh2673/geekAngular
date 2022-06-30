import { Request, Response } from "express";
import { addUser,addAdmin,getAdminData,deleteAdmin,getAdminDataToUpdate} from "./controller";
import config from "config";
import { checkAuthenticate } from "../../middleware/checks";


const basePath = config.get("BASE_PATH");
const currentPath = "admins";
const currentPathURL = basePath + currentPath;

export default [
  {
    path: currentPathURL + "/addAdmin",
    method: "post",
    handler: [
      async (req: Request, res: Response) => {

        const result = await addAdmin(req.body);
        res.status(200).send(result);
      }
    ]
  },
  {
    path: currentPathURL + "/getAdmindata",
    method: "get",
    handler: [
      async (req: Request, res: Response) => {
          console.log('get Admins data from mongoss');
          const result = await getAdminData();
          res.status(200).send(result);
      }
    ]
  },
  {
    path: currentPathURL + "/getAdmindata/:id",
    method: "get",
    handler: [
      async (req: Request, res: Response) => {
          //console.log('get Admins data from mongoss');
          const result = await getAdminDataToUpdate(req.params.id);
          res.status(200).send(result);
      }
    ]
  },







  {
    path: currentPathURL + '/deleteAdmin/:id',
    method: "delete",
    handler: [
      async (req: Request, res: Response) => {
          console.log('get  data to delete',req.params);
          const result = await deleteAdmin(req.params.id);
          res.status(200).send(result);
      }
    ]
  },






  
];
