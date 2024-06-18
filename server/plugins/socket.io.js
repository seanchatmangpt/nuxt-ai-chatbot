// server/plugins/socket.io.js

import { Server as Engine } from "engine.io";
import { Server } from "socket.io";
import { defineEventHandler } from "h3";
import { faker } from "@faker-js/faker";

export default defineNitroPlugin((nitroApp) => {
  const engine = new Engine();
  const io = new Server();

  io.bind(engine);

  io.on("connection", (socket) => {
    console.log("A user connected");

    socket.on("message", (msg) => {
      console.log("Message received:", msg);
      io.emit("message", msg);
    });

    socket.on("disconnect", () => {
      console.log("User disconnected");
    });
  });

  // Send mock messages every 5 seconds
  // setInterval(() => {
  //   const mockMessage = faker.lorem.sentence();
  //   io.emit("message", mockMessage);
  //   console.log("Mock message sent:", mockMessage);
  // }, 5000);

  nitroApp.router.use(
    "/socket.io/",
    defineEventHandler({
      handler(event) {
        engine.handleRequest(event.node.req, event.node.res);
        event._handled = true;
      },
      websocket: {
        open(peer) {
          const nodeContext = peer.ctx.node;
          const req = nodeContext.req;

          // @ts-expect-error private method
          engine.prepare(req);

          const rawSocket = nodeContext.req.socket;
          const websocket = nodeContext.ws;

          // @ts-expect-error private method
          engine.onWebSocket(req, rawSocket, websocket);
        },
      },
    }),
  );
});
