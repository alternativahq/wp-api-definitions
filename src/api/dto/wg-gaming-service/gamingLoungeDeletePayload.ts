export class GamingLoungeDeletePayload {
  private _id?: number;
  private _sentAt?: string;
  private _additionalProperties?: Map<String, object | string | number | Array<unknown> | boolean | null>;

  constructor(input: {
    id?: number,
    sentAt?: string,
  }) {
    this._id = input.id;
    this._sentAt = input.sentAt;
  }

  get id(): number | undefined { return this._id; }
  set id(id: number | undefined) { this._id = id; }

  get sentAt(): string | undefined { return this._sentAt; }
  set sentAt(sentAt: string | undefined) { this._sentAt = sentAt; }

  get additionalProperties(): Map<String, object | string | number | Array<unknown> | boolean | null> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<String, object | string | number | Array<unknown> | boolean | null> | undefined) { this._additionalProperties = additionalProperties; }
}