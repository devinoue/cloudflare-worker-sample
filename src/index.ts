import { handler } from "./handler";

export interface Env {
  API_URL: string;
}

export default {
  async scheduled(
    controller: ScheduledController,
    env: Env,
    ctx: ExecutionContext
  ): Promise<void> {
    ctx.waitUntil(handler(env));
  },
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext
  ): Promise<Response> {
    await handler(env);
    return new Response(JSON.stringify({ message: "success" }));
  },
};
