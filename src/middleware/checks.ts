import { Request, Response, NextFunction } from "express";
import { HTTP400Error, HTTP403Error } from "../utils/httpErrors";
import config from "config";
import { JoaUtilities } from "../utils/JoaUtilities";

export const checkSearchParams = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.query.q) {
    throw new HTTP400Error("Missing q parameter");
  } else {
    next();
  }
};

export const checkAuthenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token: any = req.get(config.get("AUTHORIZATION"));
  // if(!token){
  //   throw new HTTP400Error({responseCode:400,responseMessage:"Token required"});
  // }

  return JoaUtilities.verifyToken(token)
    .then((result) => {
      next();
    })
    .catch((error) => {
      //console.log("error",error.message);
      throw new HTTP403Error({responseCode:403,responseMessage:error.message});
    });
};
