#!/usr/bin/env node

import { Command } from "commander";
import rxdb from "./modules/rxdb.js";
import server from "./modules/server.js";

const program = new Command();

program
  .name("lead-server")
  .description("Server for running lead project")
  .version("1.0.1");

program
  .command("start")
  .description("Start lead server")
  .argument("<SITES_PATH>", "Available sites directory")
  .option("-p, --port <number>", "Port for lead server run")
  .action(async (path, options) => {
    await rxdb.boot();
    server(path, options.port);
  });

program.parse();
