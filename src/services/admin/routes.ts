import { Request, Response } from "express";
import { addUser,addAdmin,getAdminData,deleteAdmin,getAdminDataToUpdate,patchAdmin} from "./controller";
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
        const skip=req.query.skip
        const limit=req.query.limit
          const result = await getAdminData(skip,limit);
          res.status(200).send(result);
      }
    ]
  },
  {
    path: currentPathURL + "/getAdmindata/:id",
    method: "get",
    handler: [
      async (req: Request, res: Response) => {
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
          const result = await deleteAdmin(req.params.id);
          res.status(200).send(result);
      }
    ]
  },
  {
    path: currentPathURL + '/patchAdmin',
    method: "put",
    handler: [
      async (req: Request, res: Response) => {
          const result = await patchAdmin(req.body);
          res.status(200).send(result);
      }
    ]
  },
  
];
