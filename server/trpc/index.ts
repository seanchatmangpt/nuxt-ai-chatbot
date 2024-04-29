// server/trpc/index.ts
import { initTRPC } from "@trpc/server";
import { participantRouter } from "./routers/participantRouter";

export const t = initTRPC.create();

export const appRouter = t.router({
  participant: participantRouter,
});

// Export type helpers
export type AppRouter = typeof appRouter;
