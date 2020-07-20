import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('extras')
class Extra {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar')
    name: string;

    @Column('float')
    price: number;
    
}

export default Extra;