import { createServer, proxy } from "vercel-node-server";
import app from "../src/app";

export default createServer(app);
