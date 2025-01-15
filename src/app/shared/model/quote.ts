export class QuoteFormDetails {
  constructor(
    public id: any,
    public name: string,
    public email: string,
    public phone: string,
    public movingType: string,
    public moveDate: string,
    public movingFrom: string,
    public movingTo: string,
    public inventory: string,
    public message: string = '', // Provide a default value
    public date: string
  ) {}
}
