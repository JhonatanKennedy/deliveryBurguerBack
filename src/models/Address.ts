import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import User from './User'

@Entity('address')
class Address {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar')
    title: string;

    @Column('varchar')
    street: string;

    @Column('int')
    number: number;

    @Column('varchar')
    additional: string;

    @Column('uuid')
    user_id: string;

    @ManyToOne(() => User)
    @JoinColumn({name: 'user_id'})
    address: User;

}

export default Address;