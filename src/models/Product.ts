import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import Category from './Category';

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

    @Column('uuid')
    category_id:string

    @ManyToOne(() => Category)
    @JoinColumn({name: 'category_id'})
    product: Category;

    @Column('varchar')
    photo: string;
    
}

export default Product;