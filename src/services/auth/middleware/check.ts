import { Request, Response, NextFunction } from "express";
import { HTTP400Error, HTTP403Error } from "../../../utils/httpErrors";
import Joi, { any } from "joi";
import config from "config";
import { JoaUtilities } from "../../../utils/JoaUtilities";
import { invalidTokenError, errorMessageHander } from "../../../utils/ErrorHandler";

export const validate = (req: Request, res: Response, next: NextFunction) => {
  const schema = Joi.object({
    email: Joi.string().email().trim(true).required().messages({
      "string.empty":"Email can not be empty",
      "string.email":`Email should be a valid email`
    }),
    password: Joi.string().trim(true).required().messages({"string.empty":"Password can not be empty"}),
    role: Joi.string().optional(),
  });
  const { error, value } = schema.validate(req.body, {
    abortEarly: false,
  });
  if (error) {
    //throw new HTTP400Error(error.details);
    //throw new HTTP400Error({responseCode:"400",responseMessage:"error",data:errorMessageHander(error.details)})
    let messageArr = errorMessageHander(error.details);
    throw new HTTP400Error(
      JoaUtilities.sendResponsData({
        code: 400,
        message: messageArr[0],
      })
    );
  } else {
    req.body = value;
    next();
  }
};

export const checkSignup = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const schema = Joi.object({
    firstName: Joi.string().trim(true).required().messages({
      "string.empty":"first name can not be empty",
    }),
    lastName: Joi.string().trim(true).required().messages({
      "string.empty":"last name can not be empty",
    }),
    email: Joi.string().email().trim(true).required().messages({
      "string.empty":"Email can not be empty",
      "string.email":`Email should be a valid email`
    }),
    password: Joi.string().trim(true).required().messages({"string.empty":"Password can not be empty"})
    
  });
  const { error, value } = schema.validate(req.body, {
    abortEarly: false,
  });

  if (error) {
    //throw new HTTP400Error(error.details);
    let messageArr = errorMessageHander(error.details);
    throw new HTTP400Error(
      JoaUtilities.sendResponsData({
        code: 400,
        message: messageArr[0],
      })
    );
  } else {
    req.body = value;
    next();
  }
};

export const checkAuthenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token: any = req.get(config.get("AUTHORIZATION"));
  JoaUtilities.verifyToken(token)
    .then((result) => {
      next();
    })
    .catch((error) => {
      console.log("======  error : ", error);
      //next()
      // throw new HTTP403Error({responseCode:403,responseMessage:error.message, data:{}});
      res
        .status(403)
        .send({ responseCode: 403, responseMessage: error.message, data: {} });
    });
};
