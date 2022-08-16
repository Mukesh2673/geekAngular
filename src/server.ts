import http from "http";
import express from "express";
import { applyMiddleware, applyRoutes } from "./utils";
import middleware from "./middleware";
import errorHandlers from "./middleware/errorHandlers";
import routes from "./services";
import mongoose = require("mongoose");
import config from "config";
const router = express();
const multer = require("multer");
const upload:any=multer({ dest: "public/upload/" });

router.use(express.static('public/upload'));
/* //make folder static when get data from browser url
and path will be 
http://localhost:3000/e2ae7d16369e4f481d0aaef03bcf69a9-1660047524860.webp
 */

router.use(upload.any());
/* const upload: any = multer({ dest: "temp/" });
router.use(upload.any()); */
applyMiddleware(middleware, router);
applyRoutes(routes, router);
applyMiddleware(errorHandlers, router);

const { PORT = 3000 } = process.env;
const server = http.createServer(router);

mongoose
  .connect(`${config.get("MONGO_CRED.MONGO_PATH")}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    server.listen(PORT);
    console.log(`Server is running http://localhost:${PORT}...`);
  })
  .catch((err) => {
    console.log("inside error block");
    console.log(err);
  });
