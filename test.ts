import TelegramBotAPI from "./index.ts";
import { serve } from "https://deno.land/std@0.127.0/http/server.ts";
import { Status } from "https://deno.land/std@0.127.0/http/http_status.ts";
import Router from "./test-deno-native.router.ts";
import { TelegramUpdate } from "./types.ts";

const api = new TelegramBotAPI(
  "5006142706:AAGa6u5juOYQOYKyAfjB5kc-VJ1ziMfxSEs",
);

await api.deleteWebhook({ drop_pending_updates: true });

// Setup webhook
const webhookInfo = await api.getWebhookInfo();


if (!webhookInfo.url) {
  await api.setWebhook({ url: "https://f33d-148-103-49-240.ngrok.io" });
}
const router = new Router();

router.add("POST", "/", async function (request): Promise<Response> {
  const body = await request.json() as TelegramUpdate;
  
  // await api.sendMessage({
  //   chat_id: body.message?.chat.id!,
  //   text: `Hi ${body.message?.from?.first_name}. This is the Deno Telegram Bot 🤖`, 
  // });

  await api.sendLocation({
    chat_id: body.message?.chat.id!,
    latitude: 50.4021702,
    longitude: 30.3926091
  });

  return new Response(null, {
    headers: { "Content-Type": "application/json" },
    status: Status.OK,
  });
});

console.log("Deno(🦕) Server Running on: http://localhost:8080");
await serve((req) => router.route(req), { port: 8080 });
