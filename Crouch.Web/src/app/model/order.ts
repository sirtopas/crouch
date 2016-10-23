import { Customer } from '../model/customer';

export class Order {
    public OrderId: number;
    public OrderStatusId: number;
    public CustomerId: number;
    public OrderTitle: string;
    public OrderDate: Date;
    public CollectionDate: Date;
    public OrderDeposit: number;
    public OrderValue: number;
    public Customer: Customer;
}