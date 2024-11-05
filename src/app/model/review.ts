export class Review {
  private _name:String;
  private _msg:String;
  private _desc:String;
  private _rating:number;
  private _date:String;


  constructor(name: String, msg: String, desc: String, rating: number, date: String) {
    this._name = name;
    this._msg = msg;
    this._desc = desc;
    this._rating = rating;
    this._date = date;
  }


  get name(): String {
    return this._name;
  }

  get msg(): String {
    return this._msg;
  }

  get desc(): String {
    return this._desc;
  }

  get rating(): number {
    return this._rating;
  }

  get date(): String {
    return this._date;
  }
}
