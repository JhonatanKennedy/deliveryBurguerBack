import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import Category from './Category';

@Entity('extras')
class Extra {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar')
    name: string;

    @Column('float')
    price: number;

    @Column('varchar')
    category_id:string;

    @ManyToOne(() => Category)
    @JoinColumn({name: 'category_id'})
    extras: Category;
    
}

export default Extra;