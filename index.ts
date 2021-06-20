// Import dependencies
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import http from "http";
import path from "path";
import { Server as IOServer } from "socket.io";
import type { StatusEventData } from "./common/event-data-types";

// Import routes
import api from "./server/routes";

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

let totalMiceDown: number = 0;
const miceNeeded: number = 2;

io.on("connection", (socket) => {
  let statusEventData: StatusEventData = {
    totalMiceDown,
    miceNeeded
  };
  socket.emit("status", statusEventData);

  socket.on("mouse down", () => {
    totalMiceDown += 1;

    statusEventData = {
      totalMiceDown,
      miceNeeded
    };
    io.emit("status", statusEventData);
    if (totalMiceDown === miceNeeded) io.emit("success");
  });

  socket.on("mouse up", () => {
    totalMiceDown -= 1;

    statusEventData = {
      totalMiceDown,
      miceNeeded
    };
    io.emit("status", statusEventData);
    if (totalMiceDown === miceNeeded) io.emit("success");
  });
});
