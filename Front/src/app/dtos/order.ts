import { OrderDetail } from './orderdetail';
import { Customer } from './customer';
export class Order{
    total:number;
    Customer:Customer;
    orderDetail:OrderDetail;
}