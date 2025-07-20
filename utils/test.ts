import { codingAgent } from "./agent";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

codingAgent("Tell me how the agent.ts works")
  .then(console.log)
  .catch(console.error);