import rxdb from "./modules/rxdb.js";
import server from "./modules/server.js";

export default async function createServer(sitesPath: string, port?: number) {
  await rxdb.boot();
  server(sitesPath, port);
}
