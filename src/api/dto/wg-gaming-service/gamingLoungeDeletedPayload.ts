export class GamingLoungeDeletedPayload {
  private _id?: number;
  private _type?: number;
  private _state?: number;
  private _gameTypeId?: number;
  private _assetId?: number;
  private _enterenceFee?: number;
  private _prize?: number;
  private _deleted?: boolean;
  private _sentAt?: string;
  private _createdAt?: string;
  private _updatedAt?: string;
  private _additionalProperties?: Map<String, object | string | number | Array<unknown> | boolean | null>;

  constructor(input: {
    id?: number,
    type?: number,
    state?: number,
    gameTypeId?: number,
    assetId?: number,
    enterenceFee?: number,
    prize?: number,
    deleted?: boolean,
    sentAt?: string,
    createdAt?: string,
    updatedAt?: string,
  }) {
    this._id = input.id;
    this._type = input.type;
    this._state = input.state;
    this._gameTypeId = input.gameTypeId;
    this._assetId = input.assetId;
    this._enterenceFee = input.enterenceFee;
    this._prize = input.prize;
    this._deleted = input.deleted;
    this._sentAt = input.sentAt;
    this._createdAt = input.createdAt;
    this._updatedAt = input.updatedAt;
  }

  get id(): number | undefined { return this._id; }
  set id(id: number | undefined) { this._id = id; }

  get type(): number | undefined { return this._type; }
  set type(type: number | undefined) { this._type = type; }

  get state(): number | undefined { return this._state; }
  set state(state: number | undefined) { this._state = state; }

  get gameTypeId(): number | undefined { return this._gameTypeId; }
  set gameTypeId(gameTypeId: number | undefined) { this._gameTypeId = gameTypeId; }

  get assetId(): number | undefined { return this._assetId; }
  set assetId(assetId: number | undefined) { this._assetId = assetId; }

  get enterenceFee(): number | undefined { return this._enterenceFee; }
  set enterenceFee(enterenceFee: number | undefined) { this._enterenceFee = enterenceFee; }

  get prize(): number | undefined { return this._prize; }
  set prize(prize: number | undefined) { this._prize = prize; }

  get deleted(): boolean | undefined { return this._deleted; }
  set deleted(deleted: boolean | undefined) { this._deleted = deleted; }

  get sentAt(): string | undefined { return this._sentAt; }
  set sentAt(sentAt: string | undefined) { this._sentAt = sentAt; }

  get createdAt(): string | undefined { return this._createdAt; }
  set createdAt(createdAt: string | undefined) { this._createdAt = createdAt; }

  get updatedAt(): string | undefined { return this._updatedAt; }
  set updatedAt(updatedAt: string | undefined) { this._updatedAt = updatedAt; }

  get additionalProperties(): Map<String, object | string | number | Array<unknown> | boolean | null> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<String, object | string | number | Array<unknown> | boolean | null> | undefined) { this._additionalProperties = additionalProperties; }
}