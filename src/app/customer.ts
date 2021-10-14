export class Customer {
  public id!: number;
  public firstName!: string;
  public lastName!: string;
  public address!: string;
  public contactNumber!: string;

  constructor(
    id: number,
    firstName: string,
    lastName: string,
    address: string,
    contactNumber: string
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.contactNumber = contactNumber;
  }
}
