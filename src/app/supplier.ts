export class Supplier {
  public id!: number;
  public name!: string;
  public code!: string;
  public streetAddress!: string;
  public city!: string;
  public postCode!: string;
  public email!: string;
  public contactPerson!: string;
  public contactNumber!: string;


  constructor(
    id: number,
    name: string,
    code: string,
    streetAddress: string,
    city: string,
    postCode: string,
    email: string,
    contactPerson: string,
    contactNumber: string
  ) {
    this.id = id;
    this.name = name;
    this.code = code;
    this.streetAddress = streetAddress;
    this.city = city;
    this.contactNumber = contactNumber;
    this.postCode = postCode;
    this.email = email;
    this.contactPerson = contactPerson;
    this.contactNumber = contactNumber;
  }
}
