import express, { RequestHandler } from "express";
import inject from "../middlewares/inject.js";
import CustomRequest from "../types/CustomRequest.js";
import route from "../middlewares/route.js";
import { resolve } from "path";

export default function server(sitesPath: string, port = 3000) {
  const sites = resolve(sitesPath);
  const app = express();

  app.use(inject(sites));

  app.use("/assets", (req, res, next) => {
    return (req as CustomRequest).site.asset(req, res, next);
  });

  app.use((req, res, next) => {
    return (req as CustomRequest).site.public(req, res, next);
  });

  app.get("*", route(sites) as RequestHandler);

  app.listen(port, () => {
    console.log("Lead server running on " + port);
  });
}
