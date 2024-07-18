import server from "./modules/server.js";

export default function createServer(sitesPath: string, port?: number) {
  server(sitesPath, port);
}
