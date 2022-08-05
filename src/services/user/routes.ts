import { Request, Response } from "express";
import { addUser, getUserList, getUserDetail, deleteUser, updateStatus, uploadImg} from "./controller";
import config from "config";
import { checkAuthenticate } from "../../middleware/checks";

const basePath = config.get("BASE_PATH");
const currentPath = "users";
const currentPathURL = basePath + currentPath;

export default [
  {
    path: currentPathURL,
    method: "post",
    handler: [
      checkAuthenticate,
      async (req: Request, res: Response) => {
        const result = await addUser(req.get(config.get('AUTHORIZATION')),req.body);
        res.status(200).send(result);
      }
    ]
  },
  {
    path: currentPathURL,
    method: "get",
    handler: [
      checkAuthenticate,
      async (req: Request, res: Response) => {
        const result = await getUserList(req.get(config.get('AUTHORIZATION')),req.query);
        res.status(200).send(result);
      }
    ]
  },
  {
    path: currentPathURL + '/detail/:id',
    method: "get",
    handler: [
      checkAuthenticate,
      async (req: Request, res: Response) => {
        const result = await getUserDetail(req.params.id);
        res.status(200).send(result);
      }
    ]
  },  
  {
    path: currentPathURL + '/:id',
    method: "delete",
    handler: [
      checkAuthenticate,
      async (req: Request, res: Response) => {
        const result = await deleteUser(req.params.id);
        res.status(200).send(result);
      }
    ]
  },

  {
    path: currentPathURL + '/updateStatus/:id',
    method: "post",
    handler: [
      checkAuthenticate,
      async (req: Request, res: Response) => {
        const result = await updateStatus(req.body, req.params.id);
        res.status(200).send(result);
      }
    ]
  },
  
  {
    path: currentPathURL+'/profile',
    method: "get",
    handler: [
      checkAuthenticate,
      async (req: Request, res: Response) => {
      const result = await uploadImg(req.body);
        res.status(200).send(result);
      }
    ]
  }




];
