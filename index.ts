import {
  DeleteWebHookParams,
  Message,
  SendMessageParams,
  SetWebHookParams,
  User,
  WebhookInfo,
} from "./types.ts";

class TelegramBotAPI {
  private botToken: string;
  private methodURL: string;

  constructor(botToken: string) {
    this.botToken = botToken;
    this.methodURL = `https://api.telegram.org/bot${this.botToken}`;
  }

  /**
   * Use this method to specify a url and receive incoming updates via an outgoing webhook.
   * Whenever there is an update for the bot, we will send an HTTPS POST request to the specified url,
   * containing a JSON-serialized Update. In case of an unsuccessful request, we will give up after a
   * reasonable amount of attempts. Returns True on success.
   */
  async setWebhook(params: SetWebHookParams): Promise<boolean> {
    const response = await fetch(`${this.methodURL}/setWebhook`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });
    const payload = await response.json();

    return payload.result as boolean;
  }

  /**
   * Use this method to remove webhook integration if you decide to switch back to getUpdates.
   * Returns True on success.
   */
  async deleteWebhook(params?: DeleteWebHookParams): Promise<boolean> {
    const response = await fetch(`${this.methodURL}/deleteWebhook`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });
    const payload = await response.json();

    return payload.result as boolean;
  }

  /**
   * Use this method to get current webhook status. Requires no parameters. On success,
   * returns a WebhookInfo object. If the bot is using getUpdates, will return an object with the url field empty.
   */
  async getWebhookInfo(): Promise<WebhookInfo> {
    const response = await fetch(`${this.methodURL}/getWebhookInfo`);
    const payload = await response.json();

    return payload.result as WebhookInfo;
  }

  /**
   * A simple method for testing your bot's authentication token.
   * Requires no parameters.
   * Returns basic information about the bot in form of a User object.
   */
  async getMe(): Promise<User> {
    const response = await fetch(`${this.methodURL}/getMe`);
    const payload = await response.json();

    return payload.result as User;
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
    const payload = await response.json();

    return payload.result as boolean;
  }

  /**
   * Use this method to close the bot instance before moving it from one local server to another.
   * You need to delete the webhook before calling this method to ensure that the bot isn't launched
   * again after server restart. The method will return error 429 in the first 10 minutes after the bot is launched.
   * Returns True on success. Requires no parameters.
   */
  async close(): Promise<boolean> {
    const response = await fetch(`${this.botToken}/close`);
    const payload = await response.json();

    return payload.result as boolean;
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
