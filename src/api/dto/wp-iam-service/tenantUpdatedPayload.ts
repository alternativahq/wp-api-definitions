export class TenantUpdatedPayload {
  private _id?: number;
  private _name?: string;
  private _description?: string;
  private _email?: string;
  private _image?: string;
  private _password?: string;
  private _username?: string;
  private _createdAt?: string;
  private _updatedAt?: string;
  private _sentAt?: string;
  private _additionalProperties?: Map<String, object | string | number | Array<unknown> | boolean | null>;

  constructor(input: {
    id?: number,
    name?: string,
    description?: string,
    email?: string,
    image?: string,
    password?: string,
    username?: string,
    createdAt?: string,
    updatedAt?: string,
    sentAt?: string,
  }) {
    this._id = input.id;
    this._name = input.name;
    this._description = input.description;
    this._email = input.email;
    this._image = input.image;
    this._password = input.password;
    this._username = input.username;
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

  get email(): string | undefined { return this._email; }
  set email(email: string | undefined) { this._email = email; }

  get image(): string | undefined { return this._image; }
  set image(image: string | undefined) { this._image = image; }

  get password(): string | undefined { return this._password; }
  set password(password: string | undefined) { this._password = password; }

  get username(): string | undefined { return this._username; }
  set username(username: string | undefined) { this._username = username; }

  get createdAt(): string | undefined { return this._createdAt; }
  set createdAt(createdAt: string | undefined) { this._createdAt = createdAt; }

  get updatedAt(): string | undefined { return this._updatedAt; }
  set updatedAt(updatedAt: string | undefined) { this._updatedAt = updatedAt; }

  get sentAt(): string | undefined { return this._sentAt; }
  set sentAt(sentAt: string | undefined) { this._sentAt = sentAt; }

  get additionalProperties(): Map<String, object | string | number | Array<unknown> | boolean | null> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<String, object | string | number | Array<unknown> | boolean | null> | undefined) { this._additionalProperties = additionalProperties; }
}