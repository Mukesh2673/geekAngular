import { Request, Response, NextFunction } from 'express';
import config from 'config';
import { HTTP400Error, HTTP403Error } from '../utils/httpErrors';
import { JoaUtilities } from '../utils/JoaUtilities';

export const checkAdmin = async (req: Request, res: Response, next: NextFunction) => {
  const decoded: any = await JoaUtilities.getDecoded(
    req.get(`${config.get('AUTHORIZATION')}`)
  );

  if (decoded.designation !== 'Admin') {
    throw new HTTP403Error(config.get('ERROR.AUTH_RELATED.NO_PRIVILEGE'));
  }

  next();
};
