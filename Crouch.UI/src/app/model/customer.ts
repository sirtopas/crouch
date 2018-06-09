import { Order } from './order';

export class Customer {
    public customerId: number;
    public firstName: string;
    public lastName: string;
    public address1: string;
    public address2: string;
    public town: string;
    public county: string;
    public postCode: string;
    public phoneNumber: string;
    public mobileNumber: string;
    public emailAddress: string;
    public orders: Order[];
}
