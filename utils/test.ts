import { codingAgent } from "./agent";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

// codingAgent("Tell me how the agent.ts works")
codingAgent("Please can you add the contributing section to the readme")
  .then(console.log)
  .catch(console.error);