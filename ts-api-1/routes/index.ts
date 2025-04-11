import express from "express";

import homeRouteRegister from "./home";
import userRouteRegister from "./user";

export default (app: express.Application) => {
  homeRouteRegister(app);
  userRouteRegister(app);
};
