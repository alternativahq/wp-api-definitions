export class TenantCreatedPayload {
  private _id?: number;
  private _name?: string;
  private _description?: string;
  private _createdAt?: string;
  private _updatedAt?: string;
  private _sentAt?: string;
  private _additionalProperties?: Map<String, object | string | number | Array<unknown> | boolean | null>;

  constructor(input: {
    id?: number,
    name?: string,
    description?: string,
    createdAt?: string,
    updatedAt?: string,
    sentAt?: string,
  }) {
    this._id = input.id;
    this._name = input.name;
    this._description = input.description;
    this._createdAt = input.createdAt;
    this._updatedAt = input.updatedAt;
    this._sentAt = input.sentAt;
  }

  get id(): number | undefined { return this._id; }
  set id(id: number | undefined) { this._id = id; }

  get name(): string | undefined { return this._name; }
  set name(name: string | undefined) { this._name = name; }

  get description(): string | undefined { return this._description; }
  set description(description: string | undefined) { this._description = description; }

  get createdAt(): string | undefined { return this._createdAt; }
  set createdAt(createdAt: string | undefined) { this._createdAt = createdAt; }

  get updatedAt(): string | undefined { return this._updatedAt; }
  set updatedAt(updatedAt: string | undefined) { this._updatedAt = updatedAt; }

  get sentAt(): string | undefined { return this._sentAt; }
  set sentAt(sentAt: string | undefined) { this._sentAt = sentAt; }

  get additionalProperties(): Map<String, object | string | number | Array<unknown> | boolean | null> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<String, object | string | number | Array<unknown> | boolean | null> | undefined) { this._additionalProperties = additionalProperties; }
}