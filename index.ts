import { Status } from "https://deno.land/std@0.127.0/http/http_status.ts";
import { Message, SendMessageParams, User } from "./types.ts";

class TelegramBotAPI {
  private botToken: string;
  private methodURL: string;

  constructor(botToken: string) {
    this.botToken = botToken;
    this.methodURL = `https://api.telegram.org/bot${this.botToken}`;
  }

  /**
   * A simple method for testing your bot's authentication token.
   * Requires no parameters.
   * Returns basic information about the bot in form of a User object.
   */
  async getMe(): Promise<User> {
    const response = await fetch(`${this.methodURL}/getMe`);
    const user = await response.json() as unknown as User;

    return user;
  }

  /**
   * Use this method to log out from the cloud Bot API server before launching the bot locally.
   * You must log out the bot before running it locally,
   * otherwise there is no guarantee that the bot will receive updates. After a successful call,
   * you can immediately log in on a local server,
   * but will not be able to log in back to the cloud Bot API server for 10 minutes.
   * Returns True on success. Requires no parameters.
   */
  async logOut(): Promise<boolean> {
    const response = await fetch(`${this.methodURL}/logOut`);

    return response.status === Status.OK;
  }

  /**
   * Use this method to close the bot instance before moving it from one local server to another.
   * You need to delete the webhook before calling this method to ensure that the bot isn't launched
   * again after server restart. The method will return error 429 in the first 10 minutes after the bot is launched.
   * Returns True on success. Requires no parameters.
   */
  async close(): Promise<boolean> {
    const response = await fetch(`${this.botToken}/close`);

    return response.status === Status.OK;
  }

  async sendMessage(params: SendMessageParams): Promise<Message> {
    const response = await fetch(`${this.methodURL}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });
    const message = await response.json() as unknown as Message;

    return message;
  }
}

export default TelegramBotAPI;
