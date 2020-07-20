import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar')
    name: string;

    @Column('float')
    price: number; 

    @Column('varchar')
    description: string;

    @Column('varchar')
    photo: string;
}

export default Product;