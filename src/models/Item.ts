import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import Checkout from './Checkout';

@Entity('item')
class Item {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar')
    product_name: string;

    @Column('float')
    price: number;

    @Column('int')
    quantity: number;

    @Column('varchar')
    extra_names: string;

    @Column('varchar')
    notes: string;

    @Column('uuid')
    id_checkout:string;

    @ManyToOne(() => Checkout)
    @JoinColumn({name: 'id_checkout'})
    item: Checkout;

}

export default Item;