import { Env } from "./index";
import { sendMail } from "./sendMail";

type JsonResponse = { Data: string; Time: string; Status: number };

export const handler = async (env: Env) => {
  const res = await fetch("https://csprng.xyz/v1/api");
  const data = await res.json<JsonResponse>();
  await sendMail(env.API_URL, "Test用", data.Data);
};
