export type ChatType = "sender" | "private" | "group" | "supergroup" | "channel";

export type TypeEntities =
  | "mention"
  | "hastag"
  | "cashtag"
  | "bot_command"
  | "url"
  | "email"
  | "phone_number"
  | "bold"
  | "italic"
  | "underline"
  | "strikethrough"
  | "spoiler"
  | "code"
  | "pre"
  | "text_link"
  | "text_mention";

export type MaskPositionPoint = "forehead" | "eye" | "mouth" | "chin";

export type PollType = "regular" | "quiz";

export type EncryptedPassportElementType =
  | "personal_details"
  | "passport"
  | "driver_license"
  | "identity_card"
  | "internal_passport"
  | "address"
  | "utility_bill"
  | "bank_statement"
  | "rental_agreement"
  | "passport_registration"
  | "temporary_registration"
  | "phone_number"
  | "email";

export type Contact = {
  phone_number: string;
  first_name: string;
  last_name?: string;
  user_id?: number;
  vcard?: string;
};

export type Dice = {
  emoji: string;
  value: number;
};

export type Game = {
  title: string;
  description: string;
  photo: Array<PhotoSize>;
  text?: string;
  text_entities?: Array<MessageEntity>;
  animation?: TelegramAnimation;
};

export type TelegramAnimation = {
  file_id: string;
  file_unique_id: string;
  width: number;
  height: number;
  duration: number;
  thumb?: PhotoSize;
  file_name?: string;
  mime_type?: string;
  file_size?: number;
};

export type TelegramAudio = {
  file_id: string;
  file_unique_id: string;
  duration: number;
  performer?: string;
  title?: string;
  file_name?: string;
  mime_type?: string;
  file_size?: number;
  thumb?: PhotoSize;
};

export type TelegramDocument = {
  fiel_id: string;
  file_unique_id: string;
  thumb?: PhotoSize;
  file_name?: string;
  mime_type?: string;
  file_size?: number;
};

export type User = {
  can_join_groups?: boolean;
  can_read_all_group_messages?: boolean;
  first_name: string;
  id: number;
  is_bot: boolean;
  language_code?: string;
  last_name?: string;
  supports_inline_queries?: boolean;
  username?: string;
};

export type ChatPhoto = {
  big_file_id: string;
  bit_file_unique_id: string;
  small_file_id: string;
  small_file_unique_id: string;
};

export type Invoice = {
  title: string;
  description: string;
  start_parameter: string;
  currency: string;
  total_amount: number;
};

export type TelegramLocation = {
  longitud: number;
  latitud: number;
  horizontal_accuracy?: number;
  live_period?: number;
  heading?: number;
  proximity_alerts_radius?: number;
};

export type MaksPosition = {
  point: MaskPositionPoint;
  x_shift: number;
  y_shift: number;
  scale: number;
};

export type MessageAutoDeleteTimerChanged = {
  message_auto_delete_time: number;
};

export type MessageEntity = {
  type: TypeEntities;
  offset: number;
  length: number;
  url: string;
  user: User;
  language: string;
};

export type Message = {
  message_id: number;
  from?: User;
  sender_chat?: Chat;
  date: number;
  chat: Chat;
  forward_from?: User;
  forward_from_chat?: Chat;
  forward_from_message_id?: number;
  forward_signature?: string;
  forward_sender_name?: string;
  forward_date?: number;
  is_automatic_forward?: boolean;
  reply_to_message?: Message;
  via_bot?: User;
  edit_date?: number;
  has_protected_content?: boolean;
  media_group_id?: string;
  author_signature?: string;
  text?: string;
  entities?: Array<MessageEntity>;
  animation?: TelegramAnimation;
  audio?: TelegramAudio;
  document?: TelegramDocument;
  photo?: Array<PhotoSize>;
  sticker?: Sticker;
  video?: Video;
  video_note?: VideoNote;
  voice?: Voice;
  caption?: string;
  caption_entities?: Array<MessageEntity>;
  contact?: Contact;
  dice?: Dice;
  game?: Game;
  poll?: Poll;
  venue?: Venue;
  location?: TelegramLocation;
  new_chat_members?: Array<User>;
  left_chat_member?: User;
  new_chat_title?: string;
  new_chat_photo?: Array<PhotoSize>;
  delete_chat_photo?: string;
  group_chat_created?: boolean;
  supergroup_chat_created?: boolean;
  channel_chat_created?: boolean;
  message_auto_delete_timer_changed?: MessageAutoDeleteTimerChanged;
  migrate_to_chat_id?: number;
  migrate_from_chat_id?: number;
  pinned_message?: Message;
  invoice?: Invoice;
  successful_payment?: SuccessfulPayment;
  connected_website?: string;
  passport_data?: PassportData;
  proximity_alert_triggered?: ProximityAlertTriggered;
  voice_chat_scheduled?: VoiceChatScheduled;
  voice_chat_started?: VoiceChatStarted;
  voice_chat_ended?: VoiceChatEnded;
  voice_chat_participants_invited?: VoiceChatParticipantsInvited;
  reply_markup?: InlineKeyboardMarkup;
};

export type MessageId = {
  message_id: number;
};

export type Chat = {
  bio?: string;
  can_set_sticker_set?: boolean;
  description?: string;
  first_name?: string;
  has_private_forwards?: boolean;
  has_protected_content?: boolean;
  id: number;
  invite_link?: string;
  last_name?: string;
  linked_chat_id?: number;
  location?: TelegramLocation;
  message_auto_delete_time?: number;
  permissions?: ChatPermissions;
  pinned_message?: Message;
  photo?: ChatPhoto;
  slow_mode_delay?: number;
  sticker_set_name?: string;
  title?: string;
  type: ChatType;
  username?: string;
};

export type ChatPermissions = {
  can_send_messages?: boolean;
  can_send_media_messages?: boolean;
  can_send_polls?: boolean;
  can_send_other_messages?: boolean;
  can_add_web_page_previews?: boolean;
  can_change_info?: boolean;
  can_invite_users?: boolean;
  can_pin_messages?: boolean;
};

export type InlineKeyboardMarkup = {
  inline_keyboard: Array<Array<InlineKeyboardButton>>;
};

export type InlineKeyboardButton = {
  text: string;
  url?: string;
  login_url?: LoginUrl;
  callback_data?: string;
  switch_inline_query?: string;
  switch_inline_query_current_chat?: string;
  callback_game?: CallbackGame;
  pay?: boolean;
};

export type CallbackGame = Record<never, never>;

export type LoginUrl = {
  url: string;
  forward_text?: string;
  bot_username?: string;
  request_write_access?: boolean;
};

export type VoiceChatStarted = Record<never, never>;

export type VoiceChatEnded = {
  duration: number;
};

export type VoiceChatParticipantsInvited = {
  users?: Array<User>;
};

export type VoiceChatScheduled = {
  start_date: number;
};

export type ProximityAlertTriggered = {
  traveler: User;
  watcher: User;
  distance: number;
};

export type PassportData = {
  data: Array<EncryptedPassportElement>;
  credentials: EncryptedCredentials;
};

export type EncryptedCredentials = {
  data: string;
  hash: string;
  secret: string;
};

export type EncryptedPassportElement = {
  type: EncryptedPassportElementType;
  data?: string;
  phone_number?: string;
  email?: string;
  files?: Array<PassportFile>;
  front_side?: PassportFile;
  reverse_side?: PassportFile;
  selfie?: PassportFile;
  translation?: Array<PassportFile>;
  hash: string;
};

export type PassportFile = {
  file_id: string;
  file_unique_id: string;
  file_size: number;
  file_date: number;
};

export type PhotoSize = {
  file_id: string;
  file_unique_id: string;
  width: number;
  height: number;
  file_size: number;
};

export type Poll = {
  id: string;
  question: string;
  options: Array<PollOption>;
  total_voter_count: number;
  is_closed: boolean;
  is_anonymous: boolean;
  type: PollOption;
  allow_multiple_answers: boolean;
  correct_option_id?: number;
  explanation?: string;
  explanation_entities?: Array<MessageEntity>;
  open_period?: number;
  close_date?: number;
};

export type PollOption = {
  text: string;
  voter_count: number;
};

export type Sticker = {
  file_id: string;
  file_unique_id: string;
  width: number;
  height: number;
  is_animated: boolean;
  is_video: boolean;
  thumb: PhotoSize;
  emoji: string;
  set_name: string;
  mask_position: MaksPosition;
  file_size: number;
};

export type SuccessfulPayment = {
  currency: string;
  total_amout: number;
  invoice_payload: string;
  shipping_option_id?: string;
  order_info?: OrderInfo;
  telegram_payment_charge_id: string;
  provider_payment_charge_id: string;
};

export type OrderInfo = {
  name?: string;
  phone_number?: string;
  email?: string;
  shipping_address?: ShippingAddress;
};

export type ShippingAddress = {
  country_code: string;
  state: string;
  city: string;
  street_line1: string;
  street_line2: string;
  post_code: string;
};

export type Venue = {
  location: TelegramLocation;
  title: string;
  address: string;
  foursquare_id?: string;
  foursquare_type?: string;
  google_place_id?: string;
  google_placeP_type?: string;
};

export type Video = {
  file_id: string;
  file_unique_id: string;
  width: number;
  height: number;
  duration: number;
  thumb?: PhotoSize;
  file_name?: string;
  mime_type?: string;
  file_size?: number;
};

export type VideoNote = {
  file_id: string;
  file_unique_id: string;
  length: number;
  duration: number;
  thumb?: PhotoSize;
  file_size?: number;
};

export type Voice = {
  file_id: string;
  file_unique_id: string;
  duration: number;
  mime_type?: string;
  file_size?: number;
};

export type SendMessageParams = {
  chat_id: number | string;
  text: string;
  parse_mode?: string;
  entities?: Array<MessageEntity>;
  disable_web_page_preview?: boolean;
  disable_notification?: boolean;
  protect_content?: boolean;
  reply_to_message_id?: number;
  allow_sending_without_reply?: boolean;
  reply_markup?:
    | InlineKeyboardMarkup
    | ReplyKeyboardMarkup
    | ReplyKeyboardRemove
    | ForceReply;
};

export type SetWebHookParams = {
  url: string;
  certificate?: Record<never, never>;
  api_address?: string;
  max_connections?: number;
  allow_updates?: Array<string>;
  drop_pending_updates?: boolean;
};

export type DeleteWebHookParams = {
  drop_pending_updates?: boolean;
};

export type WebhookInfo = {
  url: string;
  has_custom_certificate: boolean;
  pending_update_count: number;
  ip_address?: string;
  last_error_date?: number;
  last_error_message?: string;
  max_connections?: number;
  allowed_updates?: Array<string>;
};

export type ForceReply = {
  force_reply: boolean;
  input_field_placeholder?: string;
  selective?: boolean;
};

export type ReplyKeyboardRemove = {
  remove_keyboard: boolean;
  selective?: boolean;
};

export type ReplyKeyboardMarkup = {
  keyboard: Array<Array<KeyboardButton>>;
  resize_keyboard?: boolean;
  one_time_keyboard: boolean;
  input_field_placeholder?: string;
  selective?: boolean;
};

export type KeyboardButton = {
  text: string;
  request_contat?: boolean;
  request_location?: boolean;
  request_poll?: KeyboardButtonPollType;
};

export type KeyboardButtonPollType = {
  type: string;
};

export type TelegramUpdate = {
  update_id: number;
  message?: Message;
  edited_message?: Message;
  channel_post?: Message;
  edited_channel_post?: Message;
  inline_query?: InlineQuery;
  chosen_inline_result?: ChosenInlineResult;
  callback_query?: CallbackQuery;
  shipping_query?: ShippingQuery;
  pre_checkout_query?: PreCheckoutQuery;
  poll?: Poll;
  poll_answer?: PollAnswer;
  my_chat_member?: ChatMemberUpdated;
  chat_member?: ChatMemberUpdated;
  chat_join_request?: ChatJoinRequest;
};

type ChatJoinRequest = {
  chat: Chat;
  from: User;
  date: number;
  bio?: string;
  invite_link?: ChatInviteLink;
};

type PollAnswer = {
  poll_id: string;
  user: User;
  option_ids: Array<number>;
};

export type InlineQuery = {
  id: string;
  from: User;
  query: string;
  offset: string;
  chat_type?: ChatType;
  location?: TelegramLocation;
};

export type ChosenInlineResult = {
  result_id: string;
  from: User;
  location?: TelegramLocation;
  inline_message_id?: string;
  query?: string;
};

export type CallbackQuery = {
  id: string;
  from: User;
  message?: Message;
  inline_message_id?: string;
  chat_instance?: string;
  data?: string;
  game_short_name?: string;
};

export type ShippingQuery = {
  id: string;
  from: User;
  invoice_payload: string;
  shipping_address: ShippingAddress;
};

export type PreCheckoutQuery = {
  id: string;
  from: User;
  currency: string;
  total_amount: number;
  invoice_payload: string;
  shipping_option_id?: string;
  order_info?: OrderInfo;
};

export type ChatMemberUpdated = {
  chat: Chat;
  user: User;
  date: number;
  old_chat_member: ChatMember;
  new_chat_member: ChatMember;
  invite_link?: ChatInviteLink;
};

type ChatInviteLink = {
  invite_link: string;
  creator: User;
  creates_join_request: boolean;
  is_primary: boolean;
  is_revoked: boolean;
  name?: string;
  expire_date?: number;
  member_limit?: number;
  pending_join_request_count?: number;
};

export type ChatMember =
ChatMemberOwner
| ChatMemberAdministrator
| ChatMemberMember
| ChatMemberRestricted
| ChatMemberLeft
| ChatMemberBanned;

type ChatMemberMember = {
  status: string;
  user: User;
};

type ChatMemberOwner = {
  status: string;
  user: User;
  is_anonymous: boolean;
  custom_title?: string;
}

type ChatMemberAdministrator = {
  status: string;
  user: User;
  can_be_edited: boolean;
  is_anonymous: boolean;
  can_manage_chat: boolean;
  can_delete_messages: boolean;
  can_manage_voice_chats: boolean;
  can_restrict_members: boolean;
  can_promote_members: boolean;
  can_change_info: boolean;
  can_invite_users: boolean;
  can_post_messages?: boolean;
  can_edit_messages?: boolean;
  can_pin_messages?: boolean;
  custom_title?: string;
}

type ChatMemberRestricted = {
  status: string;
  user: User;
  is_member: boolean;
  can_change_info: boolean;
  can_invite_users: boolean;
  can_pin_messages: boolean;
  can_send_messages: boolean;
  can_send_media_messages: boolean;
  can_send_polls: boolean;
  can_send_other_messages: boolean;
  can_add_web_page_previews: boolean;
  until_date: number;
}

type ChatMemberLeft = {
  status: string;
  user: User;
}

type ChatMemberBanned = {
  status: string;
  user: User;
  until_date: number;
}

export type ForwardMessageParams = {
  chat_id: number | string;
  from_chat_id: number | string;
  disable_notification?: boolean;
  protect_content?: boolean;
  message_id: number;
};

export type CopyMessageParams = {
  chat_id: number | string;
  from_chat_id: number | string;
  message_id: number;
  caption?: string;
  parse_mode?: string;
  caption_entities?: Array<MessageEntity>;
  disable_notification?: boolean;
  protect_content?: boolean;
  reply_to_message_id?: number;
  allow_sending_without_reply?: boolean;
  reply_markup?:
    InlineKeyboardMarkup
    | ReplyKeyboardMarkup
    | ReplyKeyboardRemove
    | ForceReply;
};

export type SendPhotoParams = {
  chat_id: number | string;
  photo: FormData | string;
  caption?: string;
  parse_mode?: string;
  caption_entities?: Array<MessageEntity>;
  disable_notification?: boolean;
  protect_content?: boolean;
  reply_to_message_id?: number;
  allow_sending_without_reply?: boolean;
  reply_markup?:
    InlineKeyboardMarkup
    | ReplyKeyboardMarkup
    | ReplyKeyboardRemove
    | ForceReply;
};

export type SendLocationParams = {
  chat_id: number | string;
  latitude: number;
  longitude: number;
  horizontal_accuracy?: number;
  live_period?: number;
  heading?: number;
  proximity_alert_radius?: number;
  disable_notification?: boolean;
  protect_content?: boolean;
  reply_to_message_id?: number;
  allow_sending_without_reply?: boolean;
  replyMarkup?:
    | InlineKeyboardMarkup
    | ReplyKeyboardMarkup
    | ReplyKeyboardRemove
    | ForceReply;
}
