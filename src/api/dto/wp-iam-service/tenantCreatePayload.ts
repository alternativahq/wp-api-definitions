export class TenantCreatePayload {
  private _name?: string;
  private _description?: string;
  private _sentAt?: string;
  private _additionalProperties?: Map<String, object | string | number | Array<unknown> | boolean | null>;

  constructor(input: {
    name?: string,
    description?: string,
    sentAt?: string,
  }) {
    this._name = input.name;
    this._description = input.description;
    this._sentAt = input.sentAt;
  }

  get name(): string | undefined { return this._name; }
  set name(name: string | undefined) { this._name = name; }

  get description(): string | undefined { return this._description; }
  set description(description: string | undefined) { this._description = description; }

  get sentAt(): string | undefined { return this._sentAt; }
  set sentAt(sentAt: string | undefined) { this._sentAt = sentAt; }

  get additionalProperties(): Map<String, object | string | number | Array<unknown> | boolean | null> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<String, object | string | number | Array<unknown> | boolean | null> | undefined) { this._additionalProperties = additionalProperties; }
}