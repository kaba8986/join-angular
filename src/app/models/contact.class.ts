export class Contact {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;

  constructor(obj?: any) {
    this.firstName = obj ? obj.firstName : "";
    this.lastName = obj ? obj.lastName : "";
    this.email = obj ? obj.email : "";
    this.phone = obj ? obj.phone : "";
  }

  public toJSON() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phone: this.phone
    }
  }
}