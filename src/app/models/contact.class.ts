export class Contact {
  name: string;
  email: string;
  phone: string;

  constructor(obj?: any) {
    this.name = obj ? obj.name : "";
    this.email = obj ? obj.email : "";
    this.phone = obj ? obj.phone : "";
  }

  public toJSON() {
    return {
      name: this.name,
      email: this.email,
      phone: this.phone
    }
  }
}