export class ContactFormDetails {
  constructor(
    public id: any,
    public name: string,
    public email: string,
    public subject: string,
    public message: string = '', // Provide a default value
    public date:string
  ) {}
}
