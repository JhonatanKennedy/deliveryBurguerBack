import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('category')
class Category {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar')
    name: string;
}

export default Category;