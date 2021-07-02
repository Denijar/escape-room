// Import dependencies
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import http from "http";
import path from "path";
import { Server as IOServer, Socket } from "socket.io";
import mongoose from "mongoose";
import type { SyncStatus } from "./common/event-data-types";
import registerSyncHandler from "./server/handlers/sync.handler";
import registerMazeHandler from "./server/handlers/maze.handler";

// connect to database

// Import routes
import api from "./server/routes";

require("dotenv").config();

const pw = process.env.MONGO_DB_PW;
const DEFAULT_CONNECTION_STRING = `mongodb+srv://dbUser:${pw}@escaperoom.rllmg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose.connect(DEFAULT_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Setup express
const app = express();
const port = process.env.PORT || 5000;

// This application level middleware prints incoming requests to the servers console, useful to see incoming requests
app.use((req: Request, res: Response, next: NextFunction) => {
  // eslint-disable-next-line no-console
  console.log(`Request_Endpoint: ${req.method} ${req.url}`);
  next();
});

// Setup body-parser
app.use(express.json());

app.use("/", api);

// Configure the CORs middleware
app.use(cors());

// This middleware informs the express application to serve our compiled React files
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client")));

  app.get("*", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "client", "index.html"));
  });
}

// Catch any bad requests
app.get("*", (req: Request, res: Response) => {
  res.sendStatus(404);
});

const server = http.createServer(app);

// Configure our server to listen on the port defined by our port variable
// eslint-disable-next-line no-console
server.listen(port, () => console.log(`BACK_END_SERVICE_PORT: ${port}`));

const io = new IOServer(server);

const syncStatus: SyncStatus = {
  totalMiceDown: 0,
  miceNeeded: 2
};

const onConnection = (socket: Socket) => {
  registerSyncHandler(io, socket, syncStatus);
  registerMazeHandler(io, socket);
};

io.on("connection", onConnection);
