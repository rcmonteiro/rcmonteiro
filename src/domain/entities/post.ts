export class Post {
  private _title: string
  private _body: string
  private _date: string
  private _project: string
  private _tags: string[]

  constructor(
    title: string,
    body: string,
    date: string,
    project: string,
    tags: string[],
  ) {
    this._title = title
    this._body = body
    this._date = date
    this._project = project
    this._tags = tags
  }

  get title(): string {
    return this._title
  }

  get body(): string {
    return this._body
  }

  get date(): string {
    return this._date
  }

  get project(): string {
    return this._project
  }

  get tags(): string[] {
    return this._tags
  }
}
