import { readFileSync } from "fs";
import { join } from "path";

export default defineEventHandler(() => {
  const logFilePath = join(
    "/Users/sac/dev/dspygen/src/dspygen/agents/gantt_agents/logs/gantt_agent.log",
  );
  const logs = readFileSync(logFilePath, "utf8");
  return { logs };
});
