import {
CopyMessageParams,
  DeleteWebHookParams,
  EditMessageLiveLocationParams,
  ForwardMessageParams,
  Message,
  MessageId,
  SendLocationParams,
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

  private async sendPostRequest<T, K>(method: string, params?: T): Promise<K> {
    const response = await fetch(`${this.methodURL}/${method}`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    });
    const payload = await response.json();

    return payload.result as K;
  }

  private async sendGetRequest<T>(method: string): Promise<T> {
    const response = await fetch(`${this.methodURL}/${method}`);
    const payload = await response.json();

    return payload.result as T;
  }

  /**
   * Use this method to specify a url and receive incoming updates via an outgoing webhook.
   * Whenever there is an update for the bot, we will send an HTTPS POST request to the specified url,
   * containing a JSON-serialized Update. In case of an unsuccessful request, we will give up after a
   * reasonable amount of attempts. Returns True on success.
   */
  setWebhook(params: SetWebHookParams): Promise<boolean> {
    return this.sendPostRequest<SetWebHookParams, boolean>('setWebhook', params);
  }

  /**
   * Use this method to remove webhook integration if you decide to switch back to getUpdates.
   * Returns True on success.
   */
  deleteWebhook(params?: DeleteWebHookParams): Promise<boolean> {
    return this.sendPostRequest<DeleteWebHookParams, boolean>('deleteWebhook', params);
  }

  /**
   * Use this method to get current webhook status. Requires no parameters. On success,
   * returns a WebhookInfo object. If the bot is using getUpdates, will return an object with the url field empty.
   */
  getWebhookInfo(): Promise<WebhookInfo> {
    return this.sendGetRequest<WebhookInfo>('getWebhookInfo');
  }

  /**
   * A simple method for testing your bot's authentication token.
   * Requires no parameters.
   * Returns basic information about the bot in form of a User object.
   */
  getMe(): Promise<User> {
    return this.sendGetRequest<User>('getMe');
  }

  /**
   * Use this method to log out from the cloud Bot API server before launching the bot locally.
   * You must log out the bot before running it locally,
   * otherwise there is no guarantee that the bot will receive updates. After a successful call,
   * you can immediately log in on a local server,
   * but will not be able to log in back to the cloud Bot API server for 10 minutes.
   * Returns True on success. Requires no parameters.
   */
  logOut(): Promise<boolean> {
    return this.sendGetRequest<boolean>('logOut');
  }

  /**
   * Use this method to close the bot instance before moving it from one local server to another.
   * You need to delete the webhook before calling this method to ensure that the bot isn't launched
   * again after server restart. The method will return error 429 in the first 10 minutes after the bot is launched.
   * Returns True on success. Requires no parameters.
   */
  close(): Promise<boolean> {
    return this.sendGetRequest<boolean>('close');
  }

  /**
   * Use this method to send text messages. On success, the sent Message is returned.
   */
  sendMessage(params: SendMessageParams): Promise<Message> {
    return this.sendPostRequest<SendMessageParams, Message>('sendMessage', params);
  }

  /**
   * Use this method to forward messages of any kind. Service messages can't be forwarded.
   * On success, the sent Message is returned.
   */
  forwardMessage(params: ForwardMessageParams): Promise<Message> {
    return this.sendPostRequest<ForwardMessageParams, Message>('forwardMessage', params);
  }

  /**
   * Use this method to copy messages of any kind. Service messages and invoice messages can't be copied.
   * The method is analogous to the method forwardMessage, but the copied message doesn't have a link to the original message.
   * Returns the MessageId of the sent message on success.
   */
  copyMessage(params: CopyMessageParams): Promise<MessageId> {
    return this.sendPostRequest<CopyMessageParams, Message>('copyMessage', params);
  }

  /**
   * Use this method to send point on the map. On success, the sent Message is returned.
   */
  sendLocation(params: SendLocationParams): Promise<Message> {
    return this.sendPostRequest<SendLocationParams, Message>('sendLocation', params);
  }

  editMessageLiveLocation(params: EditMessageLiveLocationParams): Promise<Message | boolean> {
    return this.sendPostRequest<EditMessageLiveLocationParams, Message | boolean>('editMessageLiveLocation', params);
  }
}

export default TelegramBotAPI;
