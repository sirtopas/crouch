import { Customer } from '../model/customer';
import { OrderItem } from '../model/order-item';

export class Order {
    public orderId: number;
    public orderStatusId: number;
    public customerId: number;
    public orderTitle: string;
    public orderDate: Date;
    public collectionDate: Date;
    public orderDeposit: number;
    public orderValue: number;
    public customer: Customer;
    public orderItems: OrderItem[];
}
