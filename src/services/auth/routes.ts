import { Request, Response, NextFunction } from "express";
import { logout, login, register, forgotPassword, resetPassword,changePassword, test, createAdmin, updateProfile } from "./controller";
import config from "config";
import { validate, checkAuthenticate, checkSignup } from "./middleware/check";
const basePath = config.get("BASE_PATH");
const currentPath = "auth";
const currentPathURL = basePath + currentPath;

export default [
  {
    path: currentPathURL + "/createAdmin",
    method: "get",
    handler: [
      async (req: Request, res: Response, next: NextFunction) => {
        const result = await createAdmin();
        res.status(200).send(result);
      },
    ],
  },
  //  logout  //
  {
    path: currentPathURL + "/logout",
    method: "post",
    handler: [
      checkAuthenticate,
      async (req: Request, res: Response) => {
        const result = await logout(req.get(config.get("AUTHORIZATION")));
        res.status(200).send(result);
      },
    ],
  },

  //  login  //
  {
    path: currentPathURL + "/login",
    method: "post",
    handler: [
      validate,
      async (req: Request, res: Response, next: NextFunction) => {
        const result = await login(req.body, res, next);
        res.status(200).send(result);
      },
    ],
  },

  //  register  //
  {
    path: currentPathURL + "/register",
    method: "post",
    handler: [
      checkSignup,
      async (req: Request, res: Response, next: NextFunction) => {
        const result = await register(req.body, res, next);
        res.status(200).send(result);
      },
    ],
  },
  {
    path: currentPathURL + '/change-password',
    method: "post",
    handler: [
      checkAuthenticate,
      async (req: Request, res: Response) => {
        const result = await changePassword(req.get(config.get('AUTHORIZATION')), req.body.currentPassword, req.body.password);
        res.status(200).send(result);
      }
    ]
  },

  //  forget password  //
  {
    path: currentPathURL + '/forgotPassword',
    method: "post",
    handler: [
      async (req: Request, res: Response) => {
        const result = await forgotPassword(req.body);
        res.status(200).send(result);
      }
    ]
  },
  {
    path: currentPathURL + '/resetPassword',
    method: "post",
    handler: [
      async (req: Request, res: Response) => {
        const result = await resetPassword(req.body.token, req.body);
        res.status(200).send(result);
      }
    ]
  },
  {
    path: currentPathURL + "/test",
    method: "get",
    handler: [
      async (req: Request, res: Response, next: NextFunction) => {
        const result = await test(req.body, res, next);
        res.status(200).send(result);
      },
    ],
  },
  {
    path: currentPathURL + "/update",
    method: "post",
    handler: [
      async (req: Request, res: Response, next: NextFunction) => {
         

        const result = await updateProfile(req.body);
        //res.status(200).send(result);
          
          }
        
        
        ]
          
         




        //const result = await test(req.body, res, next);
        //res.status(200).send(result);
   
  },






];
